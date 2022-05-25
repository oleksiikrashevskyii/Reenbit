import React from "react";
import Info from "./Info.js";
import About from "./About.js";
import Interests from "./Interests.js";


const Main = () => {
    return (
        <div className="content">
            <Info/>
            <About/>
            <Interests/>
        </div>
    );
}

export default Main;