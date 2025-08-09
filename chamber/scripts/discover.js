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



// 8 Cards for things to do in Orrville
const urlJSON2 = "data/to-do.json";
const mainDiscover = document.querySelector('#discover-page');

async function getEventData() {
    const response = await fetch(urlJSON2);
    const data = await response.json();
    generateEventCards(data.events);
}


function generateEventCards(events) {
    const divEvents = document.createElement('div');

    events.forEach((event) => {
        const eventCard = document.createElement('section');
        const name = document.createElement('h2');
        const eventImage = document.createElement('img');
        const eventPhoto = document.createElement('figure');
        const eventAddress = document.createElement('address');
        const eventDescription = document.createElement('p');
        const learnMoreButton = document.createElement('button');

        name.innerHTML = event.name;

        eventImage.setAttribute("src", event.image);
        eventImage.setAttribute("alt", `${event.name} image`);
        eventImage.setAttribute("width", 300);
        eventImage.setAttribute("loading", 'lazy');
        eventPhoto.appendChild(eventImage);

        eventAddress.innerHTML =
            `
            ${event.address.street}
            ${event.address.city}, ${event.address.state} ${event.address.zip}
            `;

        eventDescription.innerHTML = event.description;

        learnMoreButton.innerHTML = "Learn More";

        eventCard.appendChild(name);
        eventCard.appendChild(eventPhoto);
        eventCard.appendChild(eventAddress);
        eventCard.appendChild(eventDescription);
        eventCard.appendChild(learnMoreButton);

        divEvents.appendChild(eventCard);
    })
    mainDiscover.appendChild(divEvents);
    
}

getEventData();


// How many times user has visited the web page
const displayParagraph = document.querySelector('#visit-count')

function visitCount() {
    let displayMessage = '';
    const todaysDate = Date.now();
    let daysPast = 0;

    visitDate = localStorage.getItem('lastVisit');
    if (visitDate) {
        daysPast = (todaysDate - visitDate) / 86400000;
    }
    else {
        daysPast = -1;
    }

    if (daysPast === -1) {
        displayMessage = 'Welcome! Let us know if you have any questions.';
    }
    else if (daysPast > 0 && daysPast < 1) {
        displayMessage = 'Back so soon! Awesome!';
    }
    else if (daysPast > 1) {
        displayMessage = `You last visited ${daysPast.toFixed(0)} days ago.`;
        if (daysPast.toFixed(0) === 1) {
            displayMessage = `You last visited ${daysPast.toFixed(0)} day ago.`
        }
    }

    displayParagraph.innerHTML = displayMessage;

    localStorage.setItem('lastVisit', todaysDate);
}


visitCount();



