import cn from "classnames";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import styles from "./search-input.module.scss";

export type SearchInputProps = { className?: string };

export const SearchInput: FC<SearchInputProps> = ({ className }) => {
    return (
        <div className={cn(styles.input__wrapper, className)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.input__icon} />
            <input type="text" placeholder="Поиск" className={styles.input} />
        </div>
    );
};
