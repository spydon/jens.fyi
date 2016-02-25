import React from 'react';

import StateAction from '../actions/StateAction.jsx';

export default class Choices extends React.Component {

  updateState(page) {
    StateAction.updateState(page);
  }

  render() {
    const choices = this.props.choices;

    const buttons = choices.map(choice =>
      <button key={choice.text} type="button" className="btn papyrus-btn" onClick={() => this.updateState(choice.nextState)}>
        {choice.text}
      </button>);

    return (
      <div className="center papyrus-btn-group btn-group btn-group-justified">
        {buttons}
      </div>
      );
  }
}
