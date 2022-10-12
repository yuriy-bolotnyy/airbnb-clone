import React from "react";
import Contact from "./Contact"

import whiskerson from "../assets/whiskerson.png"
import fluffykins from "../assets/fluffykins.png"
import felix from "../assets/felix.png"
import pumkin from "../assets/pumkin.png"

export default function Contacts() {
    return (
        <div className="contacts">
        
            <Contact 
                img={whiskerson} 
                name="Mr. Whiskerson" 
                phone="(212) 555-1234" 
                email="mr.whiskaz@catnap.meow"
            />
            
            <Contact 
                img={fluffykins} 
                name="Fluffykins" 
                phone="(212) 555-2345" 
                email="fluff@me.com"
            />
            
            <Contact 
                img={felix}
                name="Felix" 
                phone="(212) 555-4567" 
                email="thecat@hotmail.com"
            />
            
            <Contact 
                img={pumkin} 
                name="Pumpkin" 
                phone="(0800) CAT KING" 
                email="pumpkin@scrimba.com"
            />
            
        </div>
    )
}