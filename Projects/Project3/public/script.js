let questions = [
    {
        q: "Tell me about yourself",
        keywords: ["student", "developer", "learning", "skills"]
    },
    {
        q: "What is JavaScript?",
        keywords: ["language", "programming", "web", "browser"]
    },
    {
        q: "What are your strengths?",
        keywords: ["hardworking", "quick learner", "team", "problem"]
    },
    {
        q: "Why should we hire you?",
        keywords: ["skills", "dedicated", "learn", "contribute"]
    }
];

let currentIndex = 0;
let time = 10;
let timer;

let score = 0;
let totalQuestions = questions.length;
let isAnswered = false;

// Elements
const questionBox = document.getElementById("questionBox");
const answerInput = document.getElementById("answerInput");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const timerDisplay = document.getElementById("timer");
const feedback = document.getElementById("feedback");
const resultBox = document.getElementById("resultBox");

// Start
startBtn.addEventListener("click", function () {
    currentIndex = 0;
    score = 0;
    resultBox.innerText = "";
    answerInput.style.display = "block";
    showQuestion();
});

// Next
nextBtn.addEventListener("click", async function () {
    clearInterval(timer);

    await sendAnswer();
    giveFeedback();

    currentIndex++;

    if (currentIndex < questions.length) {
        setTimeout(showQuestion, 1000);
    } else {
        showResult();
    }
});

// Show Question
function showQuestion() {
    isAnswered = false;

    questionBox.innerText = questions[currentIndex].q;
    answerInput.value = "";
    feedback.innerText = "";
    startTimer();
}

// Timer
function startTimer() {
    time = 10;
    timerDisplay.innerText = "Time: " + time + "s";

    clearInterval(timer);

    timer = setInterval(async () => {
        time--;
        timerDisplay.innerText = "Time: " + time + "s";

        if (time === 0) {
            clearInterval(timer);
            await sendAnswer();
            giveFeedback();
        }
    }, 1000);
}

// Send Answer
async function sendAnswer() {
    if (isAnswered) return;  

    let answer = answerInput.value.trim();
    if (!answer) return;

    isAnswered = true;  

    await fetch("/answers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ answer })
    });
}

// Feedback + Score
function giveFeedback() {
    let userAnswer = answerInput.value.toLowerCase();
    let keywords = questions[currentIndex].keywords;

    let matchCount = 0;

    keywords.forEach(word => {
        if (userAnswer.includes(word)) {
            matchCount++;
        }
    });

    if (matchCount === 0) {
        feedback.innerText = "Try to include relevant keywords!";
        feedback.style.color = "red";
    } else if (matchCount <= 2) {
        feedback.innerText = "Good answer, but can be improved!";
        feedback.style.color = "orange";
        score += 1;
    } else {
        feedback.innerText = "Excellent answer!";
        feedback.style.color = "green";
        score += 2;
    }
}

// Show Result
function showResult() {
    questionBox.innerText = "Interview Finished!";
    answerInput.style.display = "none";

    let resultText = `Your Score: ${score} / ${totalQuestions * 2}`;

    if (score < totalQuestions) {
        resultText += "\nNeeds Improvement 😐";
    } else if (score < totalQuestions * 1.5) {
        resultText += "\nGood Job 👍";
    } else {
        resultText += "\nExcellent 🎉";
    }

    resultBox.innerText = resultText;
}