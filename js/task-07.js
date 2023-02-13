const rangeInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
rangeInput.addEventListener('input', onScroll);
function onScroll(event) {
    text.style.fontSize = event.currentTarget.value + "px";
   };
