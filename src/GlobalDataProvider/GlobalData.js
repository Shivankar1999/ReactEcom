import { createContext, useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDW9Vqiu0JMoHEe7Xs0HDa9X3KN7hxUjWQ",
  authDomain: "urecomapp.firebaseapp.com",
  projectId: "urecomapp",
  storageBucket: "urecomapp.appspot.com",
  messagingSenderId: "326557543596",
  appId: "1:326557543596:web:743f8f579c135b4171c309",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const GlobalContant = createContext(null);

export const GlobalData = ({ children }) => {
  const [username, setUserName] = useState("");
  const [user, setuser] = useState(null);
  const [showProfile, setshowProfile] = useState(false);
  const [products, setProducts] = useState([]);
  const [news, setnews] = useState(null);

  const [product, setProduct] = useState([]);
  const [CartCount, setCartCount] = useState("0");
  const [loader, setloader] = useState(true);
  const [normalizePeoducts, setnormalizePeoducts] = useState(true);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setuser(user);
      } else {
        setuser(null);
      }
    });
  }, []);

  // Firebase Functions
  const CreateUserWemailPass = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  const SignInUserWemailPass = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);
  const isLogedIn = user ? "true" : "false";

  // App Functions
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
      const resnews = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=27ac1fe501ae436c9776558fb582afc3"
      );
      const newsres = await resnews.json();

      setloader(false);
      setnormalizePeoducts(true);
      setnews(newsres.articles);

      setProducts(data);
    };
    getAllD();
    if (localStorage.getItem("cartItem")) {
      let getCartCount = JSON.parse(localStorage.getItem("cartItem")).length;
      // console.log(getCartCount);
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

        CreateUserWemailPass,
        SignInUserWemailPass,
        isLogedIn,
        setUserName,
        username,
        signOut,
        firebaseAuth,
        setshowProfile,
        showProfile,
        news,
      }}
    >
      {children}
    </GlobalContant.Provider>
  );
};
