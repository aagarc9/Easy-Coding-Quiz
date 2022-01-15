let answerBtn = document.getElementsByClassName('btn');
let questionInfo = document.getElementById('question');
let startButton = document.getElementById('')

// let time = availableQuestion.length: *100;


let myquestions = [
{
    question: "_______ is the process of finding errors and fixing them within a program.",
    answer: "Debugging",
    options: ["Compiling", "Executing","Debugging","Scanning"]
},
{
    question: "What does HTML stand for?",
    answer: "Hyperlinks and Text Markup Language",
    options: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language","Hyper Text Markup Language","Hyper Text Markdown Language"]
},
{
    question: "What is the correct sequence of HTML tags for starting a webpage?",
    answer: "HTML, Head, Title",
    options: ["Title, Head, HTML", "HTML, Head, Title","Head, Title, HTML","Body, HTML, Title"]
},
{
    question: "Which of the following defines a measurement in screen pixels?",
    answer: "px",
    options: ["px", "vh","vw","vmin"]
},
{
    question: " What is the correct HTML tag for inserting a line break?",
    answer: "Br",
    options: ["Break", "Strong","Lb","Br"]
},
];

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

// start game
function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestion = [...myquestions];
    console.log(availableQuestion);
    getNewQuestion();
    
};


function getNewQuestion() {

    questionCounter++;
    // // let index = Math.floor(Math.random() * availableQuestion.length);
    // let index = 0
    for (let i = 0; i < availableQuestion.length; i++)
    currentQuestion = availableQuestion[i];
    console.log (currentQuestion)
    questionInfo.innerText = currentQuestion.question;


    for (let i = 0; i < answerBtn.length; i++) {
    answerBtn[i].innerHTML =currentQuestion.options[i]    
    }
    console.log(currentQuestion.answer)
    
   
};

// answerBtn.addEventListener('click', questionsClicks)



function questionsClicks() {
    // check if the user guessed incorrectly 
    if(currentQuestion.answer !== availableQuestion[currentQuestion].answer){
        // time has to be subtracted 
        time -= 15;
        if(time<0) {
            time =0;
        }
    }
    questionCounter++;
    if(questionCounter === availableQuestion.length) {
        endQuiz() // or could be showResults()
    } else {
        getNewQuestion(); // okay just continue 
    }
}
   
    let usersAnswer = ""

    // Create a for loop to generate the next question after the answer button is selected
    // answerBtn.addEventListener('click', function(){
        if (usersAnswer === currentQuestion.answer) {
            score++; 
        
        } 
        else {
        
        }  

        // return answerBtn.addEventListener('click', questionsClicks)
    // create an answer btn??

// session storage, cookies, cache, local storage 
    // also have objects (JSON- Javascript OBJECT NOTATION), empty arrays
    // databases - IndexedDB, MySQL, MongoDB... sql nosql databases


    // local storage 
function savedScores() {
    // you want an if statment, within which you can put these localStorage methods
    // local storage getItem method and setItem methods 
    var highestScores = JSON.parse(window.localStorage.getItem('highscores')) || [];

    // in order to save to local storage to setItem
    window.localStorage.setItem('highscores', JSON.stringify(highestScores))



}


function endQuiz() {

}

startGame()
