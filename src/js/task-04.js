const inBtn = document.querySelector('[data-action="increment"]');
const deBtn = document.querySelector('[data-action="decrement"]');
const numEl = document.querySelector("#value");
let counterValue = 0;
inBtn.addEventListener("click", () => {
  counterValue += 1;
  numEl.textContent = counterValue;
  });
deBtn.addEventListener("click", () => {
   counterValue -= 1;
  numEl.textContent = counterValue;
 });


