const titleEl = document.createElement('h3');
titleEl.classList.add('gallery-title');
titleEl.textContent = 'White and Black Long Fur Cat';
const list = document.createElement('li'); 
list.getElementsByClassName('.gallery')

list.src =
  'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
list.alt = 'White and Black Long Fur Cat';
list.width = 220;

const images = [
  {
    url:'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat'
    
  },
  {
    url:'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish'
  },
  {
    url:'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running'
  },
  
];

const galleryItem = document.querySelector('.gallery');
galleryItem.append(titleEl,list);

console.log(galleryItem);
// const newTechnologies = ["React", "TypeScript", "Node.js"];

const markup = images
  .map(({ url, alt }) => `<li class ="list-item new"><img class = "item__image" width=220 src='${url}' alt='${alt}'></li>`)
  .join("");
list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h3>Gallery</h3>");








