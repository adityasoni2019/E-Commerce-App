import React from "react";

import './header-styles.css'

import {Link} from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg'
import {auth} from '../../firebase/firebase.utils'

// Now, this is basically going to the reactanlge on top, which 
// has the logo, and other stuff. 


const Header = ({currentUser}) => (

    <div className="header">

        <Link className="logo-container" to = '/'>
            <Logo className="logo"/>
        </Link>

        <div className="options">
            <Link className="option" to = '/shop'>
                SHOP
            </Link>

            <Link className="option" to = '/shop'>
                CONTACT
            </Link>

            {
                currentUser?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> // if true
                :
                <Link className="option" to = '/signin'>SIGN IN</Link> // else 
            }

        </div>

    </div>

); 

export default Header; 