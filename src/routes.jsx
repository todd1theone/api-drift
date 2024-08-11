import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Main/index"
import FormulaD from "./Pages/Formula-Drift/index"
import UltimateD from "./Pages/Ultimate-Drift/index"
import DMaster from "./Pages/Drift-Masters/index.jsx"
import Header from './components/header/index.jsx'

const Rota = () => {
   return(
       <BrowserRouter>
       <Header/>
       <Routes>
           
           <Route   path="/" element = { <Home />} />
           <Route   path="/formulaD" element = { <FormulaD/> } />
           <Route  path="/ultimateD" element = { <UltimateD/> } />
           <Route  path="/Dmaster" element = { <DMaster/> } />


           </Routes>
       </BrowserRouter>
   )
}

export default Rota;