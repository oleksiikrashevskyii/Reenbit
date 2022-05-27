import React from "react";
import icon from "../assets/header-icon.png";

const Header = () => {
    return (
        <header className="header">
            <img src={icon}/> 
            <span>my travel journal.</span>  
        </header>
    )
}

export default Header;