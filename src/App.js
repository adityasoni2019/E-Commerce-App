import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';
import HelloItem from "./pages/hello/hello";
import HelloItem2 from "./pages/hello/hello2";

const App = () => {

  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user1" element={<HelloItem />} />
      <Route path="/user2" element={<HelloItem2 />} />
    </Routes>
  );
};

export default App;