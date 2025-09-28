import React, { useState } from 'react';

function GuessInput({ handleSubmitGuess, disabled }) {
  const [guess, setGuess] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    handleSubmitGuess(guess);
    setGuess('');
  };

  return (
    <form className='guess-input-wrapper' onSubmit={e => handleSubmit(e)}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        required
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        value={guess}
        onChange={e => setGuess(e.target.value.toLocaleUpperCase())}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
