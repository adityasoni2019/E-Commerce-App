import './App.css'
import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, Outlet, Link, createPath } from "react-router-dom";
import CollectionPreview from "./components/collection-preview/collection-preview.component";

// I think, auth has a lot of fundamental firebase functions inside it. i'll have to look furthere into it. 
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header-component';

import ShopPage from "./pages/shop/Shop.component";
import { onSnapshot } from 'firebase/firestore';

class App extends React.Component {

  constructor() {

    super();

    this.state = {
      currentUser: null
    };

  }


  // don't understand this part. :/

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id, 
                ...snapShot.data()
              }
            },
            () =>{
              console.log(this.state);
            }
          );
        });
      }
      
      this.setState({currentUser: userAuth});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }
};

export default App;