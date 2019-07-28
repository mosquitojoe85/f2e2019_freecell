import React from 'react';

import './index.scss';

function Button({ text, act }) {
  return (
    <button className="btn" onClick={act}>{text}</button>
  );
}

export default Button;
