
import React, { useState } from "react";
import './App.css';
import Home from "./components/Home/Home";
import SidePar from './components/sidepar/SidePar';
import Tolpar from './components/tolpar/Tolpar';
import { BrowserRouter  ,Routes , Route } from "react-router-dom";
import User from "./components/users/User";
import MemberId from "./components/users/MemberId";
import userRows from "./components/users/DomyData";
import Statistic from "./components/Statistic/Statistic";

function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const close =() => setClick(false)
  return (
    <div className="App">
       <BrowserRouter >
    <Tolpar   handleClick={handleClick} />
    <div className='container'>
    <SidePar click={click} close={close} />
     <Routes>
         <Route  path="/Dashboard/" element={<Home />} />
        <Route  path="/Dashboard" element={<Home />} />
        <Route path="User" element={<User />} />
        <Route path="Statistic" element={<Statistic />} />

        <Route path="User/:userid" element={<MemberId />} />
    </Routes>
    </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
