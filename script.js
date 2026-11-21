// Questions and answers for the Spider-Man trivia quiz.
const questions = [
    { question: "What is Spider-Man's real name?", choices: ["Peter Parker", "Norman Osborn", "Otto Octavius"], answer: "Peter Parker" },
    { question: "Which villain uses a Goblin Glider?", choices: ["Doctor Octopus", "Green Goblin", "Spider-Man"], answer: "Green Goblin" },
    { question: "How many mechanical arms does Doctor Octopus have?", choices: ["Two", "Four", "Six"], answer: "Four" }
];

const progress = document.querySelector("#quiz-progress");
const questionText = document.querySelector("#quiz-question");
const answerSelect = document.querySelector("#quiz-answer");
const checkButton = document.querySelector("#quiz-check");
const feedback = document.querySelector("#quiz-feedback");
const scoreText = document.querySelector("#quiz-score");
const restartButton = document.querySelector("#quiz-restart");
let currentQuestion = 0;
let score = 0;

// Show the current question and fill the answer menu from its choices.
function showQuestion() {
    const item = questions[currentQuestion];
    progress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    questionText.textContent = item.question;
    answerSelect.replaceChildren();
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select an answer";
    answerSelect.appendChild(placeholder);
    for (const choice of item.choices) {
        const option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        answerSelect.appendChild(option);
    }
    feedback.textContent = "";
    scoreText.textContent = `Score: ${score}`;
    checkButton.textContent = "Check Answer";
}

// Check the selected answer, update the score, and move to the next question.
function checkAnswer() {
    if (answerSelect.value === "") {
        feedback.textContent = "Please choose an answer first.";
        return;
    }
    if (answerSelect.value === questions[currentQuestion].answer) {
        score += 1;
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = `Not quite. The answer is ${questions[currentQuestion].answer}.`;
    }
    currentQuestion += 1;
    scoreText.textContent = `Score: ${score} out of ${questions.length}`;
    answerSelect.disabled = true;
    checkButton.disabled = true;
    if (currentQuestion === questions.length) {
        progress.textContent = "Quiz finished!";
        questionText.textContent = "You completed all three questions.";
        restartButton.hidden = false;
    } else {
        const nextButton = document.createElement("button");
        nextButton.type = "button";
        nextButton.textContent = "Next Question";
        nextButton.id = "quiz-next";
        checkButton.insertAdjacentElement("afterend", nextButton);
        nextButton.addEventListener("click", () => {
            nextButton.remove();
            answerSelect.disabled = false;
            checkButton.disabled = false;
            showQuestion();
            answerSelect.focus();
        });
    }
}

// Reset the quiz so the visitor can try again.
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answerSelect.disabled = false;
    checkButton.disabled = false;
    restartButton.hidden = true;
    showQuestion();
    answerSelect.focus();
}

checkButton.addEventListener("click", checkAnswer);
restartButton.addEventListener("click", restartQuiz);
showQuestion();
