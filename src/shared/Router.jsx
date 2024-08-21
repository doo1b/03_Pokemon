import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Dex from "../pages/Dex";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dex' element={<Dex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
