// config variables
var highScoresLink = document.querySelector(".high-scores");
var quizAnswers = document.querySelector(".quiz-answers");
var quizSummary = document.querySelector(".quiz-summary");
var quizTitle = document.querySelector(".quiz-title");
var startBtn = document.getElementById("start-btn");
var timerDisplay = document.getElementById("timer");
var timer = 75;
var pen = 0;

// config questions
var questions = [{
    id: 0,
    q: "Question 1",
    a: [{ text: "Option 1", isCorrect: false },
        { text: "Option 2", isCorrect: false },
        { text: "Option 3", isCorrect: true },
        { text: "Option 4", isCorrect: false }
    ]
}];


// questions
var startQuestions = function() {

    // display timer
    timerDisplay.textContent = timer;
    var countDown = setInterval(function() {

        // if count is at 0
        if (timer <= 0) {
            clearInterval(countDown);
            timerDisplay.textContent = timer;
            alert("GAME OVER");
            return;
        }

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

}

// wrong answer
quizAnswers.addEventListener("click", function(event) {
    var questionClicked = event.target.getAttribute("data-number");
    if (questionClicked === "1") {
        pen = 10;
        countDown();
    }
});

// user starts the quiz
startBtn.addEventListener("click", function() {

    // hide summary and start button
    quizAnswers.style.display = "block";
    quizSummary.style.display = "none";
    this.style.display = "none";

    // display first question
    quizTitle.textContent = "First Question";
    startQuestions();
})