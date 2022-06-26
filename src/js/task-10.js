

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const divBoxes = document.querySelector('#boxes');
const inputCreate = document.querySelector('[data-create]');
const inputClear = document.querySelector('[data-destroy]');

const numEl = inputCreate.previousElementSibling;

inputCreate.addEventListener('click', createBoxes);
// {

  // divBoxes.addEventListener('click', createBoxes);
  // console.log('add');

// });
// inputClear.addEventListener('click', destroyBoxes);
  // => {

  // divBoxes.removeEventListener('click', createBoxes);
  // console.log('destroy');
// });
let divNew = [];
function createBoxes() {
  const newDiv = document.createElement('div-shadow');
  for (let i = 0; i < numEl.value; i++) {
    const element = 30 + i * 10;
    divBoxes.push(element);
    element.style.backgroundColor = getRandomHexColor();
    console.log('yes');
    newDiv.classList.add('div-shadow');
    divBoxes.appendChild(newDiv);
  
  }
  };
  // console.log(divBoxes);
  
//   console.table(divContainer);
//   const text = divContainer.map(numberElements) => ''
//     inputCreate.innerHTML = divBoxes.value;
//     element.style.width = "30px"
//     element.style.height = "30px"
//   element.style.backgroundColor = getRandomHexColor();
//   const markup = divs
//   .map(({ url, alt }) => `<li class ="list-item new"><img class = "item__image" width=220 src='${url}' alt='${alt}'></li>`)
//   .join("");
//     divBoxes.insertAdjacentHTML("afterbegin", element);
//     // divBoxes.appendChild(element);
// }
// let divs = new Map();
// divs.set()
// const childrenNum = boxes.childNodes.length;
// let width = 30 + 10 * childrenNum;
// let height = 30 + 10 * childrenNum;
// const markup = divs
//   .map(({ url, alt }) => `<li class ="list-item new"><img class = "item__image" width=220 src='${url}' alt='${alt}'></li>`)
//   .join("");
// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h3>Gallery</h3>");

