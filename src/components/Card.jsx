import React from "react";
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    console.log(`src=${props.img}`)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    // badgeText = ""

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <div >
                <img src={props.img} alt={props.img} className="card--image"/>
            </div>

            <div className="card--body">

                <div className="card--rating">
                    {/* <p> */}
                        <span style={{color:"red"}}>
                            <FontAwesomeIcon icon={faStar} /> 
                        </span>
                        <span> {props.rating} </span>
                        <span style={{color:"grey"}}> ({props.reviews}) USA</span>
                    {/* </p> */}
                    
                </div>

                <div className="card--text">
                    {/* <p> */}
                        {props.text}
                    {/* </p> */}
                </div>

                <div className="card--price">
                    {/* <p> */}
                    <span style={{fontWeight:"bold"}}>From {props.price}</span> / person
                         
                    {/* </p> */}
                </div>
            </div>
        </div>
    )
}

export default Card