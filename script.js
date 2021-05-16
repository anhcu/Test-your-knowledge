const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreText = document.getElementById('score')
let shuffledQuestions, currentQuestionIndex

var score = 0;
var questionCounter = 0;


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

//next button 
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  scoreText.innerHTML = 'Score: ' + score
}

//answer box
function showQuestion(question) {
if (questionCounter ==8){
  endGame()
} else {
  
  nextQuestion(question)
  
}

}

// endGame() {
//   // hide buttons

//   // display fields to enter name for high score


//   // show button to show high score

//   //showHighScoreButton

// }

// showHighScore(){ 
// //
// }

function nextQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    console.log(answer.text + "=" + button.dataset.correct)

    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

//hiding next button
function resetState() {
  // clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {

  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  calculateScore(document.body, correct)
  button => {
    calculateScore(button, button.dataset.correct)
  }
  // if (shuffledQuestions.length > currntQueestionIndex + 1) {
  //   nextButton.classList.remove('hide')
  // } else {
  //   startButton.innerText = 'Restart'
  //   startButton.classList.remove('hide')
  // }
  currentQuestionIndex++
  setNextQuestion()
}



function calculateScore(element, correct) {
  questionCounter++
  console.log(correct)
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    score++
  } else {
    element.classList.add('wrong')
    if(score > 0){
      score--
    }
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// //question
 const questions = [
  {
    question: 'What does HTML stand for??',
    answers: [
      { text: 'Hypertext Markup Language', correct: true },
      { text: 'Hide till Milley Leave', correct: false },
      { text: 'Hyper text makeup language', correct: false },
      { text: 'I dont know', correct: false }
    ]
  },
  {
    question: 'What is DOM ',
    answers: [
      { text: 'Document Object Model ', correct: true },
      { text: 'Document Over Model', correct: false },
      { text: 'Document OM', correct: false },
      { text: 'Demand over model ', correct: false }
    ]
  },
  {
    question: 'I am going to pass this class?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Next year', correct: false },
      { text: 'Let me ask my mom', correct: false }
    ]
  },
  {
    question: 'What does || mean?',
    answers: [
      { text: 'And', correct: false },
      { text: 'Or', correct: true },
      { text: 'Greater than', correct: false },
      { text: 'Ask for help', correct: false }
    ]
  },
  {
    question: 'What is a boolean?',
    answers: [
      { text: 'Honey BOO BOO', correct: false },
      { text: 'Rreturns either of two values i.e. true or false', correct: true },
      { text: '2+2', correct: false },
      { text: 'equal to', correct: false }
    ]
  },
  {
    question: 'What does JS stand for?',
    answers: [
      { text: 'Jet ski', correct: false },
      { text: 'Javascript', correct: true },
      { text: 'Jack Stand', correct: false },
      { text: 'Jim Stand', correct: false }
    ]
  },
  {
    question: 'What is API?',
    answers: [
      { text: 'Apple Product Interface', correct: false },
      { text: 'Application Programming Interface', correct: true },
      { text: 'Ape Plante Interface', correct: false },
      { text: 'Ate Pete Ice-cream', correct: false }
    ]
  },
  {
    question: 'What does this && mean',
    answers: [
      { text: 'Or', correct: false },
      { text: 'And', correct: true },
      { text: 'Maybe', correct: false },
      { text: 'Yes', correct: true }
    ]
  } 

]

//set timer
document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector('#time-left')
    const startButton = document.querySelector ('#start-btn') 
    let timeLeft = 30;

    function countDown() {
        setInterval(function() {
            if(timeLeft <= 0) {
                clearInterval(timeLeft = 0)
                // // alert('Quiz Over!!!!!');
                      
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1            
        },  1000)
    }
    
    startButton.addEventListener('click', countDown)
})

// Refresh
function myFunction() {
  document.getElementById("myForm").reset();
}


