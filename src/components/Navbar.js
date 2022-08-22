import React from 'react'
import logo from '../images/logo.png';
import menu from '../images/menu.png';
import { useState } from 'react';

function Navbar() {

  const [expand, setExapnd] = useState(false);

  const toggleMenu = () => {
    const menuList = document.getElementById("menuList");
    menuList.style.maxHeight = "0px";

    if(expand===false){
      setExapnd(true);
      menuList.style.maxHeight = "130px";
    }
    else{
      setExapnd(false);
      menuList.style.maxHeight = "0px";
    }
  }

  return (
    <>
        <div className="navbar">
            <img src={logo} alt="" className="logo"/>
            <nav>
                <ul id="menuList">
                    <li><a href="/">Game Controllers</a></li>
                    <li><a href="/">VR Accessories</a></li>
                    <li><a href="/">Media Remotes</a></li>
                    <li><a href="/">Others</a></li>
                </ul>
            </nav>
            <img src={menu} alt="" className="menu" onClick={toggleMenu}/>
        </div>
    
    </>
  )
}

export default Navbar