import React from "react"
import profilePhoto from "../assets/profile-avatar.png"
import searchIcon from "../assets/search.png"
import Logo from './Logo'

export default function Account(props) {

    
    return (
        <div className="header">
            <Logo photo={profilePhoto}/>
            <div className="header_input-wrapper">
                <img className="search" src={searchIcon}/>
                <input className="header_input" type='text' onChange={(e) => props.whatToSearch(e.target.value)} placeholder="Search or start new chat"/>
            </div>
        </div>
    )
}