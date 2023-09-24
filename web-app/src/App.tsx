import { TelegramProvider } from "contexts/telegram-context";
import { MainPage } from "pages/main-page/main-page";

function App() {
    return (
        <TelegramProvider>
            <MainPage />
        </TelegramProvider>
    );
}

export default App;
