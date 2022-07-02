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
    .map((ingredient) => `<li class="list-item new">${ingredient}</li>`)
  .join("");
  ul.append(list);
  list.insertAdjacentHTML("beforeend", markup);
  console.log(ul);


  