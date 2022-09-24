const text = document.querySelector('#text');
const totalChars = document.querySelector('#total-chars');
const remainingChars = document.querySelector('#remaining');
const countSpaces = document.querySelector('#check');

const limit = 100;

// Resetting Total and Remaining Charecters
totalChars.textContent = 0;
remainingChars.textContent = limit;

text.addEventListener('input', (e) => {
  let total = e.target.value.length;
  let remaining = limit - total;

  // Checking if the user wants to count spaces
  if (!countSpaces.checked) {
    let newStr = e.target.value;
    let removeSpaces = newStr.replace(/ /g, '');
    total = removeSpaces.length;
    remaining = limit - total;
  }

  totalChars.textContent = total;
  remainingChars.textContent = remaining;

  console.log(total, remaining);

  // Restricting the input to 100 characters
  if (total >= limit) {
    text.value = text.value.slice(0, limit);
  }
});
