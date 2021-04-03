import React, { Component } from 'react';
import '../Styles/styles.css';
import Cup from './Cup';

class Game extends Component {
  render() {
    const { boardData } = this.props;
    return (
      <div className="gameBackDrop">
        <div className="scoreBoard p1ScoreBoard"></div>
        <div className="game">
          <div className="p1cups">
            {boardData
              .filter((curPlayer) => curPlayer.player === 1)
              .map((cup, index) => (
                <Cup key={index} />
              ))}
          </div>
          <div className="mancala-player1"></div>
          <div className="p2cups">
            {boardData
              .filter((player) => player.player === 2)
              .map((cup, index) => (
                <Cup key={index} />
              ))}
          </div>
          <div className="mancala-player2"></div>
        </div>
        <div className="scoreBoard p1ScoreBoard"></div>
      </div>
    );
  }
}
export default Game;
