import React from "react";

export default function Message (props) {
    return (
        <div className={`c-message${ props.popupIsActive ? ' is-active' : '' }`}>
            <p>{props.gameMessage}</p>
            <div>
                <p>Your Score: {props.score}</p>
                <p>Your Best Score: {props.bestScore}</p>
            </div>
            <div className='c-message__btn' onClick={props.handleReset}>X</div>
        </div>
    );
}
