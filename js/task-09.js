const body = document.querySelector("body");
const changeColorBtn = document.querySelector('.change-color');
const backgroundColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  backgroundColor.textContent = getRandomHexColor();
  document.body.style.background = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
