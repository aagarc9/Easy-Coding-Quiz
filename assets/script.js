let answerBtn = document.getElementsByClassName('btn');
let questionInfo = document.getElementById('question');
let nextBtn = document.getElementById('next-btn');


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

    let usersAnswer = "";

    // Create a for loop to generate the next question after the answer button is selected
    // answerBtn.addEventListener('click', function(){
        if (usersAnswer === currentQuestion.answer) {
            score++;
            console.log("It is correct")
        } else {
            console.log("Wrong")
        }  
    
    // create an answer btn??

    // // for to grab the next questions
    // for (let i = 0; i < availableQuestion.length; i++) {
    //     console.log(availableQuestion[i].question)   
    //     }

};


function showResults (){

}


startGame()
