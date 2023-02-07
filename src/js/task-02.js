const ingredients = [
  'Potatoes',
   'Mushrooms',
   'Garlic',
   'Tomatoes',
   'Herbs',
  'Condiments'];
const ul = document.querySelector('#ingredients');
const list = document.createElement('li');
const markup = ingredients
  .map(ingredient => ( 
    `<li class="item">${ingredient}</li>`))
  .join(" ");
  list.insertAdjacentHTML("beforeend", markup);
  ul.append(list);
  console.log(ul);



  