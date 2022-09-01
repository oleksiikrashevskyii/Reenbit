import React from "react"
import checkMark from "../assets/check.png"

export default function Logo(props) {
    return (
        <div className="logo-wrapper">
            <img className="logo" src={props.photo}/>
            <img className="mark" src={checkMark}/>    
        </div>
    )
}