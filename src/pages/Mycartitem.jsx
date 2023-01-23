import React, { useEffect, useState, useContext } from "react";
import styles from "../styles/mycartitempage.module.css";
import { GlobalContant } from "../GlobalDataProvider/GlobalData.js";
import { useNavigate } from "react-router-dom";
const Mycartitem = () => {
  const [items, setItem] = useState([]);
  const navigate = useNavigate();
  let { CartCount, setCartCount } = useContext(GlobalContant);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cartItem"));
    setItem(data);
  }, [CartCount]);

  // console.log(CartI);
  const removeItem = (id) => {
    let CartI = items.filter((item) => item.id != id);
    localStorage.removeItem("cartItem");
    setCartCount(CartI.length);
    localStorage.setItem("cartItem", JSON.stringify(CartI));

    alert("Item Remove From The Cart");
    navigate("/");
  };
  return (
    <div className={styles.mycartitembox}>
      <div className={styles.mycartitems}>
        {items.map((I, i) => {
          return (
            <div className={styles.cartitem} key={i}>
              <div className={styles.cartimg}>
                <img src={I.image} />
              </div>
              <h2>{I.title}</h2>
              <h3>{I.price} Rs </h3>
              <button onClick={() => removeItem(I.id)}>Remove From Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mycartitem;
