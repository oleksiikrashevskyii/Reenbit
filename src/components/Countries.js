import React from "react";
import Card from "./Card.js";
import data from "../data.js";
import jap from "../assets/japan-img.jpg";
import aust from "../assets/australia-img.jpg";
import nor from "../assets/norway-img.jpg";

let imgArr = [jap, aust, nor];

const Countries = () => {
    return (
        <section className="countries">
            {data.map((val,i) => { 
                return (
                    <Card 
                    img={imgArr[i]}
                    key={val.id}
                    value={val}
                    />
                )
            })}      
        </section>
    )
}

export default Countries;