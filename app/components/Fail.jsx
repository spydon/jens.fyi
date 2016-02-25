import React from 'react';
import Papyrus from './Papyrus.jsx';

export default class Fail extends React.Component {

  render() {

    const style = this.props.visible ? {} : {display: "none"};
    const text = "You are forced to eat yourself, you die.";
    return (
      <div style={style}>
        <div className="papyrus">
          <div className="papyrus-child" role="main">
            <div className="tape" />
            <Papyrus page={1337} text={text} />
          </div>
        </div>
      </div>
      );
  }
}
