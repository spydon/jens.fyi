import React from 'react';

import Papyrus from './Papyrus.jsx';
import Choices from './Choices.jsx';
import Picture from './Picture.jsx';
import Inventory from './Inventory.jsx';
import End from './End.jsx';

import StateStore from '../stores/StateStore.jsx';
import StateAction from '../actions/StateAction.jsx';


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  componentWillMount() {
    this.setState({
      page: "0",
      text: "Loading...",
      choices: [],
      img: "",
      inventory: new Set(),
      history: []
    });
  }

  componentDidMount() {
    this.unsubscribe = StateStore.listen(this.updateState);
    StateAction.updateState(1);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  updateState(state) {
    this.setState(state);
  }

  render() {
    const end = !!this.state.end;
    const playStyle = end ? {display: "none"} : {};

    return (
      <div>
        <div style={playStyle} className="papyrus">
          <div className="papyrus-child" role="main">
            <Papyrus page={this.state.page} text={this.state.text} />
            <Picture source={this.state.img} />
            <Choices choices={this.state.choices} />
            <Inventory inventory={this.state.inventory} />
          </div>
        </div>
        <End visible={end}
             inventory={this.state.inventory}
             history={this.state.history}
             img={this.state.img}
             text={this.state.text} />
      </div>
      );
  }
}
