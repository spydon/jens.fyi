import React from 'react';
import Papyrus from './Papyrus.jsx';
import Picture from './Picture.jsx';

import winImg from '../styles/cards/end.png';
import failImg from '../styles/cards/house.png';

export default class Win extends React.Component {

  checkValidity(history, inventory) {
    const pages = new Set();
    history.forEach(state => pages.add(state.page));
    // TODO: parse history tree to see if it's a valid win
    return inventory.size == 3;
  }

  render() {
    const validWin = this.checkValidity(this.props.history, this.props.inventory);
    const score = 40-this.props.history.length;
    console.log(this.props.history);
    const winText = "You did it! The ingredients mix and gives all the falvour back to the world, plus your parents as an extra bonus, congratulations! Score: " + score;
    const failText = "Something seems to have been missing from the ingredients list, the world explodes, everybody dies in misery by chain sawing themselves, meanwhile you eat yourself.";

    const winStyle = this.props.visible ? {} : {display: "none"};
    const text = validWin ? winText : failText;
    const imageUrl = validWin ? winImg : failImg;
    return (
      <div style={winStyle}>
        <div className="papyrus">
          <div className="papyrus-child" role="main">
            <div className="tape" />
            <Papyrus page={1337} text={text} />
            <Picture source={imageUrl} />
          </div>
        </div>
      </div>
      );
  }
}
