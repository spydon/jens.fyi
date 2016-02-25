import Reflux from 'reflux';
import StateAction from '../actions/StateAction';

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
import tree from '../styles/cards/tree.jpg';

const StateStore = Reflux.createStore({

  inventory: new Set(),
  history: [],
  currentState: {},
  states: [
    {
      page: 1,
      text: "You wake up in the forrest outside your parents house, the world feels weird, it's like all colours and tastes are gone.",
      img: tree,
      choices: [{text: "Enter the house", nextState: 2}, {text: "Eat yourself", nextState: 1338}]
    },
    {
      page: 2,
      text: "In the kitchen of the house there is a cookie monster telling you that your parents are dead. Killed by a monstrous creature who forced them to cook christmas dinner until they died. He gives you a note.",
      choices: [{text: "Take note", nextState: 3}]
    },
    {
      page: 3,
      text: "The cookie monster tells you that there is one last chance, one last chance to save your parents and this world! You have to find all the falvours that have gone missing.",
      choices: [{text: "Take on the mission!", nextState: 4}, {text: "Sounds hard, I'll eat myself instead", nextState: 1338}]
    },
    {
      page: 4,
      text: "You are back outside of the house, in the forrest, and remember that you left your space ship there after a crazy night at Flustret. Which planet do you want to go to?",
      choices: [{text: "Sweet", nextState: 5}, {text: "Spicy", nextState: 9}, {text: "Sour", nextState: 13}, {text: "Mix the ingredients in your bag", nextState: 1337}]
    },
    // SWEET
    {
      page: 5,
      text: "You stand next to the spaceship on the sweet planet, what do you want to do?",
      choices: [{text: "Explore", nextState: 6}, {text: "Fly home", nextState: 4}]
    },
    {
      page: 6,
      text: "You find a sweet little monster, he is carrying the sweet taste, just what you need!",
      choices: [{text: "Chain saw him!", nextState: 7}, {text: "Give him a hug.", nextState: 8, item: "Sweet"}, {text: "Go back", nextState: -1}]
    },
    {
      page: 7,
      item: "Sour",
      text: "The sweetness turned sour after your horrible chain saw murder, ah well, sour is also a taste! Sour is now in your bag.",
      choices: [{text: "Go home", nextState: 4}, {text: "You can't stand it, eat yourself!", nextState: 1338}]
    },
    {
      page: 8,
      item: "Sweet",
      text: "The sweet little monster cheers from the attention and gives you a little vial of sweet which you put in your bag.",
      choices: [{text: "Run to the spaceship", nextState: 4}]
    },
    // SPICY
    {
      page: 9,
      text: "You can barely breathe from all the spicy fumes on the planet, you feel like ending this all by eating yourself.",
      choices: [{text: "Eat yourself", nextState: 1338}, {text: "Explore the area", nextState: 10}, {text: "Go home", nextState: 4}]
    },
    {
      page: 10,
      text: "There is a weird monster spelling of spicy stuff standing in front of you, what do you want to do?",
      choices: [{text: "Hug him", nextState: 11}, {text: "Juice him up in your particle accelerator", nextState: 12}, {text: "Get out of here", nextState: 4}]
    },
    {
      page: 11,
      text: "He forces you to eat yourself with his extremely spicy smell.",
      choices: [{text: "Eat yourself", nextState: 1338}]
    },
    {
      page: 12,
      item: "Spicy",
      text: "You juice him up real good and put the spicy particle juice in your bag.",
      choices: [{text: "Go home!", nextState: 4}]
    },
    // SOUR
    {
      page: 13,
      text: "You land on a planet so sour that nothing could ever have lived here.",
      choices: [{text: "Explore it anyways", nextState: 14}, {text: "Fly home", nextState: 4}]
    },
    {
      page: 14,
      text: "You meet a sour monster, he doesn't seem to like you at all.",
      choices: [{text: "Hug the little fella!", nextState: 15}, {text: "Particle-accelerator-juice-him.", nextState: 16}, {text: "Lick him...", nextState: 17}]
    },
    {
      page: 15,
      text: "The monster turns sweet and you put some sweetness into your bag.",
      choices: [{text: "Get out of here", nextState: 4}]
    },
    {
      page: 16,
      item: "Sour",
      text: "You particle juice accelerate the little bugger real good and put the sour juice in your bag",
      choices: [{text: "Get out of here, you monster!", nextState: 4}]
    },
    {
      page: 17,
      text: "You lick him and to remove the incredibly sour taste from your tongue you are forced to eat yourself.",
      choices: [{text: "Eat yourself, just do it.", nextState: 1338}]
    },
    // End states
    {
      page: 1337,
      win: true,
      text: "",
      choices: []
    },
    {
      page: 1338,
      fail: true,
      text: "",
      choices: []
    },
    {
      page: 1339,
      bag: true,
      text: "In your bag you see these things: ",
      static: "In your bag you see these things: ",
      choices: [{text: "Take your head out of the bag", nextState: -1}]
    }
  ],

  init() {
    this.listenToMany(StateAction);
  },

  onUpdateStateCompleted(page) {
    const result = this.states.filter(s => s.page == page);
    const newState = result.length == 0 ? this.history[this.history.length-1] : result[0];
    if(newState.item) {
      this.inventory.add(newState.item);
    }
    if(newState.bag) {
      newState.text = newState.static;
      const inventory = Array.from(this.inventory);
      const secondLastItem = inventory[inventory.length-2];
      const lastItem = inventory[inventory.length-1];
      if(inventory.length == 0) {
        newState.text = "Your bag is utterly and completely empty";
      }
      for(let item of inventory) {
        const itemText = item + (lastItem == item ? "" : ", ") + (secondLastItem == item ? " and " : "");
        newState.text += itemText;
      }
    }
    this.history.push(this.currentState);
    this.currentState = newState;

    newState.inventory = this.inventory;
    newState.history = this.history;
    this.trigger(newState);
  },

  onUpdateStateFailed() {
    console.warn("Could update state");
  }

});

export {StateStore as default};