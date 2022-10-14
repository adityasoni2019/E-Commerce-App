import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';
import HelloItem from "./pages/hello/hello";

import './App.css';
const App = () => {

  
  return (
    //   <Link to="/" index element={<HomePage />} />
    //   <Link to='/aditya' index element={<HomePage />} />
    //   <Link to='/hhh' index element={<MenuItem />} />
    // <R
    <Routes>
      <Route path="/hoes" element={<HomePage />} />
      <Route path="/hoe" element={<HelloItem />} />
    </Routes>

  );
};

export default App;