const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const stopSign = document.querySelector('.stop__countdown');

document.addEventListener('DOMContentLoaded', () => {
  const interval = setInterval(() => {
    // Get my birthday
    // getTime() is used to get this time in ms
    const birthday = new Date('October 21, 2023 12:00:00').getTime();

    // Get today date
    const today = new Date().getTime();

    // Get the time left
    const timeLeft = birthday - today;

    // Format the time in days,hours,minutes,seconds
    let formattedDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    let formattedHours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    let formattedMinutes = Math.floor(
      (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
    );

    let formattedSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    days.textContent = formattedDays < 10 ? `0${formattedDays}` : formattedDays;
    hours.textContent =
      formattedHours < 10 ? `0${formattedHours}` : formattedHours;
    minutes.textContent =
      formattedMinutes < 10 ? `0${formattedMinutes}` : formattedMinutes;
    seconds.textContent =
      formattedSeconds < 10 ? `0${formattedSeconds}` : formattedSeconds;

    // Clear the interval if the countdown is finished
    if (timeLeft < 0) {
      clearInterval(interval);
      stopSign.textContent = 'The countdown is finished';
      days.textContent = 0;
      hours.textContent = 0;
      minutes.textContent = 0;
      seconds.textContent = 0;
    }
  }, 1000);
});
