import React from 'react';
import Papyrus from './Papyrus.jsx';
import Picture from './Picture.jsx';

import superjens from '../styles/cards/superjens.jpg';
import litenjens from '../styles/cards/litenjens.jpg';

export default class End extends React.Component {

  checkValidity(history, inventory) {
    const pages = new Set();
    history.forEach(state => pages.add(state.page));
    // TODO: parse history tree to see if it's a valid win
    return inventory.size == 7;
  }

  render() {
    const validWin = this.checkValidity(this.props.history, this.props.inventory);
    const score = 40-this.props.history.length;
    const winText = "Du får en puss, på munnen! Allting klarnar, du vet vem du är! Du. Är. SUUUUUUUPER-JENS! " +
                    "Du slänger av dig kläderna och tar på dig det som måste vara dina riktiga, de du har i ryggsäcken! " +
                    "Spandex, Capé, Skärp med SJ (Super-Jens), Badmössa, Super-spring-skor, tighta handskar och en mask; " +
                    "BAAM! Super-Jens är i farten och ingen står säker, eller så gör alla det. Högst oklart. " +
                    "Poäng: " + score;
    const failText = "Du får en puss av den snygga tjejen och allt blod går ifrån hjärnan... " +
                     "till någon annanstans... och du svimmar direkt! Du transporteras bakåt i tiden.";

    const winStyle = this.props.visible ? {} : {display: "none"};
    const img = validWin ? superjens : litenjens;
    const text = validWin ? winText : failText;
    return (
      <div style={winStyle}>
        <div className="papyrus">
          <div className="papyrus-child" role="main">
            <div className="tape" />
            <Papyrus page={1337} text={text} />
            <Picture source={this.props.img} />
          </div>
        </div>
      </div>
      );
  }
}
