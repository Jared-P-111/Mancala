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

  render() {
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
