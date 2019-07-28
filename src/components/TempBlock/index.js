import React from 'react';
import cards from '../../assets/cards';
import './index.scss';
import { useDrop } from 'react-dnd';
import Card from '../Card';

function TempBlock({ card, accept, onDrop }) {

  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  // console.log('card--->', card);
  return (
    <div className="tempBlock" ref={drop}>
      {card ? <Card card={card} /> : null}
    </div>
  );
}

export default TempBlock;
