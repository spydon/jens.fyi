import Reflux from 'reflux'

const StateAction = Reflux.createActions({
  "updateState": {},
  "updateStateCompleted": {},
  "updateStateError": {}
});

StateAction.updateState.listen( page => {
  StateAction.updateStateCompleted(page);
});

export {StateAction as default};