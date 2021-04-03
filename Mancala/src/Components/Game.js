import React, { Component } from 'react';
import '../Styles/styles.css';
import Cup from './Cup';

class Game extends Component {
  render() {
    const { boardData } = this.props;

    const p1cupsRendered = boardData
      .filter((curPlayer) => curPlayer.player === 1)
      .map((cup, index) => <Cup key={index} playerType="player1" boardData={boardData} />);

    const p2cupsRendered = boardData
      .filter((curPlayer) => curPlayer.player === 2)
      .map((cup, index) => <Cup key={index} playerType="player2" boardData={boardData} />);

    return (
      <div className="gameBackDrop">
        <div className="scoreBoard p1ScoreBoard"></div>
        <div className="game">
          <div className="p1cups">{p1cupsRendered}</div>
          <div className="mancala-player1"></div>
          <div className="p2cups">{p2cupsRendered}</div>
          <div className="mancala-player2"></div>
        </div>
        <div className="scoreBoard p1ScoreBoard"></div>
      </div>
    );
  }
}
export default Game;
