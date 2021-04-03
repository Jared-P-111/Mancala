import React, { Component } from 'react';

class Cup extends Component {
  render() {
    const { playerType } = this.props;

    return <div className={playerType === 'player1' ? 'p1cup cup' : 'p2cup cup'}></div>;
  }
}

export default Cup;
