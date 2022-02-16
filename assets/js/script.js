// config variables
var timer = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var highScoresLink = document.querySelector(".high-scores");
var quizAnswers = document.querySelector(".quiz-answers");
var quizSummary = document.querySelector(".quiz-summary");
var quizTitle = document.querySelector(".quiz-title");


// user starts the quiz
startBtn.addEventListener("click", function() {
    quizAnswers.style.display = "block";
    quizSummary.style.display = "none";
    this.style.display = "none";

    // display first question
    quizTitle.textContent = "First Question";
})