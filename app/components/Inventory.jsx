import React from 'react';

import StateAction from '../actions/StateAction.jsx';

export default class Inventory extends React.Component {

  openBag() {
    StateAction.updateState(1339);
  }

  render() {

    return (
      <button type="button" className="btn papyrus-btn inventory-btn" onClick={this.openBag}>
        Look in bag
      </button>
      );
  }
}
