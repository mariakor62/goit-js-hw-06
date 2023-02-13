
const controls = document.querySelector('#controls');
const divBoxes = document.querySelector('#boxes');

controls.addEventListener('click', (event) => {
  if (event.target.matches('[data-create]')) {
    const input = controls.querySelector('input');
    const amount = Number(input.value);
    createBoxes(amount);
  } else if (event.target.matches('[data-destroy]')) {
    divBoxes.innerHTML = '';
  }
});
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.background = getRandomHexColor();
    divBoxes.appendChild(box);
  }
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}


