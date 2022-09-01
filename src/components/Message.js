import React from "react"


    
export function AcceptMessage(props) {

    let date = new Date();
    let year = date.getFullYear();
    let newYear = (''+year).split('').splice(2,2).join(''); 
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    
    return (
        <div className="message">
            <div className="message-wrapper">
                <img className="message_photo" src={props.photo.photo}/>
                <p className="message_text">{props.acceptMessage[props.acceptMessage.length-1]}</p>
            </div>
            <span className="message_date">{(month+1)+'/'+day+'/'+newYear+', '+hour+':'+min}</span>
        </div>
    )
}

export function SendMessage(props) {
    
    let date = new Date();
    let year = date.getFullYear();
    let newYear = (''+year).split('').splice(2,2).join(''); 
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    

    return (
        <div className="message-send">
            <div className="message-wrapper-send">
                <p className="message_text-send">{props.sendMessage[props.sendMessage.length-1]}</p>
            </div>
            <span className="message_date-send">{(month+1)+'/'+day+'/'+newYear+', '+hour+':'+min}</span>
        </div>
    )
}