import React, { useContext } from "react";
import { GlobalContant } from "../GlobalDataProvider/GlobalData.js";
import styles from "../styles/productD.module.css";
const ProductDetail = () => {
  const { product } = useContext(GlobalContant);

  return (
    <div className={styles.paroductIBox}>
      <div className={styles.productD}>
        <div className={styles.proImgBox}>
          <img src={product[0].image} alt="prod.img" />
        </div>
        <div className={styles.Pcontent}>
          <h3>{product[0].category}</h3>
          <p>{product[0].title}</p>
          <p>{product[0].description}</p>
          <p>{product[0].price}Rs.</p>
          <p>Rating : {product[0].rating.rate}</p>
          <button>Add To Cart </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
