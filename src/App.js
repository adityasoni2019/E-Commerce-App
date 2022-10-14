import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Outlet, Link } from "react-router-dom";

// import HomePage from './pages/homepage/homepage.component';

const HomePage = (props) =>{
  console.log(props);
  return (
    <div>
      <Link to = "/user1">Go to page 1</Link>
      <h1>HomePage</h1>
    </div>
  )
}
const HelloItem1 = (props) =>{
  console.log(props);
  
  return (
    <div>
      <h1>HelloItem1</h1>
    </div>
  )
}

const HelloItem2 = (props) =>{
  console.log(props);
  return (
    <div>
      <h1>HelloItem2</h1>
    </div>
  )
}

const App = () => {

  return (
    
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/user1" element={<HelloItem1 />} />
      <Route path="/user2" element={<HelloItem2 />} />
    </Routes>
  );
};

export default App;