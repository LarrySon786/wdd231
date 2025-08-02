const now = new Date()

const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

const formResults = document.querySelector("#formResults");
formResults.innerHTML = `Application for ${myInfo.get('fname')} ${myInfo.get('lname')} | Email: ${myInfo.get('email')} | Phone: ${myInfo.get('phone')} | Organization: ${myInfo.get('organization')} | Sumbission Date: ${now}.`

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