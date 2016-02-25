import React from 'react';
import Papyrus from './Papyrus.jsx';
import Picture from './Picture.jsx';

export default class End extends React.Component {

  checkValidity(history, inventory) {
    const pages = new Set();
    history.forEach(state => pages.add(state.page));
    // TODO: parse history tree to see if it's a valid win
    return inventory.size == 3;
  }

  render() {
    const validWin = this.checkValidity(this.props.history, this.props.inventory);
    const score = 40-this.props.history.length;
    const winText = this.props.text + "Score: " + score;
    const failText = this.props.text;

    const winStyle = this.props.visible ? {} : {display: "none"};
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
