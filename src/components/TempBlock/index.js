import React from 'react';
import cards from '../../assets/cards';
import './index.scss';

function TempBlock({ card }) {
  return (
    <div className="tempBlock">
      {card ? <div className="card"><img alt="card" src={cards[`${card.type}${card.num}`]} /></div> : null}
    </div>
  );
}

export default TempBlock;
