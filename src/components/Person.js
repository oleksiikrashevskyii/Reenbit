import React from "react"
import Logo from './Logo'
import {AcceptMessage} from './Message.js'
import {SendMessage} from './Message.js'
import profilePhoto from "../assets/avatar.png"
import paperPlane from "../assets/paper-plane.png"
import 'regenerator-runtime/runtime'


export default function Person(props) {

    const [typingMessage, changeMessage] = React.useState('');

    function handleChange(e) {
        changeMessage(e.target.value)
    }

    const page = 
    <div className="person">
        <div className="person_header">
            <Logo photo={props.currentUserInfo.photo}/>
            <span className="person_name">{props.currentUserInfo.name}</span>
        </div>
        <div className="person_message-list">
            <AcceptMessage acceptMessage={props.currentUserInfo.messageList} photo={props.currentUserInfo}/>
            <SendMessage sendMessage={props.currentUserInfo.sendMessages}  photo={props.currentUserInfo}/>
        </div> 
        <div className="person_send-message">
            <input onChange={handleChange} value={typingMessage} className="type-message-btn" placeholder="Type your message"/>  
            <a onClick={() => {props.returnWrittenMessage(typingMessage); changeMessage('')}} className="type-message-link">
                <img className="type-message-icon" src={paperPlane}/>
            </a>
        </div>  
    </div>
    
    return (
        props.currentUserInfo ? page : <div className="message-after-load-wrapper"><span className="message-after-load">Select a chat to start messaging</span></div>
    )
}