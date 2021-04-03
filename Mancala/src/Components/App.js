import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Game from './Game';
import '../Styles/styles.css';
import mancalaBoardData from '../Data/data';

class App extends Component {
  state = { mancalaBoardData };

  render() {
    return (
      <>
        <div className="headerContainer">
          <Header />
        </div>
        <div className="gameContainer">
          <Game boardData={mancalaBoardData} />
        </div>
        <div className="footerContainer">
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
