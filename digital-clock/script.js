const getHours = document.querySelector('#hours');
const getMinutes = document.querySelector('#minutes');
const getSeconds = document.querySelector('#seconds');
const getAmPm = document.querySelector('#am-pm');

const clock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const amPm = hours >= 12 ? 'PM' : 'AM';

  getHours.textContent = hours;
  getMinutes.textContent = minutes;
  getSeconds.textContent = seconds;
  getAmPm.textContent = amPm;

  if (hours > 12) {
    const newHours = hours - 12;
    newHours < 10
      ? (getHours.textContent = `0${newHours}`)
      : (getHours.textContent = newHours);
  }

  if (hours === 0) {
    getHours.textContent = 12;
  }

  if (minutes < 10) {
    getMinutes.textContent = `0${minutes}`;
  }

  if (seconds < 10) {
    getSeconds.textContent = `0${seconds}`;
  }
};

const interval = setInterval(clock, 1000);
