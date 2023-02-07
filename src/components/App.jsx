import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Navbar";
import {
  News,
  Mycartitem,
  PageNotFound,
  ProductDetail,
  Products,
  AddAcount,
} from "../pages";
import { GlobalData } from "../GlobalDataProvider/GlobalData";
import Fotter from "./Fotter";

const App = () => {
  return (
    <>
      <GlobalData>
        <Navbar />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/addacount" element={<AddAcount />} />
          <Route path="/mycartitem" element={<Mycartitem />} />
          <Route path={`/productdetail`} element={<ProductDetail />} />
          <Route path={"*"} element={<PageNotFound />} />
        </Routes>
        <Fotter />
      </GlobalData>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;
