import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img}/>  
            <div className="card__info">
                <div className="card__country">
                    <span className="country">{props.value.country}</span>
                    <a href="#" className="link">View on Google Maps</a>
                </div>
                <h1 className="place">{props.value.place}</h1>
                <span className="date">{props.value.date}</span>
                <p className="info">{props.value.info}</p>
            </div>     
        </div>
    )
}

export default Card;