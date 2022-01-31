import React, { useState, useEffect } from 'react';
import './styles/main.css';
import { cardsLibrary, randomNumber } from './helper/cards';
import GameBoard from './components/GameBoard';

export default function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [cards, setCards] = useState(cardsLibrary);

	const handleScore = () => {
		setScore(score + 1);

		if (score > bestScore) {
			setBestScore(score);
		}
	}

	const handleReset = () => {
		setScore(0);
	}

	const handleChange = (item) => {
		// TODO: handle updates for passed in argument 'item'
		setCards({
			...cards,

		})
	}

	useEffect(() => {

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
			<GameBoard cards={cards} />
		</div>
	);
}
