import React, { useState, useEffect } from 'react';
import './styles/main.css';
import { cardsLibrary, randomNumber } from './helper/cards';
import GameBoard from './components/GameBoard';

const createInitialLibrary = () => {
	const defaultLibrary = cardsLibrary.map((item) => {
		return {...item};
	});
	console.log(defaultLibrary);
	return defaultLibrary;
}

export default function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [cards, setCards] = useState(createInitialLibrary());

	const handleScore = () => {
		const currentScore = score + 1;

		if (currentScore > bestScore) {
			setBestScore(currentScore);
		}
		setScore(currentScore);
	}

	const handleReset = () => {
		setScore(0);
		setCards(createInitialLibrary());
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
	}

	useEffect(() => {
		// TODO: randomize rendering of cards 
	});

	return (
		<div className='c-app'>
			<section className='c-app__header'>
				<h1>Memory Card Game</h1>
				<div className='c-app__header__score'>
					<p>Score: {score}</p>
					<p>Best Score: {bestScore}</p>
				</div>
			</section>
			<GameBoard cards={cards} handleChange={handleChange} handleReset={handleReset} />
		</div>
	);
}
