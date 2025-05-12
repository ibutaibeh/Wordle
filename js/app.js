// import wordsArray from '../js/wordsArray';
// const wordsArray = require('../js/wordsArray');
const wordsArray=["fanes","nuevo","yirds","envoy","foggy","herms","shand","yclad","maray","sooks"];
let chosenWord;
let chosenWordLetters;
//Wordle the game
// win condition is to guess the word within 5 attempts

//Game Flow:
//          1- random word will be selected and stored ["abcde"]
//          2- user will be able to click on the keyboard icons to guess the word
//          3- the word guessed will be displayed on the 5 boxes
//          4- the user will click Enter icon to check 
//          5- first check if the word guessed is actually a word 
//          6- second check if the word guessed is the right guess
//          7- if 5 is true and 6 is false, check each letter of the guessd word with actual word
//          8- check the order of those letters
//          9- for each correct letter "order and letter" would turn green on the guessed list
//-------------------------------------------------------------------------------------------------------- 
const keyboardIcons = document.querySelectorAll('.keyboradLetter');

keyboardIcons.forEach(element => {
    element.addEventListener('click',()=>{
    console.log('clicked');
})
});



//Functions:
// Function to choose a random word from words array
const chooseWord = ()=>{
   chosenWord=wordsArray[Math.floor(Math.random()*wordsArray.length)];
return chosenWord;
}

//Function to split the chosen word to array of 5 
const splitLetters = ()=>{
chosenWordLetters=chosenWord.split("");
 return chosenWordLetters;
}
//


chooseWord();
splitLetters();
console.log(chosenWord);
console.log(chosenWordLetters);
console.log(keyboardIcons);
