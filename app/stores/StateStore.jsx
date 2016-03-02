import Reflux from 'reflux';
import StateAction from '../actions/StateAction';

import sova from '../styles/cards/sova.jpg';
import storaTorget from '../styles/cards/stora_torget.jpg';
import per from '../styles/cards/per.jpg';
import train from '../styles/cards/train.jpg';
import stockholm from '../styles/cards/stockholm.jpg';
import gata from '../styles/cards/gata.jpg';
import annikaEmilia from '../styles/cards/annika_emilia.jpg';
import sister from '../styles/cards/sister.jpg';
import universe from '../styles/cards/universe.jpg';
import festivas from '../styles/cards/festivas.jpg';
import vasby from '../styles/cards/vasby.jpg';
import lars from '../styles/cards/lars.jpg';
import buss from '../styles/cards/buss.png';
import scary from '../styles/cards/scary.jpg';
import skepptuna from '../styles/cards/skepptuna.png';
import kaffe from '../styles/cards/kaffe.jpg';
import explosion from '../styles/cards/explosion.jpg';
import cape from '../styles/cards/cape.jpg';
import trolls from '../styles/cards/trolls.jpg';
import derp from '../styles/cards/derp.jpg';
import imaginary from '../styles/cards/imaginary_train.jpg';
import vasaloppet from '../styles/cards/vasaloppet.png';
import tree from '../styles/cards/tree.jpg';
import oboy from '../styles/cards/explosion_oboy.jpg';
import ericsson from '../styles/cards/ericsson.jpg';
import elin from '../styles/cards/elin.jpg';
import amfibie from '../styles/cards/amfibie.jpg';
import ryssen from '../styles/cards/ryssen_kommer.jpg';
import sjojungfru from '../styles/cards/sjojungfru.png';
import kungen from '../styles/cards/kungen.jpg';
import oland from '../styles/cards/oland.jpg';
import hatt from '../styles/cards/hatt.jpg';
import kalskap from '../styles/cards/kalskap.jpg';
import orbaden from '../styles/cards/orbaden.jpg';
import cykel from '../styles/cards/cykel.jpg';
import ica_vast from '../styles/cards/ica_vast.jpg';
import vasajens from '../styles/cards/vasaloppet.jpg';
import hoghus from '../styles/cards/flogsta_hoghus.jpg';
import hoghus2 from '../styles/cards/flogsta_hoghus2.jpg';
import hoghus3 from '../styles/cards/flogsta_hoghus3.jpg';
import flogsta75d from '../styles/cards/75D.jpg';
import mask from '../styles/cards/mask.jpg';
import pizzeria from '../styles/cards/pizzeria.jpg';
import studentvagen from '../styles/cards/studentvagen.jpg';
import pizzahut from '../styles/cards/pizzahut.jpg';
import rygga from '../styles/cards/rygga.png';
import foobar from '../styles/cards/foobar.jpg';
import puss from '../styles/cards/puss.jpg';
import kinder from '../styles/cards/kinder.jpg';
import emil from '../styles/cards/emil.jpg';
import thinking from '../styles/cards/thinking.jpg';
import math from '../styles/cards/math.jpg';
import uplands from '../styles/cards/uplands.jpg';
import laghus from '../styles/cards/flogsta_laghus.jpg';
import badmossa from '../styles/cards/badmossa.jpg';
import merol from '../styles/cards/merol.jpg';
import hast from '../styles/cards/hast.jpg';
import kista from '../styles/cards/kista.jpg';
import sj from '../styles/cards/sj.jpg';
import skidor from '../styles/cards/skidor.jpg';
import katrien from '../styles/cards/katrien.jpg';
import viktoria from '../styles/cards/viktoria.jpg';
import anaka from '../styles/cards/anaka.jpg';
import hojdhopp from '../styles/cards/hojdhopp.jpg';

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
      img: sova,
      choices: [{text: "Gå ut", nextState: 2}, {text: "Fortsätt sov lite till", nextState: 1}]
    },
    {
      page: 2,
      img: storaTorget,
      text: "Du kommer ut på ett torg med några busshållplatser.",
      choices: [{text: "Fråga någon vart du är", nextState: 3}, {text: "Gå i slumpmässig riktning", nextState: 4}]
    },
    {
      page: 3,
      img: per,
      text: "Personen du frågar verkar känna igen dig och säger: \"Roligt skämt min gode herre, " +
            "vi är ju självfallet på stora torget i Uppsala\"",
      choices: [{text: "Fortsätt gå", nextState: 4}, {text: "Småprata med honom", nextState: 5}]
    },
    {
      page: 4,
      img: train,
      text: "Du hamnar på Uppsala centralstation, kanske behöver du åka någonstans för att få reda på vem du är?",
      choices: [{text: "Stockholm", nextState: 6},
                {text: "Västerås", nextState: 12},
                {text: "Upplands Väsby", nextState: 13},
                {text: "Sälen", nextState: 24},
                {text: "Kista", nextState: 30},
                {text: "Öland", nextState: 33},
                {text: "Orbaden", nextState: 60},
                {text: "Gå till stora torget", nextState: 40}]
    },
    {
      page: 5, //Per
      img: per,
      text: "Per som personen hette, gör en lång utläggning om religion, meningen med livet och förklarar varför hundar " +
            "är bättre än katter. Du somnar i en hög på asfalten och får aldrig reda på vem du är.",
      choices: [{text: "Börja om", nextState: 1}]
    },
    // Stockholm
    {
      page: 6,
      img: stockholm,
      text: "Tåget anländer två timmar för sent till centralstationen i Stockholm",
      choices: [{text: "Klaga till biljettkontrollanten!", nextState: 7}, {text: "Gå till plattan.", nextState: 8}]
    },
    {
      page: 7, // Någon vän photoshoppad som kontrollant
      img: sj,
      item: "SJ-bälte",
      text: "Kontrollanten ber så hemskt mycket om ursäkt och ger dig sitt " +
            "bälte som det står SJ i stora bokstäver på som kompensation.",
      choices: [{text: "Vandra ut ur stationen", nextState: 8}, {text: "Åk tillbaka till Uppsala", nextState: 4}]
    },
    {
      page: 8, // Bild på vägen till plattan
      img: gata,
      text: "\"Heeeej Jens!\" är det någon som skriker, det verkar vara riktat till dig.",
      choices: [{text: "Undersök saken", nextState: 9}, {text: "Lunka vidare", nextState: 10}]
    },
    {
      page: 9, // Annika och Emilia
      img: annikaEmilia,
      text: "Två tjejer kramar om dig, men säger att de har väldigt bråttom till sitt tåg, så de springer snabbt iväg. " +
            "Nu vet du ditt namn i alla fall, alltid nått positivt!",
      choices: [{text: "Gå vidare", nextState: 10}, {text: "Få existenskris", nextState: 1}]
    },
    {
      page: 10,
      img: sister,
      item: "Coola skor",
      text: "\"Vad gör du här bror? Åk hem till Uppsala, de letar efter dig där! " +
            "Du glömde dina springskor hos mig i förrgår förresten. Här.\" Malin ger dig dina skor.",
      choices: [{text: "Lyd din visa syster och åk hem", nextState: 4}, {text: "Ta på dig skorna", nextState: 11}]
    },
    {
      page: 11,
      img: universe,
      text: "Du tar på dig springskorna och automagiskt så börjar du springa. Problemet är bara att du inte kan stanna, " +
            "du behöver nått som ger lite luftmotstånd! Du springer till universums undergång, " +
            "trevligt men kontraproduktivt.",
      choices: [{text: "Börja om", nextState: 1}]
    },
    // Västerås
    {
      page: 12,
      img: festivas,
      text: "Du hamnar i en studentlägenhet och någon säger att det är Festivås. Efter några timmar somnar du till.",
      choices: [{text: "Vakna!", nextState: 1}]
    },
    // Upplands väsby
    {
      page: 13,
      img: vasby,
      text: "Tåget rullar in på stationen. Det här känns bekant på nått sätt...",
      choices: [{text: "Hoppa på en buss", nextState: 16}, {text: "Låt fötterna leda dig", nextState: 14}]
    },
    {
      page: 14,
      img: skepptuna,
      text: "Du kommer fram till ett hus som känns väldigt bekant. " +
            "Det står någon i fönstet som vinkar att du ska komma in.",
      choices: [{text: "Creepy, spring därifrån!", nextState: 11}, {text: "Gå in.", nextState: 15}]
    },
    {
      page: 15,
      img: lars,
      item: "Spandex brallor",
      text: "Det är tydligen din Pappa. \"Tur att man hade en sånn i alla fall\", tänker du. " +
      "Han bjuder dig på lunch och efterrätt. Efter lunchen ger han dig ett par tighta spandex-cykelbrallor som han tror " +
      "skulle passa dig.",
      choices: [{text: "Ta brallorna och gå till bussen", nextState: 16}]
    },
    {
      page: 16,
      img: buss,
      text: "Du står vid busshållplatsen, vart vill du ta dig?",
      choices: [{text: "Uppsala", nextState: 4},
                {text: "Vattmåravägen", nextState: 17},
                {text: "Bredden", nextState: 20},
                {text: "Smedby", nextState: 22}]
    },
    {
      page: 17,
      img: scary,
      text: "Det står några tjejer där, de ser fruktansvärt läskiga ut",
      choices: [{text: "Gå baklänges till busshållplatsen", nextState: 16}, {text: "Prata med dem", nextState: 18}]
    },
    {
      page: 18, // Kaffe
      img: kaffe,
      text: "De bjuder in dig på kaffe. Du hatar kaffe och det gör alla dem också. De berättar om någon superhjälte som " +
            "varit i farten den senaste tiden, men som nu spårlöst är försvunnen.",
      choices: [{text: "Du flyr till busshållplatsen", nextState: 16}, {text: "Ta en till kopp kaffe", nextState: 19}]
    },
    {
      page: 19, // Explosion
      img: explosion,
      text: "Du tål inte så här mycket koffein. Du exploderar. Jahapp, det var ju oturligt.",
      choices: [{text: "Börja om", nextState: 1}]
    },
    {
      page: 20,
      img: hast,
      text: "Du har definitivt kommit fel. Det är bara hästar överallt här. Förutom några ordentliga hästnördar.",
      choices: [{text: "Fråga personerna vart du hamnat", nextState: 21}, {text: "Bussdags!", nextState: 16}]
    },
    {
      page: 21, // Bild på hästtäcke
      img: cape,
      item: "Mantel",
      text: "De känner igen dig. Väldigt konstigt att varenda person du träffar på känner och verkar gilla dig, tänker du. " +
      "Vad är det här egentligen, Truman Show?! De kramar om dig och ger dig ett hästtäcke som nästan ser ut som en mantel.",
      choices: [{text: "Tacka artigt och gå till bussen", nextState: 16}]
    },
    {
      page: 22, // Johan och Nibbe med tophats
      img: trolls,
      text: "Du träffar på två gentlemän. De tycker det är fruktansvärt roligt att du inte kommer ihåg nått. " +
            "Snart märker du att det inte alls var gentlemän, det var internettroll! " +
            "De kastar bort all tid du har utan att ge nått vettigt tillbaka.",
      choices: [{text: "Spola tillbaka tiden", nextState: 23}]
    },
    {
      page: 23,
      img: derp,
      text: "DEEERP!",
      choices: [{text: "Spola snabbare!!!", nextState: 1}]
    },
    // Sälen
    {
      page: 24,
      img: imaginary,
      text: "Du kommer till Sälens tågstation, ypperligt fin. Eller nått. Särskilt eftersom den inte finns på riktigt.",
      choices: [{text: "Kontemplera över verkligheten", nextState: 25}, {text: "Åk lite mer imaginärt tåg!", nextState: 4}]
    },
    {
      page: 25,
      img: vasaloppet,
      text: "Under kontemplererandet så har du händerna i fickorna, så som sig bör. I fickan hittar du ett startnummer till " +
      "Vasaloppet. Vad kan gå fel tänker du.",
      choices: [{text: "Ta dig till starten", nextState: 26}, {text: "Ugh, jobbigt, roligare med tåg!", nextState: 4}]
    },
    {
      page: 26,
      img: skidor,
      text: "Några random snubbar ger dig färdigvallade skidor och stavar. Du sätter på dig spandexbrallorna som du " +
      "förhoppningsvis hittat, annars tror du att du gör det och åker i kalsonger istället",
      choices: [{text: "Åk snabbt", nextState: 27}, {text: "Åk kontrollerat", nextState: 28}]
    },
    {
      page: 27,
      img: tree,
      text: "Helt sönderkörda kurvor, du hamnar helt utanför banan. Skidorna lossnar och till din förtvivlan så äter " +
      "ett träd upp dig. Jobbigt.",
      choices: [{text: "Happ", nextState: 1}]
    },
    {
      page: 28,
      img: vasajens,
      text: "Du kör fantastiskt trots stora horder av muppiga skidåkare! Du glider in på 3:44 och får någon form av " +
      "skitstort glansigt Oboy-glas, vad du nu ska med det till.",
      choices: [{text: "Byt Oboyglaset mot en tågbiljett hem", nextState: 4}, {text: "Drick Oboy!", nextState: 29}]
    },
    {
      page: 29,
      img: oboy,
      text: "Ett glas Oboy är mer än vad du kommer ihåg. Du klarar inte mer. Du exploderar.",
      choices: [{text: "Eeeen gång till", nextState: 1}]
    },
    // Kista
    {
      page: 30,
      img: ericsson,
      text: "Du vandrar vilsen runt bland en massa Ericsson-byggnader. Fråga om vägen kanske?",
      choices: [{text: "Fråga", nextState: 31}, {text: "Tillbaka till tåget", nextState: 4}]
    },
    {
      page: 31,
      img: elin,
      text: "Vart ska du? Äsch, det spelar ingen roll. Du ska säkerligen dit säger hon och pekar på en " +
            "lägenhet lite längre bort.",
      choices: [{text: "Följ pekningen", nextState: 32}, {text: "Virrig tjej, mot tåget!", nextState: 4}]
    },
    {
      page: 32,
      img: kista,
      text: "Några rycker tag i dig och undrar vart du gjort av din vanliga outfit. De visar bilder på dig i din " +
            "vanliga klädsel och säger att du måste hitta: handskar, skärp, kalsonger, skor, mask, spandex, capé " +
            "och en mössa.",
      choices: [{text: "Mot tåget, ingen tid att förlora!", nextState: 4}]
    },
    // Öland
    {
      page: 33,
      img: amfibie,
      text: "Du bygger om tåget till någon form av amfibiebåtståg och tar dig fram till Öland.",
      choices: [{text: "Bygg om det till en ubåt", nextState: 34}, {text: "Utforska ön", nextState: 37}]
    },
    {
      page: 34,
      img: ryssen,
      text: "En sak är säker, du är ingen ubåtsbyggare, så nu vet du det i alla fall. Tyvärr får du redan på det precis " +
      "innan en rysk ubåt kommer och börjar attackera dig.",
      choices: [{text: "Retirera", nextState: 35}, {text: "Ring kungen!", nextState: 36}]
    },
    {
      page: 35,
      img: sjojungfru,
      text: "\"Ubåten\" sjunker till botten och du konverterar till sjöjungfru",
      choices: [{text: "Konvertera tillbaka", nextState: 1}]
    },
    {
      page: 36,
      img: kungen,
      item: "Kalsonger",
      text: "Kungen fixar biffen och jagar bort ryssen. Han ger dig ett par nya kalsonger, eftersom dina gamla blivit " +
            "blöta av olika anledningar.",
      choices: [{text: "Dags att utforska ön!", nextState: 37}]
    },
    {
      page: 37,
      img: hatt,
      text: "Du utforskar ön och hittar bland annat lite delfiner i soluppgången. Du somnar på stranden för att sedan bli " +
      "väckt av några, vad du antar, måste vara galningar.",
      choices: [{text: "Lek med galningarna", nextState: 38}, {text: "Ta amfibiebåtståget hem", nextState: 4}]
    },
    {
      page: 38,
      img: oland,
      text: "Du leker med galningarna på stranden tills du bestämmer sig för att: ",
      choices: [{text: "Åka hem", nextState: 4}, {text: "Ta en simtur", nextState: 39}]
    },
    {
      page: 39,
      img: kalskap,
      text: "Du får ett kylskåp i huvudet. Oturlig simtur tänker du, eller ja, hade du tänkt om du haft ett huvud kvar.",
      choices: [{text: "Återuppstå", nextState: 1}]
    },
    // Orbaden
    {
      page: 60,
      item: "Handskar",
      img: orbaden,
      text: "Här var det ju mysigt tänker du ... De ger dig ett par handskar eftersom det är så kallt ute. ",
      choices: [{text: "Åk skidor hem", nextState: 27}, {text: "Lifta", nextState: 4}]
    },
    // Uppsala
    {
      page: 40,
      img: cykel,
      text: "Du hittar din cykel, vart vill du cykla?",
      choices: [{text: "Stationen", nextState: 4},
                {text: "Flogsta", nextState: 41},
                {text: "Studentvägen", nextState: 48},
                {text: "FooBar", nextState: 52},
                {text: "Döbelnsgatan", nextState: 55},
                {text: "Uplands Nation", nextState: 56},
                {text: "Spatsera istället", nextState: 60}]
    },
    // Flogsta
    {
      page: 41,
      img: ica_vast,
      text: "Du kommer fram till ICA väst och funderar på om det var låg- eller höghusen du ville till.",
      choices: [{text: "Mot höghusen!", nextState: 42}, {text: "Mot låghusen!", nextState: 45}]
    },
    {
      page: 42,
      img: hoghus3,
      text: "Det är totalt kaos här, men ingen verkar bry sig. De verkar till och med tycka om det.",
      choices: [{text: "Hälsa på folk", nextState: 43}, {text: "Skaka på axlarna och gå", nextState: 40}]
    },
    {
      page: 43,
      img: hoghus,
      text: "Du hälsar på folk, vilket de verkar tycka är konstigt (eftersom de redan känner dig). " +
            "Festen fortsätter länge och du börjar bli trött, men " +
            "du kommer ju inte ihåg vart du bor.",
      choices: [{text: "Gå till cykeln", nextState: 40}, {text: "Fortsätt festa", nextState: 44}]
    },
    {
      page: 44,
      img: hoghus2,
      text: "Klockan är 6 på morgonen, dags att ta sig härifrån!",
      choices: [{text: "Ta dig till stationen", nextState: 4}, {text: "Mot cykeln", nextState: 40}]
    },
    {
      page: 45,
      img: flogsta75d,
      text: "Du plingar på en slumpmässig lägenhet, du blir inbjuden att antingen spela spel eller festa, vad låter bäst?",
      choices: [{text: "Spela spel", nextState: 46}, {text: "Festa", nextState: 47}]
    },
    {
      page: 46,
      img: mask,
      item: "Mask",
      text: "Du spelar ett långt och onödigt komplicerat spel. Men du vinner stort och får en utklädnadsmask i pris.",
      choices: [{text: "Nöjd lämnar du lägenheten", nextState: 40}]
    },
    {
      page: 47,
      img: laghus,
      text: "Det kommer 40 personer till och klämmer in sig i lägenheten. \"Mysigt\", tänker du. Det blir en kul fest i alla fall! Vad vill du göra nu?",
      choices: [{text: "Gå till ICA", nextState: 41}, {text: "Cykla", nextState: 40}]
    },
    // Studentvägen
    {
      page: 48,
      img: studentvagen,
      text: "Framme efter en supersnabbcykling till studentvägen, men vart vill du gå?",
      choices: [{text: "Till pizzerian", nextState: 49}, {text: "Studentvägen 3", nextState: 51}]
    },
    {
      page: 49,
      img: pizzeria,
      text: "Pizzeriamakaren tycker du ser lite taning ut och gör en pizza med extra allt. " +
            "Gott ser det ut och du har glömt att äta sen du vaknade på snabbmatsstället.",
      choices: [{text: "Ät pizzan", nextState: 50}, {text: "Spring för livet", nextState: 11}]
    },
    {
      page: 50,
      img: pizzahut,
      text: "Du äter upp pizzan och känner hur du liksom smälter innifrån. Du är nu en pizza. " +
            "Trevligt, men kontraproduktivt.",
      choices: [{text: "Ät upp dig själv", nextState: 1}]
    },
    {
      page: 51,
      img: puss,
      text: "Framme vid Studentvägen 3, detta känns verkligen som hemma. Då kommer någon som du känner igen och hon är " +
            "väldigt glad att se dig, hon springer mot dig!",
      choices: [{text: "Stå kvar", nextState: 1337}, {text: "Ninja dig därifrån", nextState: 40}]
    },
    // FooBar
    {
      page: 52,
      img: foobar,
      text: "Du kommer fram till FooBar, det luktar svett... Och jul av någon anledning. Hemtrevligt!",
      choices: [{text: "Fly ut", nextState: 40}, {text: "Stanna", nextState: 59}, {text: "Dags att plugga, tydligen", nextState: 53}]
    },
    {
      page: 53,
      img: math,
      text: "Du pluggar hårt, du vet inte riktigt varför. Eller ens till vilken kurs det är, men det verkar vara någon " +
            "gammal rutin att plugga till diskret matematik, som det står på boken.",
      choices: [{text: "Tråkigt", nextState: 40}, {text: "Dags för en öl?", nextState: 54}]
    },
    {
      page: 54,
      img: thinking,
      text: "Vart ska det drickas öl? Du kan bara komma på två ställen, som du inte vet varför du kommer ihåg.",
      choices: [{text: "Uplands Nation", nextState: 56}, {text: "Döbelnsgatan", nextState: 55}]
    },
    {
      page: 55,
      img: emil,
      text: "Väl framme vid Döbelnsgatan blir du välkomnad in och precis som din magkänsla sa så fick du en öl och trevligt sällskap!",
      choices: [{text: "Utgång!", nextState: 56}, {text: "Cykeldags", nextState: 40}]
    },
    {
      page: 56,
      img: uplands,
      text: "Sagt och gjort, nu sitter du på Uplands nation.",
      choices: [{text: "Beställ en öl", nextState: 57}, {text: "Kolla runt", nextState: 58}]
    },
    {
      page: 57,
      img: merol,
      text: "Du beställer en öl som nu är slut, vad vill du göra?",
      choices: [{text: "Beställ en öl", nextState: 57}, {text: "Cykla", nextState: 40}]
    },
    {
      page: 58,
      img: badmossa,
      item: "Badmössa",
      text: "Efter lite runt-kollande så hittar du en badmössa som någon glömt ifrån en pubrunda. " +
            "Bra att ha tänker du och stoppar den i väskan.",
      choices: [{text: "Beställ en öl", nextState: 57}, {text: "Gå ut", nextState: 40}]
    },
    {
      page: 59,
      img: kinder,
      text: "Det kommer en galen tjej och drar dig i kinderna! Aj aj.",
      choices: [{text: "Gå ut", nextState: 40}]
    },
    {
      page: 61,
      img: katrien,
      text: "Två trevliga tjejer vill ta selfies med dig. Är du någon form av kändis kanske? Du får i alla fall låna " +
            "ett par solglasögon en stund. Snällt!",
      choices: [{text: "Gå vidare", nextState: 62}, {text: "Stanna till vid Uplands", nextState: 56}]
    },
    {
      page: 62,
      img: viktoria,
      text: "Vid en fontän, som du är helt säker på inte finns i Uppsala (trots att du inte kommer ihåg någonting), sitter " +
            "det en helt galen tjej. Det vet du inte heller varför du kommer ihåg.",
      choices: [{text: "Ta en kaffe med henne", nextState: 19}, {text: "Spatsera vidare", nextState: 63}]
    },
    {
      page: 63,
      img: anaka,
      text: "Du träffar någon form av spådam, alternativt häxa. Trevligt tänker du!",
      choices: [{text: "Buga", nextState: 64}, {text: "Spring", nextState: 11}]
    },
    {
      page: 64,
      img: anaka,
      text: "Du träffar någon form av spådam, alternativt häxa. Trevligt tänker du!",
      choices: [{text: "Buga", nextState: 65}, {text: "Spring", nextState: 11}]
    },
    {
      page: 65,
      img: hojdhopp,
      text: "Häxan transporterar dig på sin flak-kvast till flogsta och samtidigt så " +
            "förvandlar hon dig till ett friidrottsproffs",
      choices: [{text: "Kolla runt", nextState: 41}]
    },
    // Special states
    {
      page: 1337,
      end: true,
      text: "",
      choices: []
    },
    {
      page: 1338,
      bag: true,
      img: rygga,
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
      newState.text = "I ryggsäcken har du följande saker: ";
      if(this.inventory.size != 0) {
        var itr = 1;
        var items = "";
        for (let item of this.inventory) {
          var itemText = ", " + item;
          if(this.inventory.size == itr) {
            itemText = item;
          } else if(itr == 1) {
            itemText = " och " + item;
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