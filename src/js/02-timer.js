import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix'

const flatpickr = require( "flatpickr" );
const inputEl = document.querySelector( '#datetime-picker' );
const buttonStartEl = document.querySelector( 'button[data-start]');
const daysEl = document.querySelector( 'span[data-days]' );
const hoursEl = document.querySelector( 'span[data-hours]' );
const minutesEl = document.querySelector( 'span[data-minutes]' );
const secondsEl = document.querySelector( 'span[data-seconds]' );


buttonStartEl.classList.add( 'button--inactive' );
buttonStartEl.addEventListener( 'click', startTimer);

const currentDate = new Date();
let dateFromUsrer;

flatpickr( inputEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: currentDate,
  minuteIncrement: 1,
  onClose( selectedDates ) {
    dateFromUsrer = selectedDates[0];
    if ( currentDate > dateFromUsrer ) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    } else
      buttonStartEl.classList.remove( 'button--inactive' );
  },
} );

function startTimer() {
  const id = setInterval( () => {
    const current = new Date();
    const timerTime = convertMs( dateFromUsrer - current );
    if (timerTime.seconds >= 0) {
      daysEl.textContent = timerTime.days.toString().padStart(2, '0');
      hoursEl.textContent = timerTime.hours.toString().padStart(2, '0');
      minutesEl.textContent = timerTime.minutes.toString().padStart(2, '0');
      secondsEl.textContent = timerTime.seconds.toString().padStart( 2, '0' );
    } else {
      clearInterval( id );
      Notiflix.Notify.success('Congratulation! Time is ower.');
    }
  }, 1000)
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}







