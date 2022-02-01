import React from 'react';
import Card from './Card';
import { shuffleArray } from '../helper/cards';

export default function GameBoard (props) {
    const renderBoard = () => {
        const board = props.cards.map((item) => {
            return <Card card={item} handleChange={props.handleChange} handleReset={props.handleReset} key={item.id} />;
        });
        shuffleArray(board);
        return board;
    }
    
    return (
        <section className='c-gameboard'>
            <div className='u-offset'>
                {renderBoard()}
            </div>
        </section>
    );
}
