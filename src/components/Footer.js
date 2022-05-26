import React from "react";
import twitter from '../assets/twitter-icon.png';
import facebook from '../assets/facebook-icon.png';
import instagram from '../assets/instagram-icon.png';
import github from '../assets/github-icon.png';

const Footer = () => {
    return (
        <div className="footer">
            <a href="#"><img src={twitter}/></a>
            <a href="#"><img src={facebook}/></a>
            <a href="#"><img src={instagram}/></a>
            <a href="#"><img src={github}/></a>
        </div>
    );
}

export default Footer;