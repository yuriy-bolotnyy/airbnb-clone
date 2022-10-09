import React from "react";
import logo from "../assets/react.svg"
import './Navbar.css'
// import "./components/Navbar.css"
// import logo from "./assets/Airbnb_Logo.svg"

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <img src={logo} alt="logo"/>
            </nav>
        </div>
    )
}

export default Navbar