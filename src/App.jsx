import React from 'react'
import Zona from './components/Zona/Zona'
import './App.css'
import Ps5 from './components/Ps5/Ps5'
import ZonaStart from './components/ZonaStart/ZonaStart'
import Camp from './components/Camp/Camp'



const App = () => {
  return (
    <>
    <Zona text={"СТАНДАРТ"} color={"pink"}/>
    <ZonaStart text={"СТАНДАРТ+"} color={"blue"} />
    <Camp text={"BOOT CAMP"} color={"red"}/>
 
    <Ps5 text={"Ps5"} color={"sin"}/>
   

    </>
  )
}

export default App