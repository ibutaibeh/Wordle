/*-------------------------------- Constants --------------------------------*/
import  {wordsArray}  from "./wordsArray.js";

/*-------------------------------- Variables ----------------------------------*/
let chosenWord;
let chosenWordLetters;
let playerWord=[];
let isItWord;
let winWord;
let guessWordLists=[];
let lives=5;

/*------------------------ Cached Element References ------------------------*/
const keyboardIcons = document.querySelectorAll('.keyboradLetter');
const gameNameMessage= document.querySelector('.gameName');
const gameAlertMessage= document.querySelector('.alertMessage');
const guessLetters= document.querySelectorAll('.wordChild');
const settingsIcon=document.querySelectorAll('.settingsIcon');
const deleteButton= document.querySelector('#settingsIcon2');
const startButton= document.querySelector('#settingsIcon4');
const enterButton= document.querySelector('#settingsIcon1')
const guessList=document.querySelectorAll('.guessList'); 

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

const startGame = ()=>{
    chooseWord();
    splitLetters();
    console.log('chosen word=',chosenWord,'- letters',chosenWordLetters)
}

const isWord=()=>{

   isItWord= wordsArray.includes(playerWord.join('').toLowerCase());
   console.log('is it a word?',isItWord);
   if(playerWord.join('').toLowerCase()==chosenWord && isItWord){
    winWord= true; 
    gameAlertMessage.textContent=`Congrats You Won and the word is ${chosenWord}`;
   }else if(!isItWord){
    gameAlertMessage.textContent=`this is not a word`
    deleteWord();
    }
    else if(!winWord && isItWord){

        if(guessWordLists.length<5){
        guessWordLists.push(playerWord.join(''));
        lives=lives-1;
        console.log('lives remain=',lives)
        }   
        gameAlertMessage.textContent=`Wrong Word | remaining Guesses ${lives}`
        let lettersCondition=[];
     for(let i=0;i<chosenWord.length;i++){
            if(chosenWordLetters[i]==playerWord[i].toLowerCase()){
                lettersCondition[i]=true;
                document.getElementById(playerWord[i]).style.backgroundColor= 'lightgreen';
                document.getElementById(playerWord[i]).style.color='white';

            }else if(chosenWordLetters[i]!==playerWord[i].toLowerCase()){
                if(chosenWordLetters.includes(playerWord[i].toLowerCase())){

                    document.getElementById(playerWord[i]).style.backgroundColor='yellow'
                    console.log('iam yellow')

                    }
                    else{
                    lettersCondition[i]=false;
                    document.getElementById(playerWord[i]).style.backgroundColor='red'
                    }
              
                
            }

   
     }
     console.log(chosenWordLetters,playerWord)
     console.log('letter condition',lettersCondition);
     console.log('GS words = ',guessWordLists)

   }
 
}

/*----------------------------- Event Listeners -----------------------------*/


//event to type a letter
keyboardIcons.forEach(element => {
    element.addEventListener('click',clickIcons)
 });

//event to delete a letter
guessLetters.forEach(element=>{
    element.addEventListener('click',deleteLetter)
});

//event to use the del button which will delete the whole word [del]
deleteButton.addEventListener('click',deleteWord)

//event to start the game by [start]
startButton.addEventListener('click',startGame);

//event to check the word [Enter]
enterButton.addEventListener('click',isWord)


