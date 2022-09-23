const questionTitle = document.querySelector('#question-title');
const optionContainer = document.querySelector('.options');
const submitButton = document.querySelector('#btn');

// random function
const getRandomNumber = (min = 0, max = 2) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let questionIndex = getRandomNumber();
let userChoice = '';
let score = 0;

const questions = [
  {
    question: 'What is the capital of India?',
    options: ['Mumbai', 'Delhi', 'Kolkata', 'Chennai'],
    answer: 1,
  },
  {
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    answer: 2,
  },
  {
    question: 'What is the capital of Japan?',
    options: ['Tokyo', 'Kyoto', 'Osaka', 'Nagoya'],
    answer: 0,
  },
  {
    question: 'What is the capital of China?',
    options: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'],
    answer: 0,
  },
  {
    question: 'When was JavaScript launched?',
    options: ['1996', '1995', '1994', 'none of the above'],
    answer: 1,
  },
];

// Setting the question dom load
document.addEventListener('DOMContentLoaded', () => {
  questionTitle.textContent = questions[questionIndex].question;
});

// Finding the correct question from the questions array
// const correctQuestion = questions.find(
//   (question, index) => index === questionIndex
// );

// Setting the options
optionContainer.innerHTML = questions[questionIndex].options.map((option) => {
  return `<div class="option">
  <input value=${option} type="radio" name="option" id=${option} />
  <label for=${option}>${option}</label>
</div>`;
});

// Event Listeners
optionContainer.addEventListener('input', (e) => {
  userChoice = e.target.value;
  const findOptionIndex = questions[questionIndex].options.findIndex(
    (option) => option === userChoice
  );

  if (findOptionIndex === questions[questionIndex].answer) {
    score = score + 1;
    console.log('Score Increased');
  }

  if (!(findOptionIndex === questions[questionIndex].answer)) {
    console.log('Score Decreased');
    return;
  }

  console.log(findOptionIndex, questions[questionIndex].answer);
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (userChoice === '') {
    alert('Please choose a option');
    return;
  }

  userChoice = '';
  questionIndex++;

  if (questionIndex > questions.length - 1) {
    alert(`Your score is ${score}`);
    questionIndex = 0;
    score = 0;
  }

  questionTitle.textContent = questions[questionIndex].question;

  optionContainer.innerHTML = questions[questionIndex].options.map((option) => {
    return `<div class="option">
    <input value=${option} type="radio" name="option" id=${option} />
    <label for=${option}>${option}</label>
  </div>`;
  });
});
