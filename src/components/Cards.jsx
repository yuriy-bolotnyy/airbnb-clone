import React from "react";
import Card from "./Card"


import "./Cards.css"

// import zaferesImg from "../assets/zaferes.png"
// import weddingImg from "../assets/wedding.png"
// import bikingImg from "../assets/biking.png"
import data from "../data"

const Cards = () => {

    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviews={item.stats.reviewCount}
                location={item.location}
                text={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
        )
    })   
    console.log(cards)

    return (
        <div className="cards">
            {/* <div style={{background:"red"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam atque, ipsam quis nostrum beatae veritatis, dolor aperiam sint necessitatibus nemo voluptate debitis provident iste sapiente, mollitia eaque nobis architecto consectetur?</div>
            <div style={{background:"green"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nemo quos vero illum tempora officiis, vel consequatur aliquam nam molestiae ratione distinctio architecto, totam cum minima officia. Quae, rerum corporis!</div>
            <div style={{background:"blue"}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, est quisquam molestias nesciunt tenetur architecto nostrum at eius aut dolores suscipit blanditiis temporibus quos ex totam minima maxime cupiditate soluta.</div> */}
            
            {cards}
            
            {/* <Card 
                img={zaferesImg} 
                rating="5.0" reviews="6" 
                text="Life lessons with Katie Zaferes" 
                price="$136"
            /> */}

            {/* <Card 
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
            />  */}
        </div>
    )
}

export default Cards
