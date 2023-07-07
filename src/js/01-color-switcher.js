const bodyEl = document.querySelector( 'body' );
const buttonStart = document.querySelector( 'button[data-start]' );
const buttonStop = document.querySelector( 'button[data-stop]' );

buttonStart.addEventListener( 'click', startColorSwitcher );
buttonStop.addEventListener( 'click', stopColorSwitcher );

buttonStop.classList.add( 'button-dissable' );

let intervalId = null;

function startColorSwitcher( event ) {
  buttonStart.classList.add( 'button-dissable' );
  buttonStop.classList.remove( 'button-dissable' );

  intervalId = setInterval( () => {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000 );
}

function stopColorSwitcher(event) {
  clearInterval( intervalId );
  buttonStart.classList.remove( 'button-dissable' );
  buttonStop.classList.add( 'button-dissable' );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}




