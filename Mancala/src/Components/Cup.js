import React from 'react';

const Cup = ({ styleSheet, renderBeads }) => {
  let styleType;
  if (styleSheet === 'player1') {
    styleType = 'cup p1cup';
  }
  return <div className={styleType}></div>;
};

export default Cup;
