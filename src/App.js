
import React , {Component} from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import CollectionPreview from "./components/preivew-collection/collection-preview.component";

import HomePage from "./pages/homepage/homepage.component";

import ShopPage from "./pages/shop/Shop.component";

const App = () => {

  return (
    
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage/>} />
      
    </Routes>
  );
};

export default App;