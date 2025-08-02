
import { temples } from '..data/temples.js';
console.log(url);
import { url } from '..data/temples.js';
console.log(url);


const showBox = document.querySelector('#showHere');
const dialogBox = document.querySelector('#mydialog');
const myTitle = document.querySelector("#mydialog h2");
const closeBox = document.querySelector('#mydialog button');
const info = document.querySelector('#mydialog p');

closeBox.addEventListener('click', () => {
    dialogBox.close();
})

function displayItems(data) {
    data.forEach((item) => {
        const photo = document.createElement('img');
        photo.src = `${url}${item.path}`;
        photo.alt = `${item.name}`;
        photo.addEventListener('click', () => showStuff{item})
        showHere.appendChild(photo);



    })
}

function showStuff(item) {
    myTitle.innerHTML = item.name;
    mydialog.showModal()
}

displayItems(temples);
