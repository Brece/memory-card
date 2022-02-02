import React, { useState, useEffect } from 'react';
import './styles/main.css';
import { cardsLibrary, shuffleArray } from './helper/cards';
import GameBoard from './components/GameBoard';
import Message from './components/Message';

const createInitialLibrary = (size = 4) => {
	// deep cloning an array of objects by value
	const defaultLibrary = cardsLibrary.map((item) => {
			return {...item};
		})
		.slice(0, size);

	return defaultLibrary;
}

export default function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [cards, setCards] = useState(createInitialLibrary());
	const [gameMessage, setGameMessage] = useState('YOU LOSE!');
	const [popupIsActive, setPopupIsActive] = useState(false);
	const [difficulty, setDifficulty] = useState(4);

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
		setCards(createInitialLibrary(difficulty));
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

	const checkLosingGame = () => {
		setPopupIsActive(true);
	}

	// submits difficulty selection
	const handleDifficultySelection = (e) => {
		const value = parseInt(e.target.value);
		setCards(createInitialLibrary(value));
		setDifficulty(value);
	}

	useEffect(() => {
		// shuffle cards state on re-rendering
		setCards(shuffleArray(cards));
	}, [cards]);

	return (
		<div className={`c-app${ popupIsActive ? ' is-blocked' : '' }`}>
			<section className='c-app__header'>
				<div>
					<h1>Memory Card Game</h1>
					<p>RULES: Memorize the cards that you've already clicked on. Each card may only be clicked on once. If you manage to remember all you card selections you win. Increase your difficulty if you are looking for a challenge.</p>
				</div>
				<div className='c-app__header__score'>
					<p>Score: {score}</p>
					<p>Best Score: {bestScore}</p>
				</div>
				<form>
					<label htmlFor='difficulty'>Select Difficulty:</label>
					<select id='difficulty' name='difficulty' onChange={handleDifficultySelection}>
						<option value='4' defaultValue>Easy</option>
						<option value='8'>Medium</option>
						<option value='12'>Hard</option>
					</select>
				</form>
			</section>
			<GameBoard cards={cards} handleChange={handleChange} checkLosingGame={checkLosingGame} />
			<Message gameMessage={gameMessage} bestScore={bestScore} score={score} popupIsActive={popupIsActive} handleReset={handleReset} />
		</div>
	);
}
