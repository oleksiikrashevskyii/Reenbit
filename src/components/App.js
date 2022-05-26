import React from "react"
import Joke from './Joke.js'

const jokesList = [
    {
        Setup: 'I got my daughter a fridge for her birthday',
        Punchline: 'I can\'t wait to see her face light up when she opens it.',
        id: 2022,
    },
    
    {
        Setup: 'How did the hacker escape the police?',
        Punchline: 'He just ransomware!',
        id: 2023,
    },
    
    {
        Setup: 'Why don\'t pirates travel on mountain roads?',
        Punchline: 'Scurvy.',
        id: 2024,
    },
    
    {
        Setup: 'Why do bees stay in the hive in the winter?',
        Punchline: 'Swarm.',
        id: 2025,
    },
    
    {
        Setup: 'What\'s the best thing about Switzerland?',
        Punchline: 'I don\'t know, but the flag is a big plus!',
        id: 2026,
    },
    
];

const App = () => {
    const structure = [];
    for (let i=0; i<jokesList.length; i++) {
        structure.push(<Joke key={jokesList[i].id} setup={jokesList[i].Setup ? jokesList[i].Setup : null} punchline={jokesList[0].Punchline}/>)
    }
    return (
        [...structure]
    )
}

export default App;