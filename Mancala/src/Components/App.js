import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Game from './Game';
import '../Styles/styles.css';
import mancalaBoardData from '../Data/data';
import Beads from './Beads';
import Cup from './Cup';

class App extends Component {
  state = { mancalaBoardData };

  renderBeads = (boardData) => {
    const beadCount = [];
    for (let i = 0; i < boardData.beadCount; i++) {
      beadCount.push('Bead');
    }
    return beadCount.map(() => <Beads />);
  };

  renderPlayerOneCups = () => {
    const player1cups = this.state.mancalaBoardData
      .filter((player) => player.player === 1)
      .map((cup, index) => <Cup key={index} styleSheet="player1" />);
    return player1cups;
  };

  renderPlayerTwoCups = () => {
    const player2cups = this.state.mancalaBoardData
      .filter((player) => player.player === 2)
      .map((cup, index) => <Cup key={index} styleSheet="player2" />);
    return player2cups;
  };

  render() {
    this.renderPlayerOneCups();
    return (
      <>
        <div className="headerContainer">
          <Header />
        </div>
        <div className="gameContainer">
          <Game
            boardData={mancalaBoardData}
            renderBeads={this.renderBeads}
            renderPOneCups={this.renderPlayerOneCups}
            renderPTwoCups={this.renderPlayerTwoCups}
          />
        </div>
        <div className="footerContainer">
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
