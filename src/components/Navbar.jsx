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



// import zaferesImg from "../assets/zaferes.png"
// import './Card.css'
// // import "./components/Navbar.css"
// // import logo from "./assets/Airbnb_Logo.svg"

// const Card = () => {
//     return (
//         <div className="navbar">
//             <nav>
//                 <img src={zaferesImg} alt="logo"/>