// config variables
var highScoresLink = document.querySelector(".high-scores");
var quizAnswers = document.querySelector(".quiz-answers");
var quizSummary = document.querySelector(".quiz-summary");
var quizTitle = document.querySelector(".quiz-title");
var result = document.querySelector(".results");
var allQuestions = document.querySelectorAll(".questions");
var startBtn = document.getElementById("start-btn");
var timerDisplay = document.getElementById("timer");
var questionA = document.getElementById("questionA");
var questionB = document.getElementById("questionB");
var questionC = document.getElementById("questionC");
var questionD = document.getElementById("questionD");

// config numerials
var questionIndex = 0;
var isCorrect = 0;
var timer = 5;
var pen = 0;

// config questions
var questions = [{
    q: "Inside which HTML element do you put JavaScript?",
    a: [{ text: "<script>", isCorrect: true },
        { text: "<code>", isCorrect: false },
        { text: "<header>", isCorrect: false },
        { text: "<style>", isCorrect: false }
    ]
},
{
    q: "Which is the right way to write a comment in JavaScript?",
    a: [{ text: "<!-- text -->", isCorrect: false },
        { text: "- text -", isCorrect: false },
        { text: "// text", isCorrect: true },
        { text: "...", isCorrect: false }
    ]
},
{
    q: "Which of the following operators is used to divide integers?",
    a: [{ text: "*", isCorrect: false },
        { text: "/", isCorrect: true },
        { text: "=", isCorrect: false },
        { text: "%", isCorrect: false }
    ]
},
{
    q: "What comparison operator is used to determine if the type AND value are equal to true?",
    a: [{ text: "=", isCorrect: false },
        { text: "=+", isCorrect: false },
        { text: "==", isCorrect: false },
        { text: "===", isCorrect: true }
    ]
},
{
    q: "What is the NaN property?",
    a: [{ text: "A statement that returns a number", isCorrect: false },
        { text: "A function", isCorrect: false },
        { text: "A value that represents Not-a-Number", isCorrect: true },
        { text: "A negative integer", isCorrect: false }
    ]
},
{
    q: "What does the DOM stand for?",
    a: [{ text: "Document Object Model", isCorrect: true },
        { text: "Determining Operator Moments", isCorrect: false },
        { text: "Document Order Module", isCorrect: false },
        { text: "Domain Object Menu", isCorrect: false }
    ]
},
{
    q: "What does a global scope variable mean?",
    a: [{ text: "A variable that can only be accessed by an admin", isCorrect: false },
        { text: "A variable that can be called anywhere on the script", isCorrect: true },
        { text: "A variable that can only be accessed within a function", isCorrect: false },
        { text: "A variable that returns undefined", isCorrect: false }
    ]
},
{
    q: "Which method is used to store data to the browser?",
    a: [{ text: "console.log()", isCorrect: false },
        { text: "alert()", isCorrect: false },
        { text: "JSON()", isCorrect: false },
        { text: "localStorage()", isCorrect: true }
    ]
},
{
    q: "Which of the following IS NOT a data type?",
    a: [{ text: "window", isCorrect: true },
        { text: "Null", isCorrect: false },
        { text: "Boolean", isCorrect: false },
        { text: "String", isCorrect: false }
    ]
},
{
    q: "Explain what are escape characters.",
    a: [{ text: "They are characters used in a password", isCorrect: false },
        { text: "They are characters used with a backslash so they can be displayed", isCorrect: true },
        { text: "Characters in strings used to split into two separate strings", isCorrect: false },
        { text: "A string that is strict to only using letters", isCorrect: false }
    ]
}];

var gameOver = function() {
    // show summary and start button
    quizAnswers.style.display = "none";
    quizSummary.style.display = "block";
    startBtn.style.display = "block";
    quizTitle.textContent = "Quiz Challenge";
    timer = 0;
    timerDisplay.textContent = timer;
    alert("GAME OVER");
}

// run questions
var runQuestions = function() {
    quizTitle.textContent = questions[questionIndex].q;
    questionA.textContent = "1. " + questions[questionIndex].a[0].text;
    questionB.textContent = "2. " + questions[questionIndex].a[1].text;
    questionC.textContent = "3. " + questions[questionIndex].a[2].text;
    questionD.textContent = "4. " + questions[questionIndex].a[3].text;

    // config true or false
    questionA.value = questions[questionIndex].a[0].isCorrect;
    questionB.value = questions[questionIndex].a[1].isCorrect;
    questionC.value = questions[questionIndex].a[2].isCorrect;
    questionD.value = questions[questionIndex].a[3].isCorrect;
}




// start questions
var startQuestions = function() {

    // display timer
    timerDisplay.textContent = timer;

    // start timer
    var countDown = setInterval(function() {

        // if count is at 0
        if (timer <= 0) {
            clearInterval(countDown);
            gameOver();
            return;
        }

        // determine penalty
        if (pen !== 0) {
            timer = timer - pen;
            if (timer <= 0) {
                clearInterval(countDown);
                gameOver();
                return;
            }
            timerDisplay.textContent = timer;
            pen = 0;
        } else {
            timer--;
            timerDisplay.textContent = timer;
        }

    }, 1000);

    // first question
    runQuestions();
}

// wrong answer
quizAnswers.addEventListener("click", function(event) {
    var questionClicked = event.target.getAttribute("value");

    // answer is wrong
    if (questionClicked === "false") {
        result.textContent = "WRONG!";
        pen = 10;
        questionIndex++;
        runQuestions();

    // answer is correct
    } else {
        result.textContent = "CORRECT!";
        questionIndex++;
        isCorrect++;
        runQuestions();
    }
});

// user starts the quiz
startBtn.addEventListener("click", function() {

    // hide summary and start button
    quizAnswers.style.display = "block";
    quizSummary.style.display = "none";
    this.style.display = "none";

    // start timer and first questions
    startQuestions();
})