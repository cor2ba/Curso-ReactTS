import { useContext, CSSProperties } from "react";
import styles from "../styles/styles.module.css"
import { ProductContext } from "./ProductCard";

interface Props {
   className?: string,
   title?: string,
   style?: CSSProperties
}

export const ProductTitle = ({ title, className, style }: Props) => {
    
    const {product} = useContext(ProductContext)
    


    return (
        <span className={`${styles.productDescription} ${className}`} style={style}>{ title ? title : product.title}</span>
    )
}