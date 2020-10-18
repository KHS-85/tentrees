import React from 'react'
import { NavLink } from 'react-router-dom'
import Logofull from '../gfx/logofull.png'
import Logosmall from '../gfx/logosmall.png'
import './style/nav.scss'

window.onload = function () { scrollFunction() };
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        // small size
        document.getElementById("navbar").style.padding = "3px 10px";
        document.getElementById("logolarge").style.display = "none";   // large logo is hidden
        document.getElementById("logosmall").style.display = "block"; // small logo is visible
    } else {
        // large size
        document.getElementById("navbar").style.padding = "12px 10px";
        document.getElementById("logolarge").style.display = "block";  // large logo is visible
        document.getElementById("logosmall").style.display = "none";  // small logo is hidden
    }
}


// Brugte en del tid på denne function (og CSS), da den skal kunne få fat i både den venstre og den højre nav. Rimelig stolt af at den virker :P
function burgerMenu() {
    var x, i;
    x = document.querySelectorAll(".burgernav");
    for (i = 0; i < x.length; i++) {
        if (x[i].className === "burgernav") {
            x[i].className += " responsive";
            console.log("burger-button clicked: showing navlinks")
        } else {
            x[i].className = "burgernav";
            console.log("burger-button clicked: hiding navlinks")
        }
    }
}

function c() {
    var x, i;
    x = document.querySelectorAll(".burgernav");
    for (i = 0; i < x.length; i++) {
        x[i].className = "burgernav";
    }
}


const Nav = () => {
    return (

        <div className="nav-wrapper">
            <div className="container-fluid">
                <div className="row topnav" id="navbar">

                    <div id="navbar-left" className="burgernav">
                        <button className="icon" onClick={burgerMenu}> <i className="fa fa-bars"></i> </button>
                        <NavLink to="women" onClick={c} className="navbar_link" activeClassName="navbar_link--active">Women</NavLink>
                        <NavLink to="/men" onClick={c} className="navbar_link" activeClassName="navbar_link--active">Men</NavLink>
                        <NavLink to="/Accessories" onClick={c} className="navbar_link" activeClassName="navbar_link--active">Accessories</NavLink>
                        <NavLink to="/About" onClick={c} className="navbar_link" activeClassName="navbar_link--active">About</NavLink>
                    </div>

                    <div className="logodiv text-center">
                        <div id="logolarge"><NavLink exact to="/" className="navbar_link" activeClassName="navbar_link--active"><img className="logo logolarge" src={Logofull} alt="Logo" /></NavLink></div>
                        <div id="logosmall"><NavLink exact to="/" className="navbar_link" activeClassName="navbar_link--active"><img className="logo logosmall" src={Logosmall} alt="Logo" /></NavLink></div>
                    </div>

                    <div id="navbar-right" className="burgernav">
                        <NavLink to="/Trees" onClick={c} className="navbar_link" activeClassName="navbar_link--active">Register Your Trees</NavLink>
                        <NavLink to="/Search" onClick={c} className="navbar_link" activeClassName="navbar_link--active">Search</NavLink>
                        <NavLink to="/Account" onClick={c} className="navbar_link" activeClassName="navbar_link--active">Account</NavLink>
                        <NavLink to="/Basket" onClick={c} className="navbar_link" activeClassName="navbar_link--active">Basket</NavLink>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Nav
