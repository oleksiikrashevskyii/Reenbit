import React from "react";
import memesList from "../memesList.js";
import Image from "./Image.js"

const memesArr = memesList["data"]["memes"];

const Meme = () => {
    
    const [url, urlChange] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesList)
    

    let getRandomMeme = () => {
        let number = Math.round(Math.random(memesArr.length)*100);
        urlChange(prev => (
            {
                ...prev,
                randomImage: memesArr[number]["url"],
            }));
    }

    return (
        <>
            <div className="form">
                <div className="input-wrapper">
                    <input placeholder="first part" className="form__input"/>
                    <input placeholder="second part" className="form__input"/>
                </div>
                <button onClick={getRandomMeme}className="form__button">Get a new meme image</button>
            </div>
            <Image img={url.randomImage}/>
        </>
        
    )

    
}

export default Meme;