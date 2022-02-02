import React from "react";

export default function Message (props) {
    return (
        <div className={`c-message${ props.popupIsActive ? ' is-active' : '' }`}>
            <h2>{props.gameMessage}</h2>
            <div>
                <p>Score: <span>{props.score}</span></p>
                <p>Best Score: <span>{props.bestScore}</span></p>
            </div>
            <div className='c-message__btn' onClick={props.handleReset}>X</div>
        </div>
    );
}
