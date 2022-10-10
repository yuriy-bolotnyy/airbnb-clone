// import { useState } from 'react'
// import reactLogo from '/assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Gallery from './components/Gallery'
import Card from './components/Card'

import zaferesImg from "./assets/zaferes.png"
import wedding from "./assets/wedding.png"
import biking from "./assets/biking.png"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      {/* <Gallery /> */}
      <Card 
        img={zaferesImg} rating="5.0" 
        text="Life lessons with Katie Zaferes" 
        price="$136"
      />
      {/* <Card img={zaferesImg}/> */}
    </div>
  )
}

export default App
