
const dialog = document.querySelector("#vacation-details")
const exploreDiv = document.querySelector("#explore-div");
const url = "data/vacations.json";

async function getVacationData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error();
        }
        const data = await response.json();
        generateVacationCards(data.destinations);
    }
    catch (error) {
        console.error(error);
    }
    
    
}

function generateVacationCards(destinations) {
    destinations.forEach((destination) => {
        const section = document.createElement("section");
        const image = document.createElement("img");
        const name = document.createElement("h3");
        const learnMore = document.createElement("Button");

        image.setAttribute("src", destination.image);
        image.setAttribute("alt", `${destination.name} Photo`);
        image.setAttribute("loading", "lazy");

        name.innerHTML = destination.name;
        learnMore.innerHTML = "Learn More";

        learnMore.addEventListener('click', () => showContent(destination))

        section.appendChild(image);
        section.appendChild(name);
        section.appendChild(learnMore);
        
        exploreDiv.appendChild(section);
    })

}

function showContent(destination) {
    dialog.replaceChildren();

    let closeButton = document.createElement('button');
    closeButton.innerHTML = "Close Vacation Menu"
    closeButton.addEventListener('click', () => {
        dialog.close();
    })
    dialog.appendChild(closeButton);

    // const image = document.createElement('img');
    // image.setAttribute("src", destination.image);
    // image.setAttribute("loading", "lazy");
    // image.setAttribute("alt", `Photo of ${destination.name}`);
    // dialog.appendChild(image);

    const destinationName = document.createElement('h2');
    destinationName.innerHTML = destination.name;
    dialog.appendChild(destinationName);

    const hotelDiv = document.createElement('div');
    const hotelName = document.createElement('h3');
    const hotelPhone = document.createElement('p');
    const hotelAddress = document.createElement('address');

    hotelName.innerHTML = `Hotel: ${destination.hotel.name}`;
    hotelPhone.innerHTML = `Phone: ${destination.hotel.phone}`;
    hotelAddress.innerHTML = `Address: ${destination.hotel.name}`;
    hotelDiv.appendChild(hotelName);
    hotelDiv.appendChild(hotelPhone);
    hotelDiv.appendChild(hotelAddress);
    dialog.appendChild(hotelDiv);

    const airportDiv = document.createElement('div');
    const airportName = document.createElement('h3');
    const airportPhone = document.createElement('p');
    const airportAddress = document.createElement('address');

    airportName.innerHTML = `Airport: ${destination.airport.name}`;
    airportPhone.innerHTML = `Phone: ${destination.airport.phone}`;
    airportAddress.innerHTML = `Address: ${destination.airport.name}`;
    airportDiv.appendChild(airportName);
    airportDiv.appendChild(airportPhone);
    airportDiv.appendChild(airportAddress);
    dialog.appendChild(airportDiv);


    const activityDiv = document.createElement('div');
    const activityHeader = document.createElement('h3');
    activityHeader.innerHTML = `Top Things To Do In ${destination.name}`;
    activityDiv.appendChild(activityHeader);
    destination.top_activities.forEach((activity) => {
        let activitySection = document.createElement('section');
        let activityName = document.createElement('h4');
        let activityDescription = document.createElement('p');
        let activityPhone = document.createElement('p');
        let activityAddress = document.createElement('address');

        activityName.innerHTML = `Attraction: ${activity.name}`;
        activityDescription.innerHTML = `Description: ${activity.description}`;
        activityPhone.innerHTML = `Phone: ${activity.phone}`;
        activityAddress.innerHTML = `Address: ${activity.address}`;

        activitySection.appendChild(activityName);
        activitySection.appendChild(activityPhone);
        activitySection.appendChild(activityAddress);
        activitySection.appendChild(activityDescription);

        activityDiv.appendChild(activitySection);
    })
    dialog.appendChild(activityDiv);





    dialog.showModal()
        
}


// .addEventListener('click', () => {
//     const response = await fetch(url);
//     const data = await response.json();
//     generatModalVacation(data.destinations);
// })

function generateModalVacation() {
    const dialog = document.createElement("dialog");

}

getVacationData();


