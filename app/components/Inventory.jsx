import React from 'react';

import StateStore from '../stores/StateStore.jsx';
import StateAction from '../actions/StateAction.jsx';

export default class Inventory extends React.Component {

  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  componentWillMount() {
    this.setState({});
  }

  componentDidMount() {
    this.unsubscribe = StateStore.listen(this.updateState);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  updateState(state) {
    this.setState(state);
  }

  openBag() {
    StateAction.updateState(1339);
  }

  render() {

    const buttonStyle = this.state.bag ? {display: "none"} : {};
    return (
      <button type="button" style={buttonStyle} className="btn papyrus-btn inventory-btn" onClick={this.openBag}>
        Kolla i ryggsäcken
      </button>
      );
  }
}
