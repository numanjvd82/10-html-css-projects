const text = document.querySelector('#text');
const totalChars = document.querySelector('#total-chars');
const remainingChars = document.querySelector('#remaining');

const limit = 100;

// Resetting Total and Remaining Charecters
totalChars.textContent = 0;
remainingChars.textContent = limit;

text.addEventListener('input', (e) => {
  const total = e.target.value.length;
  const remaining = limit - total;
  totalChars.textContent = total;
  remainingChars.textContent = remaining;

  // Restricting the input to 100 characters
  if (total >= limit) {
    text.value = text.value.slice(0, limit - 1);
  }
});
