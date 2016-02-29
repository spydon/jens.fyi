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
            "Men vem är du, och hur hamnade du här egentligen? Du känner dig väldigt förvirrad. Du hittar en tom " +
            "ryggsäck som ligger bredvid dig, den är förmodligen din, eftersom det inte är någon annan i närheten.",
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
                {text: "Upplands Väsby", nextState: 13},
                {text: "Sälen", nextState: 24},
                {text: "Kista", nextState: 30},
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
      page: 9, // Annika och
      text: "Två tjejer kramar om dig, men säger att de har väldigt bråttom till sitt tåg, så de springer snabbt iväg. " +
            "Nu vet du ditt namn i alla fall, alltid nått positivt!",
      choices: [{text: "Gå vidare", nextState: 10}, {text: "Få existenskris", nextState: 11}]
    },
    {
      page: 10,
      item: "Coola skor",
      text: "\"Vad gör du här bror? Åk hem till Uppsala, de letar efter dig där! " +
            "Du glömde dina springskor hos mig i förrgår förresten. Här.\" Malin ger dig dina skor.",
      choices: [{text: "Lyd din visa syster och åk hem", nextState: 4}, {text: "Ta på dig skorna", nextState: 11}]
    },
    {
      page: 11,
      text: "Du tar på dig springskorna och automagiskt så börjar du springa. Problemet är bara att du inte kan stanna, " +
            "du behöver nått som ger lite luftmotstånd! Du springer till universums undergång, " +
            "trevligt men kontraproduktivt.",
      choices: [{text: "Börja om", nextState: 1}]
    },
    // Västerås
    {
      page: 12,
      text: "Du hamnar i en studentlägenhet och någon säger att det är Festivås. Efter några timmar somnar du till.",
      choices: [{text: "Vakna!", nextState: 1}]
    },
    // Upplands väsby
    {
      page: 13,
      text: "Tåget rullar in på stationen. Det här känns bekant på nått sätt...",
      choices: [{text: "Hoppa på en buss", nextState: 16}, {text: "Låt fötterna leda dig", nextState: 14}]
    },
    {
      page: 14,
      text: "Du kommer fram till ett hus som känns väldigt bekant. " +
            "Det står någon i fönstet som vinkar att du ska komma in.",
      choices: [{text: "Creepy, spring därifrån!", nextState: 11}, {text: "Gå in.", nextState: 15}]
    },
    {
      page: 15,
      item: "Spandex brallor",
      text: "Det är tydligen din Pappa. \"Tur att man hade en sånn i alla fall\", tänker du. " +
      "Han bjuder dig på lunch och efterrätt. Efter lunchen ger han dig ett par tighta spandex-cykelbrallor som han tror " +
      "skulle passa dig.",
      choices: [{text: "Ta brallorna och gå till bussen", nextState: 16}]
    },
    {
      page: 16,
      text: "Du står vid busshållplatsen, vart vill du ta dig?",
      choices: [{text: "Uppsala", nextState: 4},
                {text: "Vattmåravägen", nextState: 17},
                {text: "Bredden", nextState: 20},
                {text: "Smedby", nextState: 22}]
    },
    {
      page: 17, // Läskig bild på Emelie, Jossan och Malin
      text: "Det står några tjejer där, de ser fruktansvärt läskiga ut",
      choices: [{text: "Gå baklänges till busshållplatsen", nextState: 16}, {text: "Prata med dem", nextState: 18}]
    },
    {
      page: 18, // Kaffe
      text: "De bjuder in dig på kaffe. Du hatar kaffe och det gör alla dem också. De berättar om någon superhjälte som " +
            "varit i farten den senaste tiden, men som nu spårlöst är försvunnen.",
      choices: [{text: "Du flyr till busshållplatsen", nextState: 16}, {text: "Ta en till kopp kaffe", nextState: 19}]
    },
    {
      page: 19, // Explosion
      text: "Du tål inte så här mycket koffein. Du exploderar. Jahapp, det var ju oturligt.",
      choices: [{text: "Börja om", nextState: 1}]
    },
    {
      page: 20, // Fanny, Annelie och Elin
      text: "Du har definitivt kommit fel. Det är bara hästar överallt här. Förutom några personer som står och", //TODO: Depending on pic
      choices: [{text: "Fråga personerna vart du hamnat", nextState: 21}, {text: "Bussdags!", nextState: 16}]
    },
    {
      page: 21, // Bild på hästtäcke
      item: "Mantel",
      text: "De känner igen dig. Väldigt konstigt att varenda person du träffar på känner och verkar gilla dig, tänker du." +
      "Vad är det här egentligen, Truman Show?! De kramar om dig och ger dig ett hästtäcke som nästan ser ut som en mantel.",
      choices: [{text: "Tacka artigt och gå till bussen", nextState: 16}]
    },
    {
      page: 22, // Johan och petter med tophats
      text: "Du träffar på två gentlemän. De tycker det är fruktansvärt roligt att du inte kommer ihåg nått. " +
            "Snart märker du att det inte alls var gentlemän, det var internettroll! " +
            "De kastar bort all tid du har utan att ge nått vettigt tillbaka.",
      choices: [{text: "Spola tillbaka tiden", nextState: 1}]
    },
    {
      page: 23,
      text: "De bjuder in dig på kaffe. Du hatar kaffe och det gör alla dem också. De berättar om någon superhjälte som " +
            "varit i farten den senaste tiden, men som nu spårlöst är försvunnen.",
      choices: [{text: "Du flyr till busshållplatsen", nextState: 16}, {text: "Ta en till kopp kaffe", nextState: 17}]
    },
    // Sälen
    {
      page: 24,
      text: "Du kommer till Sälens tågstation, ypperligt fin. Eller nått. Särskilt eftersom den inte finns på riktigt.",
      choices: [{text: "Kontemplera över verkligheten", nextState: 25}, {text: "Åk lite mer imaginärt tåg!", nextState: 4}]
    },
    {
      page: 25,
      text: "Under kontemplererandet så har du händerna i fickorna, så som sig bör. I fickan hittar du ett startnummer till " +
      "Vasaloppet. Vad kan gå fel tänker du.",
      choices: [{text: "Ta dig till starten", nextState: 26}, {text: "Ugh, jobbigt, roligare med tåg!", nextState: 4}]
    },
    {
      page: 26, // Bild på Jens pappa och farfar
      text: "Några random snubbar ger dig färdigvallade skidor och stavar. Du sätter på dig spandexbrallorna som du " +
      "förhoppningsvis hittat, annars tror du att du gör det och åker i kalsonger istället",
      choices: [{text: "Åk snabbt", nextState: 27}, {text: "Åk kontrollerat", nextState: 28}]
    },
    {
      page: 27, // Trädet
      text: "Helt sönderkörda kurvor, du hamnar helt utanför banan. Skidorna lossnar och till din förtvivlan så äter " +
      "ett träd upp dig. Jobbigt.",
      choices: [{text: "Happ", nextState: 1}]
    },
    {
      page: 28,
      text: "Du kör fantastiskt trots stora horder av muppiga skidåkare! Du glider in på 3:44 och får någon form av " +
      "skitstort glansigt Oboy-glas, vad du nu ska med det till.",
      choices: [{text: "Byt Oboyglaset mot en tågbiljett hem", nextState: 4}, {text: "Drick Oboy!", nextState: 29}]
    },
    {
      page: 29,
      text: "Ett glas Oboy är mer än vad du kommer ihåg. Du klarar inte mer. Du exploderar.",
      choices: [{text: "Eeeen gång till", nextState: 1}]
    },
    // Kista
    {
      page: 30,
      text: "Du vandrar vilsen runt bland en massa Ericsson-byggnader. Fråga ",
      choices: [{text: "Eeeen gång till", nextState: 1}]
    },

    // Öland
    {
      page: 33,
      text: "Du bygger om tåget till någon form av amfibiebåtståg och tar dig fram till Öland.",
      choices: [{text: "Bygg om det till en ubåt", nextState: 34}, {text: "Utforska ön", nextState: 37}]
    },
    {
      page: 34,
      text: "En sak är säker, du är ingen ubåtsbyggare, så nu vet du det i alla fall. Tyvärr får du redan på det precis " +
      "innan en rysk ubåt kommer och börjar attackera dig.",
      choices: [{text: "Retirera", nextState: 35}, {text: "Ring kungen!", nextState: 36}]
    },
    {
      page: 35,
      text: "\"Ubåten\" sjunker till botten och du konverterar till sjöjungfru",
      choices: [{text: "Konvertera tillbaka", nextState: 1}]
    },
    {
      page: 36,
      item: "Röda kalsonger",
      text: "Kungen fixar biffen och jagar bort ryssen. Han ger dig ett par nya kalsonger, eftersom dina gamla blivit " +
            "blöta av olika anledningar.",
      choices: [{text: "Dags att utforska ön!", nextState: 37}]
    },
    {
      page: 37,
      text: "Du utforskar ön och hittar bland annat lite delfiner i soluppgången. Du somnar på stranden för att sedan bli " +
      "väckt av några, vad du antar, måste vara galningar.",
      choices: [{text: "Lek med galningarna", nextState: 38}, {text: "Ta amfibiebåtståget hem", nextState: 4}]
    },
    {
      page: 38,
      text: "Du leker med galningarna på stranden tills de bestämmer sig för att ",//TODO: Passande bild
      choices: [{text: "Åk hem", nextState: 4}, {text: "Ta en simtur", nextState: 39}]
    },
    {
      page: 39,
      text: "Du får ett kylskåp i huvudet. Oturlig simtur tänker du, eller ja, hade du tänkt om du haft ett huvud kvar.",
      choices: [{text: "Återuppstå", nextState: 1}]
    },
    // Orbaden
    {
      page: 40,
      item: "Handskar",
      text: "Här var det ju mysigt tänker du ... De ger dig ett par handskar eftersom det är så kallt ute. ", //TODO: Passande farfar och farmor bild
      choices: [{text: "Åk skidor hem", nextState: 27}, {text: "Lifta", nextState: 4}]
    },
    // Uppsala
    {
     page: 40,
     text: "Du hittar din cykel, vart vill du cykla?",
     choices: [{text: "Stationen", nextState: 4},
               {text: "Flogsta", nextState: 41},
               {text: "Studentvägen", nextState: 1337},
               {text: "FooBar", nextState: 1337},
               {text: "Döbelnsgatan", nextState: 1337},
               {text: "Uplands Nation", nextState: 1337}]
    },
    {
     page: 41,
     text: "Du kommer fram till ICA väst och funderar på om det var låg- eller höghusen du ville till.",
     choices: [{text: "Mot höghusen!", nextState: 42}, {text: "Mot låghusen!", nextState: 45}]
    },
    {
     page: 42,
     text: "Det är totalt kaos här, men ingen verkar bry sig. De verkar till och med tycka om det.",
     choices: [{text: "Hälsa på folk", nextState: 43}, {text: "Skaka på axlarna och gå", nextState: 40}]
    },
    {
     page: 43,
     text: "Du hälsar på folk, vilket de verkar tycka är konstigt. Festen fortsätter länge och du börjar bli trött, men " +
     "du kommer ju inte ihåg vart du bor.",
     choices: [{text: "Gå till cykeln", nextState: 40}, {text: "Fortsätt festa", nextState: 44}]
    },
    {
     page: 44,
     text: "Klockan är 6 på morgonen, dags att ta sig härifrån!",
     choices: [{text: "Ta dig till stationen", nextState: 4}, {text: "Mot cykeln", nextState: 40}]
    },
    {
     page: 45,
     text: "Du plingar på en slumpmässig lägenhet, du blir inbjuden att antingen spela spel eller festa, vad låter bäst?",
     choices: [{text: "Spela spel", nextState: 46}, {text: "Festa", nextState: 48}]
    },
    {
     page: 46,
     item: "Mask",
     text: "Du spelar ett långt och onödigt komplicerat spel. Men du vinner stort och får en utklädnadsmask i pris.",
     choices: [{text: "Nöjd lämnar du lägenheten", nextState: 40}]
    },
    // Special states
    {
      page: 1337,
      end: true,
      text: "Du får en puss, på munnen! Allting klarnar, du vet vem du är! Du. Är. SUUUUUUUPER-JENS!",
      choices: []
    },
    {
      page: 1338,
      end: true,
      text: "Du får en puss av den snygga tjejen och allt blod går ifrån hjärnan... " +
      "till någon annanstans... och du svimmar direkt!",
      choices: [{text: "Kvickna till", nextState: 1}]
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