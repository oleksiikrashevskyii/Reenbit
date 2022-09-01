import React from "react"
import Logo from './Logo'

export default function Chat(props) {

    let date = props.date.toDateString();
    let a = date.split(' ').splice(1,3);
    let b = a.splice(2,1);
    let newFormat = a.join(' ') + ', ' + b.join(' ')



    return (
        <div onClick={() => props.clicked(props)} className="chat">
            <Logo photo={props.photo}/>
            <div className="chat_info">
                <span>{props.name}</span>
                <p className="chat_info-message">{props.messageList[props.messageList.length-1]}</p>
            </div>
            <div className="chat_date">{newFormat}</div>
        </div>
    )
}