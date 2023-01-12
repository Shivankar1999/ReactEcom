import { createContext, useEffect, useState } from "react";

export const GlobalContant = createContext(null);

export const GlobalData = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [CartCount, setCartCount] = useState("0");
  const [Persist, setPersist] = useState([]);

  useEffect(() => {
    const getAllD = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    getAllD();
    if (localStorage.getItem("cartItem")) {
      let getCartCount = JSON.parse(localStorage.getItem("cartItem")).length;
      console.log(getCartCount);
      setCartCount(getCartCount);
    }
  }, []);

  return (
    <GlobalContant.Provider
      value={{
        products,
        setProducts,
        product,
        setProduct,
        CartCount,
        setCartCount,
        Persist,
        setPersist,
      }}
    >
      {children}
    </GlobalContant.Provider>
  );
};
