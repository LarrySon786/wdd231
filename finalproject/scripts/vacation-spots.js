

const exploreDiv = document.querySelector("#explore-div");
const url = "data/vacations.json";

async function getVacationData() {
    const response = await fetch(url);
    const data = await response.json();
    generateVacationCards(data.destinations);
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

        section.appendChild(image);
        section.appendChild(name);
        section.appendChild(learnMore);
        
        exploreDiv.appendChild(section);
    })
    
    



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


