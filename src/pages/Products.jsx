import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContant } from "../GlobalDataProvider/GlobalData.js";
import styles from "../styles/products.module.css";

const Products = () => {
  let ItemC = [];

  let { products, setProduct, setCartCount } = useContext(GlobalContant);

  const getProduct = (id) => {
    let resD = products.filter((item) => item.id == id);
    setProduct(resD);
  };

  const setLocalStorage = (id) => {
    let itemcart = products.filter((item) => item.id == id);

    ItemC.push(itemcart[0]);
    localStorage.setItem("cartItem", JSON.stringify(ItemC));

    setCartCount(ItemC.length);
    alert("Item Added");
  };

  return (
    <div className={styles.products_container}>
      <section className={styles.landingSec}>
        {products.map((product) => {
          return (
            <div className={styles.productItem} key={product.id}>
              <div className={styles.imgB}>
                <img src={`${product.image}`} alt="img-data" />
              </div>
              <div className={styles.productD}>
                <h3>
                  <bold>Category</bold>
                  {product.category}
                </h3>
                <p>{product.title}</p>
                <span>Rate : {product.price}Rs.</span>
                <div className={styles.btnBox}>
                  <Link
                    onClick={() => {
                      setLocalStorage(product.id);
                    }}
                  >
                    Add To Cart
                  </Link>
                  <Link
                    to={"/productdetail"}
                    onClick={() => {
                      getProduct(product.id);
                    }}
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Products;
