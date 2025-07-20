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




//Alternate display between Grid and List
const gridButton = document.querySelector("#grid-option");
const listButton = document.querySelector("#list-option");
const divBusinessCards = document.querySelector("#business-cards");

gridButton.addEventListener('click', () => {
    divBusinessCards.classList.add("display-grid");
    divBusinessCards.classList.remove("display-list");

    divBusinessCards.replaceChildren();
    getChamberBusinesses();

})

listButton.addEventListener('click', () => {
    divBusinessCards.classList.add("display-list");
    divBusinessCards.classList.remove("display-grid");

    divBusinessCards.replaceChildren();
    getChamberBusinessesForList();
})


//JSON work

const url = "data/members.json";


async function getChamberBusinessesForList() {
    const response = await fetch(url);
    const data = await response.json();
    displayBusinessList(data.companies);
}

async function getChamberBusinesses() {
    const response = await fetch(url);
    const data = await response.json();
    displayBusinessCards(data.companies);
}

displayBusinessList = (companies) => {
    let divList = document.createElement('div'); 

    companies.forEach((company) => {

        let section = document.createElement('section');
        let name = document.createElement('h4');
        let phone = document.createElement('p');

        name.innerHTML = company.name;
        phone.innerHTML = company.phone;
        
        section.appendChild(name);
        section.appendChild(phone);

        divList.appendChild(section);
    })
    divBusinessCards.appendChild(divList);
}

const displayBusinessCards = (companies) => {
    companies.forEach((company) => {
        let section = document.createElement('section');
        let division1 = document.createElement('div');
        let division2 = document.createElement('div');
        let division3 = document.createElement('div');
        let division4 = document.createElement('div');
        let heading = document.createElement('h3');
        let image = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');

        heading.innerHTML = `${company.name}`;
        division1.appendChild(heading);
        section.appendChild(division1);

        image.setAttribute('src', company.image);
        image.setAttribute('alt', `Company Logo: ${company.name}`);
        image.setAttribute('width', 150);
        image.setAttribute('loading', 'lazy');

        p1.innerHTML = `Phone: ${company.phone}`;
        p2.innerHTML = `Website: ${company.websites}`;
        p3.innerHTML = `${company.address.street}`;
        p4.innerHTML = `${company.address.city}, ${company.address.state} ${company.address.zip}`;
        

        division3.appendChild(p1);
        division3.appendChild(p2);
        division3.appendChild(p3);
        division3.appendChild(p4);
        
        division1.classList.add('div1-heading');
        division2.classList.add('div2-grid');
        division3.classList.add('div3-paragraphs');
        division4.classList.add('div4-image')

        division4.appendChild(image);
        division2.appendChild(division4);
        division2.appendChild(division3);
        section.appendChild(division2);
        section.classList.add("display-grid-section")
        
        divBusinessCards.appendChild(section);
    })
}

getChamberBusinesses();



