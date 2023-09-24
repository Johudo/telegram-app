import cn from "classnames";
import { FC } from "react";
import { ReactNode } from "react";
import { TTypoColor, TTypoTag, TTypoView } from "./types";
import styles from "./typo.module.scss";

export type TypoProps = {
    children?: ReactNode;
    view?: TTypoView;
    color?: TTypoColor;
    tag?: TTypoTag;
    className?: string;
};

export const Typo: FC<TypoProps> = ({ children, view = "body1", color = "main", tag = "p", className }) => {
    let ResultTag = tag;

    if (view === "heading1") {
        ResultTag = "h1";
    } else if (view === "heading2") {
        ResultTag = "h2";
    } else if (view === "subtitle3") {
        ResultTag = "h6";
    }

    return (
        <ResultTag className={cn(styles[`typo_${view}View`], styles[`typo_${color}Color`], className)}>
            {children}
        </ResultTag>
    );
};
