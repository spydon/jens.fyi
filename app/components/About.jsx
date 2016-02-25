import React from 'react';
import Papyrus from './Papyrus.jsx';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <div className="papyrus">
          <div className="papyrus-child" role="main">
            <div className="tape" />
            <Papyrus page={42} text={"Det här spelet var gjort till Jens på hans 26:e födelsedag! Grattis! önskar Lukas och Nibbe"} />
          </div>
        </div>
      </div>
      );
  }
}
