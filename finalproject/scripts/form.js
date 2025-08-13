
const vacationSelection = document.querySelector("#vacation-options");

// Generate the options to select on HTML form

async function getVacationNames() {
    try {
        const response = await fetch("data/vacations.json");
        if (!response.ok) {
            throw new Error();
        }
    const data = await response.json();
    generateVacationSelection(data.destinations);
    }
    catch (error) {
        console.error(error);
    }
}

function generateVacationSelection(destinations) {
    destinations.forEach((destination) => {
        let option = document.createElement('option')
        option.value = destination.name;
        option.textContent = destination.name;
        vacationSelection.appendChild(option);
    })


}


// Generate the Activities listed on HTML form
const fieldSet = document.querySelector('#activities')

async function setVacationActivities() {
    try {
        const response = await fetch("data/vacations.json");
        if (!response.ok) {
            throw new Error();
        }
        const data = await response.json();
        setActivities(data.destinations);
    }
    catch (error) {
        console.error(error);
    }
}

function setActivities(destinations) {
    

    destinations.forEach((destination) => {
        if (destination.name === vacationSelection.value) {
            fieldSet.replaceChildren();
            let legend = document.createElement("legend");
            legend.innerHTML = `Choose Your Activities`;
            fieldSet.appendChild(legend);
            
            destination.top_activities.forEach((activity) => {
                let label = document.createElement('label');

                label.innerHTML = `<input type="checkbox" name="${activity.name}" value="${activity.name}"> ${activity.name}`;
                fieldSet.appendChild(label);

            }) 
        }
    })

}

vacationSelection.addEventListener("change", () => {
    setVacationActivities();
})

getVacationNames();





// Local Storage to Track number of vacations with our company
const submit = document.querySelector('#activities');

submit.addEventListener('click', () => {

    numberOfVacations = localStorage.getItem('totalVacations');
    
    if (numberOfVacations) {
        numberOfVacations = numberOfVacations + 1;
    }
    else {
        numberOfVacations = 1;
    }

    localStorage.setItem('totalVacations', numberOfVacations);
}
)


