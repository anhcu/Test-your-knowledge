const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreText = document.getElementById('score')
let shuffledQuestions, currentQuestionIndex

var score = 0;


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
  console.log('button is click')

  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  console.log('score = ' + correct )
  // if (correct == true) {
  //   console.log('answer is correct')
  //   score++;
  // }
  console.log('score = ' + score)
  setStatusClass(document.body, correct)
  button => {
    setStatusClass(button, button.dataset.correct)
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}


function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    score++
  }
  // } else {
  //   element.classList.add('wrong')
  //   if(score > 0){
  //     score--
  //   }
  // }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


// //question

 const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'What is 5 + 5?',
    answers: [
      { text: '10', correct: true },
      { text: '2', correct: false },
      { text: '3', correct: false },
      { text: '11', correct: false }
    ]
  },
  {
    question: 'I am going to pass this class?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: '8', correct: true }
    ]
  } 
]








//set timer
document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector('#time-left')
    const startButton = document.querySelector ('#start-btn') 
    let timeLeft = 10;

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


