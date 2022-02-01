import React from 'react';

export default function Card (props) {
    const handleClick = () => {
        if (props.card.clicked) {
            // reset game
            props.checkLosingGame();
            return;
        }
        props.handleChange(props.card);
    }

    return (
        <div className='c-card' onClick={handleClick}>
            <img src={props.card.url} alt='Memory Card' /> 
            <p>{props.card.text}</p>
        </div>
    );
}
