import React from 'react';

export default class Picture extends React.Component {

  render() {

    var tapes = [];
    var turn = 1;
    while(Math.random() < 1.0/turn && this.props.source) {
      const margin = (turn-1)*120 + "px";
      const tapeStyle = {transform: "rotate(" + Math.random()*360 + "deg)", marginLeft: margin, zIndex: 1, width: Math.floor(Math.random()*5)+7 + "em"};
      tapes.push(<div key={tapes.length} style={tapeStyle} className="tape" />);
      turn++;
    }

    const imageStyle = {transform: "rotate(" + ((Math.random()*40)-20) + "deg)", zIndex: 0};
    return (
      <div className="picture-container">
        <div className="picture">
          {tapes}
          <img style={imageStyle} src={this.props.source} />
        </div>
      </div>
      );
  }
}
