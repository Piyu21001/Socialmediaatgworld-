import React from 'react';
import {NavDropdown} from 'react-bootstrap';
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Header(){
  return (
    <div>
    <div className="header">
    <div className="letters">
            ATG.<span className="greyLetter">W</span>O<span className="greyLetter">RLD</span>
        </div>
        <div className="search-bar">
        <i class="fas fa-search" />
          <input

              type="text"
              id="header-search"
              placeholder="  Search Anyhing!"
              name="s"
          />
      </div>
      </div>
      <Router>
      <div className="login">
      <NavDropdown title="Create Account. Its Free!" id="collasible-nav-dropdown">
      <Link className="nav-link" to={"/sign-in"}>Login</Link>
       <Link className="nav-link" to={"/sign-up"}>Sign up</Link>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={Signup} />
          </Switch>
        </div>
      </div>

       </NavDropdown></div>
       </Router>
        <h1 className="title">Computer Engineering</h1>
        <p className="title-para">142,765 Computers Engineers follow this</p>
        <img className="title-img" src="https://wallpapercave.com/wp/wp2700080.jpg"/>
        <hr className="line" />
    </div>
    );
}

 export default Header;