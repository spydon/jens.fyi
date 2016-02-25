import React from 'react';
import Papyrus from './Papyrus.jsx';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <div className="papyrus">
          <div className="papyrus-child" role="main">
            <div className="tape" />
            <Papyrus page={42} text={"This project was created by Yassine Boutaib and Lukas Klingsbo during Uprise Winter Game Jam 2015. Hope you enjoyed it!"} />
          </div>
        </div>
      </div>
      );
  }
}
