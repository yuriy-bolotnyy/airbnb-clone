import React from "react";
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    console.dir(`src=${props}`)
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
                <img src={props.coverImg} alt={props.coverImg} className="card--image"/>
            </div>

            <div className="card--body">

                <div className="card--rating">
                    {/* <p> */}
                        <span style={{color:"red"}}>
                            <FontAwesomeIcon icon={faStar} /> 
                        </span>
                        <span> {props.stats.rating} </span>
                        <span style={{color:"grey"}}> ({props.stats.reviewCount}) USA</span>
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