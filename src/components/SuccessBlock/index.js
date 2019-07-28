import React from 'react';

import './index.scss';
import SImg from '../../assets/S.png';
import HImg from '../../assets/H.png';
import DImg from '../../assets/D.png';
import CImg from '../../assets/C.png';
const icons = { S: SImg, H: HImg, D: DImg, C: CImg, };

function SuccessBlock({ type }) {

  return (
    <div className="successBlock">
      <img alt="blockIcon" src={icons[type]} />
    </div>
  );
}

export default SuccessBlock;
