let questionInfo = document.getElementById('question')
let choiceA = document.getElementById('A')
let choiceB = document.getElementById('B')
let choiceC = document.getElementById('C')
let choiceD = document.getElementById('D')
let progress = document.getElementById('progress')
let clockTimer = document.getElementById ('timer')
let scoreCounter = document.getElementById('score')

let score = 0;
let time = 60;

let questions = [
    {
        question: "_______ is the process of finding errors and fixing them within a program.",
        answer: "Debugging",
        choiceA: "Compiling",
        choiceB:"Executing",
        choiceC:"Debugging",
        choiceD:"Scanning",
    },
    {
        question: "What does HTML stand for?",
        answer: "Hyperlinks and Text Markup Language",
        choiceA: "Hyperlinks and Text Markup Language",
        choiceB:"Home Tool Markup Language",
        choiceC:"Hyper Text Markup Language",
        choiceD:"Hyper Text Markdown Language",
    },
    {
        question: "What is the correct sequence of HTML tags for starting a webpage?",
        answer: "HTML, Head, Title",
        choiceA:"Title, Head, HTML" ,
        choiceB:"HTML, Head, Title",
        choiceC:"Head, Title, HTML",
        choiceD:"Body, HTML, Title",
    },
    {
        question: "Which of the following defines a measurement in screen pixels?",
        answer: "px",
        choiceA:"px",
        choiceB:"vh",
        choiceC:"vw",
        choiceD:"vmin",
    },
    {
        question: " What is the correct HTML tag for inserting a line break?",
        answer: "Br",
        choiceA:"Break",
        choiceB:"Strong",
        choiceC:"Lb",
        choiceD:"Br",
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
    getNewQuestion()
    progressBar()
}

// create a function to display in HTML
function getNewQuestion () {
    let q =questions[questionIndex];
    questionInfo.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

    // console.log(q.answer)
}
// test code to see if next question pops up
getNewQuestion()
questionTimer()


// create a function the check answer
function checkAnswer() {
    let q =questions[questionIndex];
    if(q.answer){
        score++;
        // answeringquestion();
        // questionTimer();
    }else {
        questionTimer();
        // answeringquestion();
    }
    if(questionIndex < lastQuestionIndex) {
        questionIndex++;
        getNewQuestion()
    } else {
        // endQuiz()
    }
}

function questionTimer(correct) {
    // check if the user guessed incorrectly
    let q =questions[questionIndex]; 
    if(q.answer !== correct){
        // time has to be subtracted 
        time -= 15;
        clockTimer.innerText = time
        if(time<0) {
            time =0;
        }
    }
    // questionCounter++;
    // if(questionCounter === availableQuestion.length) {
    //     endQuiz() // or could be showResults()
    // } else {
    //     getNewQuestion(); // okay just continue 
    // }
}
   console.log(time)


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

function progressBar() {
    for(let i = 0; i <= lastQuestionIndex; i++){
        progress.innerHTML += "<div class='prog' id="+ i +"></div>";
    } 
}
function answeringquestion() {
    document.getElementById(questionIndex).style.backgroundColor ="purple"
}

function endQuiz() {
    scoreCounter.style.display = "block";
    let scorePercent = Math.round(100 * score / questions.length);
    let display = (scorePercent >= 80) ? "80%":
    (scorePercent >= 60) ? "60%":
    (scorePercent >= 40) ? "40%":
    (scorePercent >= 20) ? "20%":
    (scorePercent >= 0) ? "0%":

    scoreCounter.innerHTML = display;
}

startGame()
console.log(display)