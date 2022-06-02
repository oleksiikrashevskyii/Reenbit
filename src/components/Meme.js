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
    

    const getRandomMeme = () => {
        let number = Math.round(Math.random(memesArr.length)*100);
        urlChange(prev => (
            {
                ...prev,
                randomImage: memesArr[number]["url"],
            }));
    }

    const handleChanger = (e) => {
        const {name, value} = e.target;
        urlChange(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>
            <div className="form">
                <div className="input-wrapper">
                    <input onChange={handleChanger} name="topText" value={url.topText} placeholder="first part" className="form__input"/>
                    <input onChange={handleChanger} name="bottomText" value={url.bottomText} placeholder="second part" className="form__input"/>
                </div>
                <button onClick={getRandomMeme}className="form__button">Get a new meme image</button>
            </div>
            <Image top={url.topText} bottom={url.bottomText} img={url.randomImage}/>
        </>
        
    )

    
}

export default Meme;