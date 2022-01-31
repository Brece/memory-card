import React, { useState } from 'react';
import './styles/main.css';
import GameBoard from './components/GameBoard';

export default function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [cards, setCards] = useState(null);

	return (
		<GameBoard />
	);
}
