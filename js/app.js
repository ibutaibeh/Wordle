//Constent
const wordsArray=["fanes","nuevo","yirds","envoy","foggy","herms","shand","yclad","maray","sooks"];
const keyboardIcons = document.querySelectorAll('.keyboradLetter');
const gameNameMessage= document.querySelector('.gameName');
const gameAlertMessage= document.querySelector('.alertMessage');
const guessLetters= document.querySelectorAll('.wordChild');
const settingsIcon=document.querySelector('.settingsIcon');

const settingsIcon1=document.querySelector('#settingsIcon1');
const settingsIcon2=document.querySelector('#settingsIcon2')
const settingsIcon3=document.querySelector('#settingsIcon3')
const settingsIcon4=document.querySelector('#settingsIcon4')
const settingsIcon5=document.querySelector('#settingsIcon5')


//Variables
let chosenWord;
let chosenWordLetters;




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

//Game Code
keyboardIcons.forEach(element => {
    element.addEventListener('click',()=>{
    console.log('clicked');
})
});
chooseWord();
splitLetters();
console.log(chosenWord);
console.log(chosenWordLetters);
console.log(keyboardIcons);
