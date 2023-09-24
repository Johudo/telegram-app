import cn from "classnames";
import { FC, ReactNode } from "react";
import styles from "./button.module.scss";

export type ButtonProps = {
    className?: string;
    children?: ReactNode;
    iconOnly?: boolean;
};

export const Button: FC<ButtonProps> = ({ className, children, iconOnly }) => {
    return <button className={cn(styles.button, iconOnly && styles.button_iconOnly, className)}>{children}</button>;
};
