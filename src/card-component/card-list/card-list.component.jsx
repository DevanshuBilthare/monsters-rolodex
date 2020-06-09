import React from 'react';
import { Card } from '../card/card.component'

const myStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    width: "85%",
    margin: "0 auto",
    gridGap: "20px"
}

export const CardList = (props) => {
    return (
        <div className="card-list" style={myStyle}>
            {
                props.monsters.map(monster => 
                    <Card key={monster.id} monster = {monster} />
                )
            }
        </div>
    );
}

