import React from "react"
import Chats from "./Chats"
import Person from "./Person"


export default function App() {
    
    const [currentUser, changeUser] = React.useState(false)
    const [sendingMessage, createNewMessage] = React.useState('');

    function returnCurrentUser(user) {
        changeUser(user)
    }

    function returnWrittenMessage(user) {
        createNewMessage(user)
        
    }
    console.log(currentUser)
    console.log(sendingMessage)

    return (
        <main>
            <Chats returnCurrentUser={returnCurrentUser} currentUser={currentUser} currentMessage={sendingMessage}/>
            <Person returnWrittenMessage={returnWrittenMessage} currentUserInfo={currentUser}/>
        </main>
    )
}