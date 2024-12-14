import React from 'react'
import Zona from './components/Zona/Zona'
import './App.css'
import Ps5 from './components/Ps5/Ps5'
import ZonaStart from './components/ZonaStart/ZonaStart'



const App = () => {
  return (
    <>
    <Zona text={"СТАНДАРТ"} color={"pink"}/>
    <ZonaStart text={"СТАНДАРТ+"} color={"blue"} />
 
    <Ps5 text={"Ps5"} color={"sin"}/>
   

    </>
  )
}

export default App