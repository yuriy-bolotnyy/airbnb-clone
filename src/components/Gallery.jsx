import React from "react";
import galleryImage from "../assets/gallery.png";
import "./Gallery.css"

const Gallery = () => {
    return (
        <section className="gallery">
            {/* <img src="{galleryImage}" alt="gallery" /> */}
            <img src={galleryImage} alt="logo" className="gallery--image"/>
            <h1 className="gallery--header">Online Experiences</h1>
            <p className="gallery--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Gallery