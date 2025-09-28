import React from 'react';
import GuessRow from '../GuessRow/GuessRow';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import { range } from '../../utils';

function Guesses({ guesses, answer }) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map(num => (
        <GuessRow value={guesses[num]} answer={answer} key={num} />
      ))}
    </div>
  );
}

export default Guesses;
