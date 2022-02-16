// config variables
var highScoresLink = document.querySelector(".high-scores");
var quizAnswers = document.querySelector(".quiz-answers");
var quizSummary = document.querySelector(".quiz-summary");
var quizTitle = document.querySelector(".quiz-title");
var result = document.querySelector(".results");
var startBtn = document.getElementById("start-btn");
var timerDisplay = document.getElementById("timer");
var questionA = document.getElementById("questionA");
var questionB = document.getElementById("questionB");
var questionC = document.getElementById("questionC");
var questionD = document.getElementById("questionD");

// config numerials
var questionIndex = 0;
var isCorrect = 0;
var timer = 75;
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
}
];

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
            timerDisplay.textContent = timer;
            alert("GAME OVER");
            return;
        }

        // determine penalty
        if (pen !== 0) {
            timer = timer - pen;
            if (timer <= 0) {
                alert("GAME OVER");
                clearInterval(countDown);
                timer = 0;
                timerDisplay.textContent = timer;
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