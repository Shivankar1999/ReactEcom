import React, { useContext } from "react";

import styles from "../styles/products.module.css";
import { GlobalContant } from "../GlobalDataProvider/GlobalData.js";
import Product from "./Product.jsx";
import Loader from "../components/Loader";

const Products = () => {
  let { loader, setloader } = useContext(GlobalContant);

  return (
    <div className={styles.products_container}>
      {loader ? <Loader /> : <Product />}
    </div>
  );
};

export default Products;
