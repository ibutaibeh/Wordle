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
let hintLetters=[];
let backgroundMusic= new Audio("./assets/audio/BGM/BGM soundtrack.mp3")
let bgmMusic=false;
/*------------------------ Cached Element References ------------------------*/
const keyboardIcons = document.querySelectorAll('.keyboradLetter');
const gameAlertMessage= document.querySelector('.alertMessage');
const guessLetters= document.querySelectorAll('.wordChild');
const guessKeyBoxes=document.querySelectorAll('.guessKey');
const deleteButton= document.querySelector('#settingsIcon2');
const enterButton= document.querySelector('#settingsIcon1')
const guessList=document.querySelectorAll('.guess'); 
const resetButton=document.querySelector('#settingsIcon3')
const introScreen= document.querySelector('.intro-message');
const hintWordLetter= document.querySelectorAll('.hintButton');
const bgmMusicButton= document.querySelector('.bgm');
/*-------------------------------- Functions --------------------------------*/
// Function to choose a random word from words array
const chooseWord = ()=>{
   chosenWord=wordsArray[Math.floor(Math.random()*wordsArray.length)];
return chosenWord;
}

//Function to split the chosen word to array of 5 
const splitLetters = ()=>{
chosenWordLetters=chosenWord.split("");
hintLetters=chosenWord;
hintLetters=hintLetters.toUpperCase().split("");
for(let i=0;i<chosenWordLetters.length;i++){
    hintWordLetter[i].textContent=hintLetters[i];
    hintWordLetter[i].style.color='peachpuff'
}
 return chosenWordLetters;
}

//function click to choose a letter:
const clickIcons=(element)=>{
    for (let i=0; i<guessLetters.length;i++){
            if(guessLetters[i].textContent===''){
                        guessLetters[i].textContent= element.target.textContent;
                        playerWord[i]=element.target.textContent;
                                   
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
//Fuction to start the game
const startGame = ()=>{
    chooseWord();
    splitLetters();
    winWord=false;
    gameAlertMessage.textContent=`Choose a word | remaining Guesses ${lives}`
    
}
// function game logic
const isWord=()=>{

   isItWord= wordsArray.includes(playerWord.join('').toLowerCase());
   
   if(playerWord.join('').toLowerCase()==chosenWord && isItWord){
    winWord= true; 
    gameAlertMessage.textContent=`Congrats You Won`;
    guessLetters.forEach(element=>{
    element.style.backgroundColor='green';
    })
   
   }else if(!isItWord){
    gameAlertMessage.textContent=`This is not a word`
    deleteWord();
    }
    else if(!winWord && isItWord){
        if(guessWordLists.length<5){
        guessWordLists.push(playerWord.join(''));
        lives=lives-1;
     
        if(lives==0){
            guessLetters.forEach(element=>{
                element.style.backgroundColor='red';
    })
        }
          
for (let m = 0; m < guessList.length; m++) {
    const guessBoxes = guessList[m].querySelectorAll('button');
    
    const isEmpty = Array.from(guessBoxes).every(element => element.textContent === "");
    if (isEmpty) {
        for (let x = 0; x < guessBoxes.length; x++) {
            guessBoxes[x].textContent = playerWord[x];
        let lettersCondition=[];
            if(chosenWordLetters[x]==playerWord[x].toLowerCase()){
                lettersCondition[x]=true;
                guessBoxes[x].style.backgroundColor='lightgreen';
            }else if(chosenWordLetters[x]!==playerWord[x].toLowerCase()){
                if(chosenWordLetters.includes(playerWord[x].toLowerCase())){
                    guessBoxes[x].style.backgroundColor='yellow'
                    } else{
                    lettersCondition[x]=false;
                    guessBoxes[x].style.backgroundColor='red'
                    }
            }
            }
         break;
        }
}
 deleteWord();
}   
     gameAlertMessage.textContent=`Wrong Word | remaining Guesses ${lives}`
    }
 }

//Function reset button
const resetGame=()=>{
    lives=5;
    deleteWord();
    
    for (let y = 0; y < guessKeyBoxes.length; y++) {
    guessKeyBoxes[y].style.backgroundColor='peachpuff'
    guessKeyBoxes[y].textContent=''
    }
    for (let i=0; i<5;i++){
        guessWordLists.pop();
    }
        guessLetters.forEach(element=>{
    element.style.backgroundColor='peachpuff';
    })
    startGame()
    
}
/*----------------------------- Event Listeners -----------------------------*/

//event to reset the game by [reset]
resetButton.addEventListener('click',resetGame);

//event to use the del button which will delete the whole word [del]
deleteButton.addEventListener('click',deleteWord)

//event to check the word [Enter]
enterButton.addEventListener('click',isWord)

//event to type a letter
keyboardIcons.forEach(element => {
    element.addEventListener('click',clickIcons)
 });

//event to delete a letter
guessLetters.forEach(element=>{
    element.addEventListener('click',deleteLetter)
});

//event starting screen 
introScreen.addEventListener('click',()=>{
    document.querySelector('.intro').style.zIndex='-1'
    document.querySelector('.intro-message').textContent='';
document.querySelector('.howToPlay').style.display="none"
    

    startGame();
})

hintWordLetter.forEach(element=>{
    element.addEventListener('click',()=>{
        element.style.color='black'
    })
})

//BGM music On/Off

bgmMusicButton.addEventListener('click',()=>{
    if (!bgmMusic){
backgroundMusic.loop=true;
backgroundMusic.play();
bgmMusicButton.style.backgroundColor='aquamarine'
bgmMusicButton.textContent='Music ON'
        bgmMusic=true;
    }else{
bgmMusicButton.style.backgroundColor='grey'
bgmMusicButton.textContent='Music OFF'
bgmMusic=false;
backgroundMusic.pause();
    }
})

