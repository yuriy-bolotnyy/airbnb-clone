import React from "react"
import "./Contact.css"

import envelope from "../assets/envelope.png"
import phone from "../assets/phone.png"

const Contact = (props) => {
    return (
        <div className="contact-card">
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src={phone} />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src={envelope} />
                    <p>{props.email}</p>
                </div>
        </div>
    )
}

export default Contact