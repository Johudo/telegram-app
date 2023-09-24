import cn from "classnames";
import { FC, ReactNode } from "react";
import styles from "./card.module.scss";

export type CardProps = {
    href?: string;
    className?: string;
    children?: ReactNode;
};

export const Card: FC<CardProps> = ({ href, className, children }) => {
    let Element: "div" | "a" = "div";

    if (href) {
        Element = "a";
    }

    return (
        <Element href={href} className={cn(styles.card, className)}>
            {children}
        </Element>
    );
};
