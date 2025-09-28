import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function GuessRow({ value, answer }) {
  const checkedGuess = checkGuess(value, answer);

  const letterStatus = num => {
    if (!checkedGuess || !checkedGuess[num]) return '';
    return checkedGuess[num].status;
  };

  return (
    <p className='guess'>
      {range(5).map((num, index) => (
        <span key={index} className={`cell ${letterStatus(num)}`}>
          {value ? value[num] : ''}
        </span>
      ))}
    </p>
  );
}

export default GuessRow;
