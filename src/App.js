import './App.css'
import React , {Component} from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import CollectionPreview from "./components/collection-preview/collection-preview.component";

import HomePage from "./pages/homepage/homepage.component";

import Header from './components/header/header-component';

import ShopPage from "./pages/shop/Shop.component";

const App = () => {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage/>} />

      </Routes>
    </div>
  );
};

export default App;