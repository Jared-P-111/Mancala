import React from 'react';
import '../Styles/styles.css';

class Game extends React.Component {
  render() {
    const { renderPOneCups, renderPTwoCups } = this.props;

    return (
      <div className="gameBackDrop">
        <div className="scoreBoard p1ScoreBoard"></div>
        <div className="game">
          <div className="p1cups">{renderPOneCups()}</div>
          <div className="mancala-player1 cup7">{}</div>
          <div className="p2cups">{renderPTwoCups()}</div>
          <div className="mancala-player2 cup14">{}</div>
        </div>
        <div className="scoreBoard p1ScoreBoard"></div>
      </div>
    );
  }
}
export default Game;
