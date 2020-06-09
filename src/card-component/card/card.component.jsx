import React from "react";


const cardStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#95dada",
    border: '1px sold grey',
    borderRadius: '5px',
    padding: "25px",
    cursor: 'pointer',
    backfaceVisibility: 'hidden',
    transform: 'translateZ(0)',
    transition: 'transform 0.25s ease-out'
}


export const Card = (props) => {
    return (
        <div style={cardStyle}>
            <img src="https://robohash.org/{props.monster.id}?set=set2&size=180x180" alt="RoboImage" />
            <h1>{props.monster.name}</h1>
            <p>{props.monster.email}</p> 
        </div>
    )
}