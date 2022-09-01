import React from "react"
import Account from "./Account"
import Chat from './Chat'
import {nanoid} from "nanoid"
import avatar0 from "../assets/avatar0.png"
import avatar1 from "../assets/avatar1.png"
import avatar2 from "../assets/avatar2.png"
import avatar3 from "../assets/avatar3.png"
import avatar4 from "../assets/avatar4.png"
import avatar5 from "../assets/avatar5.png"

const userBase = [
    {
        name: 'Pablo Wood',
        photo: avatar0,
        messageList: [],
        sendMessages: []
    },
    {
        name: 'Elise Collins',
        photo: avatar1,
        messageList: [],
        sendMessages: []
    },
    {
        name: 'Dante Nelson',
        photo: avatar2,
        messageList: [],
        sendMessages: []
    },
    {
        name: 'Donald Ross',
        photo: avatar3,
        messageList: [],
        sendMessages: []
    },
    {
        name: 'Zelda King',
        photo: avatar4,
        messageList: [],
        sendMessages: []
    },
    {
        name: 'Daniella Johnson',
        photo: avatar5,
        messageList: [],
        sendMessages: []
    },
]

export default function Chats(props) {

    const [jokes, addNewJoke] = React.useState([]);
    const [currentSearch, changeSearch] = React.useState('');
    const [currentTime, changeTime] = React.useState(new Date());

    React.useEffect(() => {
        userBase.forEach(() => {generateRandomJoke()}); 
        userBase.forEach((val, index)=> { 
            val.messageList.push(jokes[index])
        }); 
        
    }, [jokes.length === 5])

    React.useEffect(() => { 
        userBase.forEach(val => {
            if (props.currentUser.name === val.name) {
                val.sendMessages.push(props.currentMessage)
            }
        })
        
    }, [props.currentMessage])

    function searchAlgorithm(value) {
        let chatArr = value.split('').map(val => val.toLowerCase()).join('');
        let searchArr = currentSearch.split('').map(val => val.toLowerCase()).join('');
        let index = chatArr.indexOf(searchArr)
        
        if (index>=0) {
            return true;
        } else {
            return false;
        }
    }

    let chats = userBase
        .filter(val => !currentSearch || searchAlgorithm(val.name))
        .map(val => <Chat key={nanoid()} date={currentTime} clicked={props.returnCurrentUser} sendMessages={val.sendMessages} messageList={val.messageList} name={val.name} photo={val.photo}/>);

    async function generateRandomJoke(){
        const responce = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await responce.json();
        addNewJoke(prev => [...prev, data.value])
    }


    function setNewParametrs(value) {
        changeSearch(value);
    }
    
    return (
        <div className="chats">
            <Account whatToSearch={setNewParametrs}/>
            <div className="chats-headline">Chats</div>
            <div className="chats-wrapper">
                {chats}
            </div>
        </div>
    )
}