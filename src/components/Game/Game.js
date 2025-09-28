import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses/Guesses';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameState, setGameState] = useState('ongoing');

  const handleSubmitGuess = currentGuess => {
    const nextGuesses = [...guesses, currentGuess];
    if (currentGuess === answer) {
      setGameState('won');
    } else if (nextGuesses.length >= 6) {
      setGameState('lost');
    }
    setGuesses(nextGuesses);
  };

  return (
    <>
      {gameState === 'won' && <WonBanner guesses={guesses.length} />}
      {gameState === 'lost' && <LostBanner answer={answer} />}
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} disabled={gameState !== 'ongoing'} />
    </>
  );
}

export default Game;
