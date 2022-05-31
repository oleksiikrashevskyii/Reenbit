import React from "react";

const Image = (props) => {
    return (
        <div className="meme-image_wrapper">
            <img className="meme-image" src={props.img}/>
        </div>
    )
}

export default Image;