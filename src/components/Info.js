import React from "react";
import girlImage from '../assets/info-img.png';

const Info = () => {
    return (
        <div className="info">
            <img className="girlImage" alt="png"src={girlImage}/>
            <h3>Laura Smith</h3>
            <h4>Frontend Developer</h4>
            <a href="#">laurasmith.website</a>
            <div className="info__buttons">
                <button className="email-btn">
                    <span>Email</span>
                </button>
                <button className="linkedln-btn">
                    <span>LinkedIn</span>
                </button>
            </div>
        </div>
    );
}

export default Info;