var charactersArray = [];
 
var mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg" ,
    occupation:   "Entrepreneur",
};
 
var drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist",
};
 
var profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:  22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer",
};
 
var missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor",
};
 
var mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité",
};
 
var mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player",
};
 
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

// Weapons Collection
var weaponsArray = [];
 
const rope = {name: "rope", weight: 10};
const knife ={name: "knife",   weight: 8};
const candlestick = {name: "candlestick", weight: 2};
const dumbbell = {name: "dumbbell",  weight: 30};
const poison = {name: "poison", weight: 2};
const axe = {name: "axe", weight: 15};
const bat = {name: "bat", weight: 13};
const trophy = {name: "trophy",weight: 25};
const pistol = {name: "pistol", weight: 20};

weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

 
// Rooms' Collection

var roomsArray = [
  "Dinning Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
  ]
 

function randomSelector (someArray){
  return Math.floor(Math.random() * someArray.length);
 }

 var misteryEnvelope = [];
 function pickMistery(){
   const randomSuspect = charactersArray[randomSelector(charactersArray)];
   const randomWeapon = weaponsArray[randomSelector(weaponsArray)];
   const randomRoom = roomsArray[randomSelector(roomsArray)];
     misteryEnvelope.push(randomSuspect, randomWeapon, randomRoom)
  return misteryEnvelope;
 }
pickMistery();

function revealMistery(someMistery){
  return `${someMistery[0].first_name} ${someMistery[0].last_name} killed Mr.Boddy using the ${someMistery[1].name} in the ${someMistery[2]}!!!!`
};
revealMistery(misteryEnvelope);