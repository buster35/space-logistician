const firstWord = require("./space-data/first-word");
const secondWord = require("./space-data/second-word");
const thirdWord = require("./space-data/third-word");

const randomFirstWord = (arr) => {
  let r = Math.floor(Math.random() * arr.length);
  return arr[r];
};

const randomSecondWord = (arr) => {
  let r = Math.floor(Math.random() * arr.length);
  return arr[r];
};

const randomThirdWord = (arr) => {
  let r = Math.floor(Math.random() * arr.length);
  return arr[r];
};

console.log(
  `Your spaceship is a ${randomFirstWord(firstWord)} ${randomSecondWord(
    secondWord
  )} ${randomThirdWord(thirdWord)}.`
);

/*
End result: a command line program that uses JS to output a random message consisting of three separate words

//spaceship names

//expansion ideas
  //same principle as spaceship names but for spaceship parts
  //fleet of ships (no repeats)
  //destinations

//classes for fleet structure
  */
