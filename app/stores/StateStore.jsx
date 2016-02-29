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
      text: "Du vaknar upp med ett ryck, du ser dig omkring och drar slutsatsen att du är på ett snabbmatställe. " +
            "Men vem är du, och hur hamnade du här egentligen? Du känner dig väldigt förvirrad. Du hittar en väska som " +
            "ligger bredvid dig, den är förmodligen din, eftersom det inte är någon annan i närheten.",
      img: tree,
      choices: [{text: "Gå ut", nextState: 2}, {text: "Fortsätt sov", nextState: 1338}]
    },
    {
      page: 2,
      text: "Du kommer ut på ett torg med några busshållplatser.",
      choices: [{text: "Fråga någon vart du är", nextState: 3}, {text: "Gå i slumpmässig riktning", nextState: 4}]
    },
    {
      page: 3, //Per
      text: "Personen du frågar verkar känna igen dig och säger: \"Roligt skämt min gode herre, " +
            "vi är ju självfallet på stora torget i Uppsala\"",
      choices: [{text: "Fortsätt gå", nextState: 4}, {text: "Småprata med honom", nextState: 5}]
    },
    {
      page: 4,
      text: "Du hamnar på Uppsala centralstation, kanske behöver du åka någonstans för att få reda på vem du är?",
      choices: [{text: "Stockholm", nextState: 6},
                {text: "Västerås", nextState: 12},
                {text: "Upplands Väsby", nextState: 1337},
                {text: "Mora", nextState: 1337},
                {text: "Öland", nextState: 1337},
                {text: "Orbaden", nextState: 1337},
                {text: "Gå till stora torget", nextState: 1337}]
    },
    {
      page: 5, //Per
      text: "Per som personen hette, gör en lång utläggning om religion, meningen med livet och förklarar varför hundar " +
            "är bättre än katter. Du somnar i en hög på asfalten och får aldrig reda på vem du är.",
      choices: [{text: "Börja om", nextState: 1}]
    },
    // Stockholm
    {
      page: 6,
      text: "Tåget anländer två timmar för sent till centralstationen i Stockholm",
      choices: [{text: "Klaga till biljettkontrollanten!", nextState: 7}, {text: "Gå till plattan.", nextState: 8}]
    },
    {
      page: 7, // Någon vän photoshoppad som kontrollant
      item: "SJ-bälte",
      text: "Kontrollanten ber så hemskt mycket om ursäkt och ger dig sitt " +
            "bälte som det står SJ i stora bokstäver på som kompensation.",
      choices: [{text: "Vandra ut ur stationen", nextState: 8}, {text: "Åk tillbaka till Uppsala", nextState: 4}]
    },
    {
      page: 8, // Bild på vägen till plattan
      text: "\"Heeeej Jens!\" är det någon som skriker, det verkar vara riktat till dig.",
      choices: [{text: "Undersök saken", nextState: 9}, {text: "Lunka vidare", nextState: 10}]
    },
    {
      page: 9,
      text: "Två tjejer kramar om dig, men säger att de har väldigt bråttom till sitt tåg, så de springer snabbt iväg. " +
            "Nu vet du ditt namn i alla fall, alltid nått positivt!",
      choices: [{text: "Gå vidare", nextState: 10}, {text: "Få existenskris", nextState: 11}]
    },
    {
      page: 10,
      item: "Coola skor",
      text: "\"Vad gör du här bror? Åk hem till Uppsala, de letar efter dig där! " +
            "Du glömde dina springskor hos mig i förrgår förresten, här.\" Malin ger dig dina skor.",
      choices: [{text: "Lyd din visa syster och åk hem", nextState: 4}, {text: "Ta på dig skorna", nextState: 11}]
    },
    {
      page: 11,
      text: "Du tar på dig skorna och automagiskt så börjar du springa. Problemet är bara att du inte kan stanna, " +
            "du behöver nått som ger lite luftmotstånd! Du springer till universums undergång, " +
            "trevligt men kontraproduktivt.",
      choices: [{text: "Börja om", nextState: 1}]
    },
    // Västerås
    {
      page: 12,
      text: "",
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
      text: "I ryggsäcken har du följande saker: ",
      choices: [{text: "Ta ut huvudet ur ryggsäcken", nextState: -1}]
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

    if(newState.page == 1) {
      this.inventory.clear();
    }

    if(newState.bag) {
      console.log(this.inventory.size);
      if(this.inventory.size != 0) {
        var itr = 1;
        var items = "";
        for (let item of this.inventory) {
          var itemText = ", " + item;
          if(itr == 1) {
            itemText = " och " + item;
          } else if(this.inventory.size == itr) {
            itemText = item;
          }
          items = itemText + items;
          itr++;
        }
        newState.text = newState.text + " " + items;
      } else {
        newState.text = "Ryggan är tyvärr helt tom.";
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