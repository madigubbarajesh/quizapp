const questions = [
    {
        question: "What is the capital of India?",
        answers: [
            { text: "Mumbai", correct: false},
            { text: "New Delhi", correct: true},
            { text: "Hyderabad", correct: false},
            { text: "Kolkata", correct: false},
        ]
    },
    {
        question: "What is the capital of Nepal?",
        answers: [
            { text: "Kathmandu", correct: true},
            { text: "Thimphu", correct: false},
            { text: "Dhaka", correct: false},
            { text: "Lhasa", correct: false},
        ]
    },
    {
        question: "What is the capital of Sri Lanka?",
        answers: [
            { text: "Colombo", correct: false},
            { text: "Kandy", correct: false},
            { text: "galle", correct: false},
            { text: "Sri Jayawardenepura Kott", correct: true},
        ]
    },
    {
        question: "What is the capital of Bangladesh?",
        answers: [
            { text: "Chittagong", correct: false},
            { text: "Dhaka", correct: true},
            { text: "Khulna", correct: false},
            { text: "Rajshahi", correct: false},
        ]
        
    }, 

    {
        question: "What is the capital of Malaysia?",
        answers: [
            { text: "Kuala Lumpur", correct: true},
            { text: "Penang", correct: false},
            { text: "Malacca", correct: false},
            { text: "Johor Bahru", correct: false},
        ]
        
    },
    
    {
        question: "What is the capital of Indonesia?",
        answers: [
            { text: "Bali", correct: false},
            { text: "Jakarta", correct: true},
            { text: "Surabaya", correct: false},
            { text: "Medan", correct: false},
        ]
        
    }, 

    {
        question: "What is the capital of Philippines?",
        answers: [
            { text: "Jeddah", correct: false},
            { text: "Riyadh", correct: true},
            { text: "Mecca", correct: false},
            { text: "Medina", correct: false},
        ]
        
    }, 

    {
        question: "What is the capital of UAE?",
        answers: [
            { text: "Dubai", correct: false},
            { text: "Sharjah", correct: false},
            { text: "Abu Dhabi", correct: true},
            { text: "Ajman", correct: false},
        ]
        
    }, 
    
    {
        question: "What is the capital of Iran?",
        answers: [
            { text: "Isfahan", correct: false},
            { text: "Tehran", correct: true},
            { text: "Shiraz", correct: false},
            { text: "Mashhad", correct: false},
        ]
        
    }, 

    {
        question: "What is the capital of Egypt?",
        answers: [
            { text: "Cairo", correct: true},
            { text: "Alexandria", correct: false},
            { text: "Giza", correct: false},
            { text: "Luxor", correct: false},
        ]
        
    } 
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();