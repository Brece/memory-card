import React, { useState } from 'react';

export default function Card (props) {
    const [clicked, setClicked] = useState(props.card.clicked);

    const handleClick = () => {
        if (clicked) {
            // reset game
            return;
        }
        setClicked(true);
    }

    return (
        <div className='c-card' onClick={handleClick}>
            <img src={props.card.url} alt='Memory Card' /> 
            <p>{props.card.text}</p>
        </div>
    );
}
