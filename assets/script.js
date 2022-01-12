let answerBtn = document.getElementById('answer-btn');
let questionInfo = document.getElementById('question')


let myquestions = [
{
    question: "_______ is the process of finding errors and fixing them within a program.",
    answer: "Debugging",
    options: ["Compiling", "Executing","Debugging","Scanning"]
},
{
    question: "What does HTML stand for?",
    answer: "What does HTML stand for?",
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
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

// 
function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestion = myquestions;
    console.log(availableQuestion);
    getNewQuestion();
};

function getNewQuestion() {

    questionCounter++;
    let index = Math.floor(Math.random() * myquestions.length);
    currentQuestion = myquestions[index];
    console.log (currentQuestion)
    questionInfo.innerText = currentQuestion.question;


    // create a for loop to grab myquestions options??
    myquestions.forEach(options => {
        console.log(options)});
    
}
startGame()
