import React, { Component } from 'react';
import Bead from './Bead';

class Cup extends Component {
  render() {
    const { curCupBeads, playerType } = this.props;

    const renderBeads = () => {
      let beadAmount = [];
      for (let i = 0; i < curCupBeads; i++) {
        beadAmount.push(<Bead />);
      }
      return beadAmount;
    };

    return (
      <div className={playerType === 'player1' ? 'p1cup cup' : 'p2cup cup'}>{renderBeads()}</div>
    );
  }
}

export default Cup;
