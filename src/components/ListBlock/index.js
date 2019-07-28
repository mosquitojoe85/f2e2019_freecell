import React from 'react';
import Card from '../Card';
import './index.scss';

function ListBlock({ list }) {
  return (
    <div className="listBlock">
      {list.map((card, i) =>
        <div className="cardBlock" key={`${card.type}${card.num}`} style={{ marginTop: `${30 * i}px`}}>
          <Card card={card} />
        </div>
      )}
    </div>
  );
}

export default ListBlock;
