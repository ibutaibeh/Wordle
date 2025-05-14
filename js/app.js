//Constent
const wordsArray=["fanes","nuevo","yirds","envoy","foggy","herms","shand","yclad","maray","sooks"];
const keyboardIcons = document.querySelectorAll('.keyboradLetter');
const gameNameMessage= document.querySelector('.gameName');
const gameAlertMessage= document.querySelector('.alertMessage');
const guessLetters= document.querySelectorAll('.wordChild');
const settingsIcon=document.querySelectorAll('.settingsIcon');


//Variables
let chosenWord;
let chosenWordLetters;
let playerWord=['','','','',''];




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

//function click:

const clickIcons=(element)=>{
        for (let i=0; i<guessLetters.length;i++){
            console.log(i)
            if(guessLetters[i].textContent===''){
                        guessLetters[i].textContent= element.target.textContent;
                        playerWord[i]=element.target.textContent;
                        console.log(playerWord);

                return;
            }
        }
}

//Function to delete the word




//Game Code
keyboardIcons.forEach(element => {
    element.addEventListener('click',(event)=>{
  clickIcons(event);
    })
});



