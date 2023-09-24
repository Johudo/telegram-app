import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "components/button/button";
import { SearchInput } from "components/search-input/search-input";
import { Typo } from "components/typo/typo";
import { FC } from "react";
import styles from "./main-page.module.scss";
import data from "data.json";
import { ProductCard } from "components/product-card/product-card";

export const MainPage: FC = () => {
    return (
        <div className={styles.page}>
            <Typo view="heading2">Каталог</Typo>
            <div className={styles.searchWrapper}>
                <SearchInput className={styles.search} />
                <Button iconOnly>
                    <FontAwesomeIcon icon={faSliders} />
                </Button>
            </div>

            <div className={styles.productList}>
                {data.products.map((product) => (
                    <ProductCard key={product.uid} product={product} />
                ))}
            </div>
        </div>
    );
};
