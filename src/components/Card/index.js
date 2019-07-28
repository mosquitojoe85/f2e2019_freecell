import React from 'react';
import cards from '../../assets/cards';
import './index.scss';
import { useDrag } from 'react-dnd';

function Card({ card, }) {
  const [{ isDragging }, drag] = useDrag({
    item: { card, type: 'card' },
    end: dropResult => {
      if (dropResult) {
        console.log(`You dropped {card} into {dropResult.card}!`, card, dropResult.card);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div className="card" ref={drag} style={{ opacity }}>
      <img alt="card" src={cards[`${card.type}${card.num}`]} />
    </div>
  );
}

export default Card;
