import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ guesses }) {
  return (
    <Banner status='happy'>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{guesses === 1 ? '1 guess' : `${guesses} guesses`}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
