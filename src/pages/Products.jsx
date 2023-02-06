import React, { useContext } from "react";

import styles from "../styles/products.module.css";
import { GlobalContant } from "../GlobalDataProvider/GlobalData.js";
import Product from "./Product.jsx";
import Loader from "../components/Loader";

const Products = () => {
  let { loader, products, sortbynormal, sortbyprice, normalizePeoducts } =
    useContext(GlobalContant);

  return (
    <div className={styles.products_container}>
      <div className={styles.sortbtn}>
        {normalizePeoducts ? (
          <button onClick={() => sortbyprice()}>MinUp&#8377;</button>
        ) : (
          <button onClick={() => sortbynormal()}>MaxUp&#8377;</button>
        )}
      </div>
      {loader ? <Loader /> : <Product products={products} />}
    </div>
  );
};

export default Products;
