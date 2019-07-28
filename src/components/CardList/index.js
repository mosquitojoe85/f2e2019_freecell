import React from 'react';
import cards from '../../assets/cards';
import './index.scss';

function CardList({ list }) {
  return (
    <div className="cardList">
      {list.map((card, i) =>
        <div key={`${card.type}${card.num}`} className="card" style={{ marginTop: `${30 * i}px` }}>
          <img alt="card" src={cards[`${card.type}${card.num}`]} />
        </div>
      )}
    </div>
  );
}

export default CardList;
