let questionInfo = document.getElementById('question')
let choice1 = document.getElementById('1')
let choice2 = document.getElementById('2')
let choice3 = document.getElementById('3')
let choice4 = document.getElementById('4')
let progress = document.getElementById('progress')
let clockTimer = document.getElementById ('timer')
let scoreCounter = document.getElementById('score')
let choicesEl = document.getElementsByClassName('.choice')

let score = 0;
let time = 60;

let questions = [
    {
        question: "_______ is the process of finding errors and fixing them within a program.",
        answer: "3",
        choice1: "Compiling",
        choice2:"Executing",
        choice3:"Debugging",
        choice4:"Scanning",
    },
    {
        question: "What does HTML stand for?",
        answer: "3",
        choice1: "Hyperlinks and Text Markup Language",
        choice2:"Home Tool Markup Language",
        choice3:"Hyper Text Markup Language",
        choice4:"Hyper Text Markdown Language",
    },
    {
        question: "What is the correct sequence of HTML tags for starting a webpage?",
        answer: "2",
        choice1:"Title, Head, HTML" ,
        choice2:"HTML, Head, Title",
        choice3:"Head, Title, HTML",
        choice4:"Body, HTML, Title",
    },
    {
        question: "Which of the following defines a measurement in screen pixels?",
        answer: "1",
        choice1:"px",
        choice2:"vh",
        choice3:"vw",
        choice4:"vmin",
    },
    {
        question: " What is the correct HTML tag for inserting a line break?",
        answer: "4",
        choice1:"Break",
        choice2:"Strong",
        choice3:"Lb",
        choice4:"Br",
    },
];


// create an index for my question array. To grab the index. (took forever to figure this out)
let lastQuestionIndex = questions.length- 1;
// index for array
let questionIndex = 0;

// ------------------------------------------------------------------------------------
// start Game
function startGame () {
    // timer
    // getNewQuestion()
    // questionTimer()
}

// create a function to display in HTML
function getNewQuestion () {
    let q =questions[questionIndex];
    questionInfo.innerHTML = q.question;
    choice1.innerHTML = q.choice1;
    choice2.innerHTML = q.choice2;
    choice3.innerHTML = q.choice3;
    choice4.innerHTML = q.choice4;
}
// test code to see if next question pops up
getNewQuestion()
questionTimer()


// create a function the check answer
function checkAnswer(correct) {
    let q =questions[questionIndex];
    if(q.answer === correct){
        score++;
        console.log(score);
    }else {
    }
    if(questionIndex < lastQuestionIndex) {
        questionIndex++;
        getNewQuestion()
    } else {
        clearInterval();
       endQuiz()
    }
}
function questionTimer() {
    // Sets interval in variable
  var timerInterval = setInterval(function() {
    time--;
// check if the user guessed incorrectly
    let q =questions[questionIndex]; 
    if(q.answer !== true){
        // time has to be subtracted 
        time -= 15;
        clockTimer.innerText = time;
        if (time === 0) {
            clearInterval(timerInterval);
          }
        }
    }, 1000);

}



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
    scoreCounter.style.display = "block";
    let scorePercent = Math.round(100 * score / questions.length);
    let display = scorePercent
  

    scoreCounter.innerHTML = display;
}

startGame()
