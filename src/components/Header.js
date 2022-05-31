import React from "react";
import icon from "../assets/trollface.png";

const Header = () => {
    return (
        <header className="header">
            <img className="header__icon" src={icon}/> 
            <a className="header__icontext">Meme Generator</a>
            <span className="header__number">React Course - Project 3</span> 
        </header>
    )
}

export default Header;