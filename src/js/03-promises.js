import Notiflix from 'notiflix'

const formEl = document.querySelector( 'form' );
formEl.addEventListener( 'input', checkInput );
formEl.addEventListener( 'submit', submitForm );

let delay = 0;
let step = 0;
let amount = 0;

function checkInput( event ) {
  if ( event.target.name === 'delay' ) {
    if ( Number( event.target.value ) < 0 ) {
      Notiflix.Notify.failure( `Значення в полі ${event.target.name} не може бути відємним!` );
      event.target.value = '';
    } else {
      delay = Number( event.target.value );
    }  
  } else if ( event.target.name === 'step' ) {
    if ( Number( event.target.value ) < 0 ) {
      Notiflix.Notify.failure( `Значення в полі ${event.target.name} не може бути відємним!` );
      event.target.value = '';
    } else {
      step = Number( event.target.value );
    }  
  } else if (event.target.name === 'amount' ) {
    if ( Number( event.target.value ) < 0 ) {
      Notiflix.Notify.failure( `Значення в полі ${event.target.name} не може бути відємним!` );
      event.target.value = '';
    } else {
      amount = Number( event.target.value );
    }  
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
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms` );
    } );
    delay = delay + step;
  }
}