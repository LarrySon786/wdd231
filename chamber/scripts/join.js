const nonprofitButton = document.querySelector('#non-profit-button');
const bronzeButton = document.querySelector('#bronze-button');
const silverButton = document.querySelector('#silver-button');
const goldButton = document.querySelector('#gold-button');

const nonprofit = document.querySelector('#non-profit');
const bronze = document.querySelector('#bronze');
const silver = document.querySelector('#silver');
const gold = document.querySelector('#gold');

const closeButtonOne = document.querySelector('#closeModalOne');
const closeButtonTwo = document.querySelector('#closeModalTwo');
const closeButtonThree = document.querySelector('#closeModalThree');
const closeButtonFour = document.querySelector('#closeModalFour');

closeButtonOne.addEventListener('click', () => {
    nonprofit.close();
})
closeButtonTwo.addEventListener('click', () => {
    bronze.close();
})
closeButtonThree.addEventListener('click', () => {
    silver.close();
})
closeButtonFour.addEventListener('click', () => {
    gold.close();
})
nonprofitButton.addEventListener('click', () => {
    nonprofit.showModal();
})
bronzeButton.addEventListener('click', () => {
    bronze.showModal();
})
silverButton.addEventListener('click', () => {
    silver.showModal();
})
goldButton.addEventListener('click', () => {
    gold.showModal();
})


// Form Timestamp


const form = document.querySelector('.join-form');
const timestampInput = document.querySelector('#timestamp');

form.addEventListener('submit', () => {
    const now = new Date().toISOString(); // ISO format: YYYY-MM-DDTHH:mm:ss.sssZ
    timestampInput.value = now;
});





//Footer Information
let footerInfo = document.querySelector("#footer-information");

const year = new Date().getFullYear();

footerInfo.innerHTML = `©${year} Orrville Chamber of Commerce`;

//Footer modification date

let footerModifiedDate = document.querySelector("#lastModified");

const dateModified = document.lastModified;

footerModifiedDate.innerHTML = `Last Modification: ${dateModified}`


//Hamburger Menu
let hamburgerButton = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('show');
    navigation.classList.toggle('show');
})
