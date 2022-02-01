import React from 'react';

export default function Card (props) {
    const handleClick = (e) => {
        e.stopPropagation();
        if (props.card.clicked) {
            // reset game
            props.handleReset();
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
