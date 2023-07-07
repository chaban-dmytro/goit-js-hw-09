import Notiflix from 'notiflix'
const flatpickr = require( "flatpickr" );

const formEl = document.querySelector( 'form' );
formEl.addEventListener( 'input', checkInput );
formEl.addEventListener( 'submit', submitForm );

let delay = 0;
let step = 0;
let amount = 0;

function checkInput( event ) {
  if ( event.target.name === 'delay' ) {
    delay = Number(event.target.value);
  } else if ( event.target.name === 'step' ) {
    step = Number(event.target.value);
  } else if (event.target.name === 'amount' ) {
    amount = Number(event.target.value);
  }  
}

function createPromise( position, delay ) {
  return new Promise( ( res, rej ) => {
    const shouldResolve = Math.random() > 0.3;
    setInterval( () => {
      if (shouldResolve) {
        res( { position, delay } )
      } else {
        rej( { position, delay } )
      }  
    }, delay)
  } )
}

function submitForm( event ) {
  event.preventDefault();
  for ( let i = 1; i <= amount; i += 1 ) {
    createPromise( i, delay )
    .then(({ position, delay }) => {
      // console.log( `✅ Fulfilled promise ${position} in ${delay}ms` );
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      // console.log( `❌ Rejected promise ${position} in ${delay}ms` );
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms` );
    } );
    delay = delay + step;
  }
}