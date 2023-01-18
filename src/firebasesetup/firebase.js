import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAzhXZqDz8saJxF_1MJy5wqRor0GJnU-Ww",
  authDomain: "react-ecom-82fac.firebaseapp.com",
  projectId: "react-ecom-82fac",
  storageBucket: "react-ecom-82fac.appspot.com",
  messagingSenderId: "395494241446",
  appId: "1:395494241446:web:66abbfb88661f36a923067",
  databaseURL: "https://react-ecom-82fac-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
