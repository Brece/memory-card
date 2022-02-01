import React, { useState, useEffect } from 'react';
import './styles/main.css';
import { cardsLibrary, shuffleArray } from './helper/cards';
import GameBoard from './components/GameBoard';
import Message from './components/Message';

const createInitialLibrary = () => {
	// deep cloning an array of objects by value
	const defaultLibrary = cardsLibrary.map((item) => {
		return {...item};
	});
	return defaultLibrary;
}

export default function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [cards, setCards] = useState(createInitialLibrary());
	const [gameMessage, setGameMessage] = useState('YOU LOSE!');
	const [popupIsActive, setPopupIsActive] = useState(false);

	const handleScore = () => {
		const currentScore = score + 1;

		if (currentScore > bestScore) {
			setBestScore(currentScore);
		}
		setScore(currentScore);
	}

	const handleReset = () => {
		// TODO: possibly delay with setTimeOut for one second, reset values are currently visible in popup window while closing
		setScore(0);
		setCards(createInitialLibrary());
		setGameMessage('YOU LOSE!');
		setPopupIsActive(false);
	}

	const handleChange = (clickedCard) => {
		const updatedCards = cards.map((item) => {
			if (item.id === clickedCard.id) {
				item.clicked = true;
			}
			return item;
		});
		
		setCards(updatedCards);
		handleScore();
		checkWinningGame(updatedCards);
	}

	const checkWinningGame = (array) => {
		const checkedArray = array.filter((item) => item.clicked !== true);

		if (checkedArray.length === 0) {
			setGameMessage('YOU WIN!');
			setPopupIsActive(true);
		}
	}

	// TODO: handle losing game, pop-up with message and best score
	const checkLosingGame = () => {
		setPopupIsActive(true);
	}

	useEffect(() => {
		// shuffle cards state on re-rendering
		setCards(shuffleArray(cards));
	}, [cards]);

	return (
		<div className='c-app'>
			<section className='c-app__header'>
				<h1>Memory Card Game</h1>
				<div className='c-app__header__score'>
					<p>Score: {score}</p>
					<p>Best Score: {bestScore}</p>
				</div>
			</section>
			<GameBoard cards={cards} handleChange={handleChange} checkLosingGame={checkLosingGame} />
			<Message gameMessage={gameMessage} bestScore={bestScore} score={score} popupIsActive={popupIsActive} handleReset={handleReset} />
		</div>
	);
}
