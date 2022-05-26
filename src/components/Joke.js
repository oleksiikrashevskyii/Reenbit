import React from "react"

const Joke = (props) => {
    if(props.setup === null || props.setup.length === 0) {
        return (
            <div>
                <p>Punchline: {props.punchline}</p>
                --------------------------------------------------------
            </div>
        )
    } else {
        return (
            <div>
                <h2>Setup: {props.setup}</h2>
                <p>Punchline: {props.punchline}</p>
                --------------------------------------------------------
            </div>
        )
    }
}

export default Joke;