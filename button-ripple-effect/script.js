const button = document.querySelector('#btn');

const ripple = (e) => {
  console.log(e.pageX);
};

let span = document.createElement('span');
span.classList.add('ripple');
button.appendChild(span);

button.addEventListener('mouseover', ripple);
