// import { useState } from 'react'
// import reactLogo from '/assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Card from './components/Card'

import zaferesImg from "./assets/zaferes.png"
import weddingImg from "./assets/wedding.png"
import bikingImg from "./assets/biking.png"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      {/* <Gallery /> */}
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
      {/* <Card img={zaferesImg}/> */}
    </div>
  )
}

export default App
