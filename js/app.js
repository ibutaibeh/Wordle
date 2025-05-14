/*-------------------------------- Constants --------------------------------*/
import  {wordsArray}  from "./wordsArray.js";

/*---------------------------- Variables (state) ----------------------------*/
let chosenWord;
let chosenWordLetters;
let playerWord=[];


/*------------------------ Cached Element References ------------------------*/
const keyboardIcons = document.querySelectorAll('.keyboradLetter');
const gameNameMessage= document.querySelector('.gameName');
const gameAlertMessage= document.querySelector('.alertMessage');
const guessLetters= document.querySelectorAll('.wordChild');
const settingsIcon=document.querySelectorAll('.settingsIcon');
const deleteButton= document.querySelector('#settingsIcon2');

/*-------------------------------- Functions --------------------------------*/

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

//function click to choose a letter:
const clickIcons=(element)=>{
        for (let i=0; i<guessLetters.length;i++){
            if(guessLetters[i].textContent===''){
                        guessLetters[i].textContent= element.target.textContent;
                        playerWord[i]=element.target.textContent;
                                    console.log(playerWord)

                return;
            }
        }
}

//Function to delete one letter
const deleteLetter=(element)=>{
    element.target.textContent=''
    return;
}

//Fuction to delete the entire word

const deleteWord=()=>{
    guessLetters.forEach(element=>{
            element.textContent='';
            playerWord=[]
        })
}



/*----------------------------- Event Listeners -----------------------------*/

chooseWord();
splitLetters()
console.log(chosenWord,chosenWordLetters)
//event to type a letter
keyboardIcons.forEach(element => {
    element.addEventListener('click',clickIcons)
 });

//event to delete a letter
guessLetters.forEach(element=>{
    element.addEventListener('click',deleteLetter)
});

//event to use the del button which will delete the whole word
    deleteButton.addEventListener('click',deleteWord)

//



