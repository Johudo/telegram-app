import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { TelegramWebApps } from "telegram-webapps-types";

export interface ITelegramContext {
    webApp?: TelegramWebApps.WebApp;
    unsafeData?: TelegramWebApps.WebAppInitData;
    user?: TelegramWebApps.WebAppUser;
}

export const TelegramContext = createContext<ITelegramContext>({});
export const TelegramProvider = ({ children }: { children: React.ReactNode }) => {
    const [webApp, setWebApp] = useState<TelegramWebApps.WebApp | undefined>(undefined);

    useEffect(() => {
        const w = window as typeof window & { Telegram?: TelegramWebApps.SDK };
        const app = w.Telegram?.WebApp;

        console.log("Telegram", w.Telegram);

        if (app) {
            app.ready();
            setWebApp(app);
        }
    }, []);

    const value = useMemo(() => {
        let contextValue: ITelegramContext;

        if (webApp) {
            contextValue = {
                webApp,
                unsafeData: webApp?.initDataUnsafe,
                user: webApp?.initDataUnsafe.user,
            };
        } else {
            contextValue = {};
        }

        console.log("Update telegram webApp", contextValue);
        return contextValue;
    }, [webApp]);

    return <TelegramContext.Provider value={value}>{children} </TelegramContext.Provider>;
};

export const useTelegram = () => useContext(TelegramContext);
