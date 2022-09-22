const score = document.querySelector('#score');
const numOne = document.querySelector('#numOne');
const numTwo = document.querySelector('#numTwo');
const form = document.querySelector('.form');
const answer = document.querySelector('#answer-input');

const getRandomNumbers = (min = 0, max = 10) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

// Reset the score to 0
score.textContent = 0;

const randomNumOne = getRandomNumbers();
const randomNumTwo = getRandomNumbers();

// Setting the random number in the question

numOne.textContent = randomNumOne;
numTwo.textContent = randomNumTwo;

// Get Input Value

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let text = Number(answer.value);

  if (text === 0) {
    alert('Please Enter a Number');
  }

  const getCorrectAnswer = randomNumOne * randomNumTwo;

  if (getCorrectAnswer === text) {
    score.textContent = Number(score.textContent) + 1;
  }

  if (!(getCorrectAnswer === text)) {
    score.textContent = Number(score.textContent) - 1;
    // Setting a condition for the score if it is lower than zero
    if (Number(score.textContent) < 0) {
      score.textContent = 0;
    }
  }

  answer.value = '';

  numOne.textContent = getRandomNumbers(0, 100);
  numTwo.textContent = getRandomNumbers(0, 100);
});
