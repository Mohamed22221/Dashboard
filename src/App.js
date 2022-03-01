
import React, { useState } from "react";
import './App.css';
import Home from "./components/Home/Home";
import SidePar from './components/sidepar/SidePar';
import Tolpar from './components/tolpar/Tolpar';
import { BrowserRouter  ,Routes , Route } from "react-router-dom";
import User from "./components/users/User";
import MemberId from "./components/users/MemberId";
import userRows from "./components/users/DomyData";

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
         <Route  path="/" element={<Home />} />
        <Route  path="Home" element={<Home />} />
        <Route path="User" element={<User />} />
        <Route path="User/:userid" element={<MemberId />} />
    </Routes>
    </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
