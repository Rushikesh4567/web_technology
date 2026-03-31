const questions = [
    "Tell me about yourself",
    "What is JavaScript?",
    "What are your strengths?",
    "Why should we hire you?"
];

let currentIndex = 0;
let time = 20;
let timer;

const questionBox = document.getElementById("questionBox");
const answerInput = document.getElementById("answerInput");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const timerDisplay = document.getElementById("timer");
const feedback = document.getElementById("feedback");

startBtn.addEventListener("click", function () {
    currentIndex = 0;
    showQuestion();
});

nextBtn.addEventListener("click", function () {
    clearInterval(timer);
    giveFeedback();

    currentIndex++;

    if (currentIndex < questions.length) {
        setTimeout(showQuestion, 1000);
    } else {
        questionBox.innerText = "Interview Finished!";
        answerInput.style.display = "none";
    }
});

function showQuestion() {
    questionBox.innerText = questions[currentIndex];
    answerInput.value = "";
    feedback.innerText = "";
    startTimer();
}

function startTimer() {
    time = 20; 
    timerDisplay.innerText = "Time: " + time + "s";

    clearInterval(timer);

    timer = setInterval(function () {
        time--;
        timerDisplay.innerText = "Time: " + time + "s";

        if (time === 0) {
            clearInterval(timer);
            giveFeedback();
        }
    }, 1000);
}

function giveFeedback() {
    let answer = answerInput.value.trim();

    if (answer.length < 5) {
        feedback.innerText = "Answer is too short!";
        feedback.style.color = "red";
    } else {
        feedback.innerText = "Good answer!";
        feedback.style.color = "green";
    }
}