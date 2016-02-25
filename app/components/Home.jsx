import React from 'react';

import Papyrus from './Papyrus.jsx';
import Choices from './Choices.jsx';
import Picture from './Picture.jsx';
import Inventory from './Inventory.jsx';
import Win from './Win.jsx';
import Fail from './Fail.jsx';

import StateStore from '../stores/StateStore.jsx';
import StateAction from '../actions/StateAction.jsx';

//TODO: change this.
import house from '../styles/cards/house.png';
import hero from '../styles/cards/hero.png';
import list from '../styles/cards/list.png';
import boss from '../styles/cards/boss.png';
import inventory from '../styles/cards/inventory.png';
import spicyLand from '../styles/cards/chili_land.png';
import spicyMonster from '../styles/cards/boss.png';
import sweetLand from '../styles/cards/sweet_land.png';
import sweetMonster from '../styles/cards/sweet_monster.png';
import sourLand from '../styles/cards/sour_land.png';
import sourMonster from '../styles/cards/sweet_monster.png';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  getImgMap() {
    const imgMap = new Map();
    imgMap.set(1, house);
    imgMap.set(2, hero);
    imgMap.set(3, list);
    imgMap.set(4, house);
    imgMap.set(5, sweetLand);
    imgMap.set(6, sweetMonster);
    imgMap.set(7, sweetMonster);
    imgMap.set(8, sweetMonster);
    imgMap.set(9, spicyLand);
    imgMap.set(10, spicyMonster);
    imgMap.set(11, spicyMonster);
    imgMap.set(12, spicyMonster);
    imgMap.set(13, sourLand);
    imgMap.set(14, sourMonster);
    imgMap.set(15, sourMonster);
    imgMap.set(16, sourMonster);
    imgMap.set(17, sourMonster);

    imgMap.set(1339, inventory);
    return imgMap;
  }

  componentWillMount() {
    this.setState({
      page: "0",
      text: "Loading...",
      choices: [],
      inventory: new Set(),
      history: [],
      imgMap: this.getImgMap()
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
    const win = !!this.state.win;
    const fail = !!this.state.fail;
    const playStyle = win || fail ? {display: "none"} : {};
    const imageUrl = this.state.imgMap.get(this.state.page);

    return (
      <div>
        <div style={playStyle} className="papyrus">
          <div className="papyrus-child" role="main">
            <Papyrus page={this.state.page} text={this.state.text} />
            <Picture source={imageUrl} />
            <Choices choices={this.state.choices} />
            <Inventory inventory={this.state.inventory} />
          </div>
        </div>
        <Win visible={win} inventory={this.state.inventory} history={this.state.history} />
        <Fail visible={fail} />
      </div>
      );
  }
}
