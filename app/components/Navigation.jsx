import React from 'react';

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header"></div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <a href="#">The Game</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
           </ul>
          </div>
        </div>
      </nav>
    );
  }
}
