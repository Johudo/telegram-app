import { Card } from "components/card/card";
import { Typo } from "components/typo/typo";
import { useMemo } from "react";
import { FC } from "react";
import { TProduct } from "types/product";
import styles from "./product-card.module.scss";

export type ProductCardProps = {
    product: TProduct;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const imagesData: string[] = useMemo(() => {
        return JSON.parse(product.gallery).map((item: Record<string, string>) => item.img);
    }, [product]);

    return (
        <Card>
            <div className={styles.card__imageWrapper}>
                <img src={imagesData[0]} className={styles.card__image} />
            </div>

            <div className={styles.card__content}>
                <Typo view="subtitle3">{product.title}</Typo>
            </div>
        </Card>
    );
};
