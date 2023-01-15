import { createContext, useEffect, useState } from "react";

export const GlobalContant = createContext(null);

export const GlobalData = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState([]);
  const [CartCount, setCartCount] = useState("0");
  const [loader, setloader] = useState(true);
  const [normalizePeoducts, setnormalizePeoducts] = useState(true);

  const sortbyprice = () => {
    let sortlist = products.sort((a, b) => a.price - b.price);
    console.log(sortlist, "by price");
    setProduct(sortlist);
    setnormalizePeoducts(false);
  };

  const sortbynormal = () => {
    let sortlist = products.sort((a, b) => b.price - a.price);
    console.log(sortlist, "by price");
    setProduct(sortlist);
    setnormalizePeoducts(true);
  };

  useEffect(() => {
    const getAllD = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setloader(false);
      setnormalizePeoducts(true);

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
        loader,
        setloader,
        sortbyprice,
        normalizePeoducts,
        setnormalizePeoducts,

        sortbynormal,
      }}
    >
      {children}
    </GlobalContant.Provider>
  );
};
