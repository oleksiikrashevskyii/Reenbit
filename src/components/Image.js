import React from "react";

const Image = (props) => {

    return (
        <div className="meme-image_wrapper">
            <img className="meme-image" src={props.img}/>
            <h2 className="meme--text top">{props.top}</h2>
            <h2 className="meme--text bottom">{props.bottom}</h2>
        </div>
    )
}

export default Image;