import React from "react";
import Card from "./Card"
import zaferesImg from "../assets/zaferes.png"
import weddingImg from "../assets/wedding.png"
import bikingImg from "../assets/biking.png"

const Cards = () => {
    return (
        <div>
             <Card 
                img={zaferesImg} 
                rating="5.0" reviews="6" 
                text="Life lessons with Katie Zaferes" 
                price="$136"
            />

            <Card 
                img={weddingImg} 
                rating="5.0" reviews="30" 
                text="Learn wedding photography" 
                price="$125"
            />

            <Card 
                img={bikingImg} 
                rating="4.8" reviews="2" 
                text="Life lessons with Katie Zaferes" 
                price="$50"
            />
        </div>
    )
}

export default Cards
