import React from 'react'
import Zona from './components/Zona/Zona'
import './App.css'
import Ps5 from './components/Ps5/Ps5'



const App = () => {
  return (
    <>
    <Zona text={"СТАНДАРТ"}/>
    <Zona text={"СТАНДАРТ+"}/>
    <Ps5 text={"Ps5"}/>
   

    </>
  )
}

export default App