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

//Weather Current Day API data
const currentWeatherCard = document.querySelector('#current-weather');
const lat = "40.83752883570051";
const long = "-81.76468197708365";
const myAPI = 'f140179844ab9c3bf29f7274495271d1';
const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${myAPI}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(urlWeather);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data)
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
//Generate Weather info using API information
function displayResults(data) {
    let image = document.createElement('img');
    image.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('alt', 'Weather Icon');
    image.setAttribute('width', '50');
    currentWeatherCard.appendChild(image);

    let temp = document.createElement('p');
    temp.innerHTML = `${data.main.temp}&deg;F`;
    currentWeatherCard.appendChild(temp);

    let weatherDescription = document.createElement('p');
    weatherDescription.innerHTML = `${data.weather[0].description}`;
    currentWeatherCard.appendChild(weatherDescription);

    let highTemp = document.createElement('p');
    highTemp.innerHTML = `High: ${data.main.temp_max}&deg; F`;
    currentWeatherCard.appendChild(highTemp);

    let lowTemp = document.createElement('p');
    lowTemp.innerHTML = `Low: ${data.main.temp_min}&deg; F`;
    currentWeatherCard.appendChild(lowTemp);

    let humidity = document.createElement('p');
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    currentWeatherCard.appendChild(humidity);

    let sunrise = document.createElement('p');
    let sunRiseUnix = data.sys.sunrise
    const sunRiseDate = new Date(sunRiseUnix * 1000)
    const sunRiseHours = sunRiseDate.getHours();
    const sunRiseMinutes = sunRiseDate.getMinutes();
    sunrise.innerHTML = `Sunrise - ${sunRiseHours}:${sunRiseMinutes}`;
    currentWeatherCard.appendChild(sunrise);

    let sunset = document.createElement('p');
    let sunSetUnix = data.sys.sunset
    const sunSetDate = new Date(sunSetUnix * 1000)
    const sunSetHours = sunSetDate.getHours();
    const sunSetMinutes = sunSetDate.getMinutes();
    sunset.innerHTML = `Sunset - ${sunSetHours}:${sunSetMinutes}`;
    currentWeatherCard.appendChild(sunset);
}
apiFetch();


// 3 Day Forecast
const forecastCard = document.querySelector('#forcast-weather');
const urlForecastWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${myAPI}&units=imperial`;

async function apiFetchForecast() {
    try {
        const response2 = await fetch(urlForecastWeather);
        if (response2.ok) {
            const data2 = await response2.json();
            console.log(data2);
            displayResultsOfForecast(data2)
        }
        else {
            throw Error(await response2.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayResultsOfForecast(data) {
    let todayForecast = document.createElement('p');
    let tomorrowForecast = document.createElement('p');
    let dayAfterForecast = document.createElement('p');

    todayForecast.innerHTML = `Today:  ${data.list[0].main.temp}&deg; F`;
    forecastCard.appendChild(todayForecast);

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const tomorrowDay = daysOfWeek[tomorrow.getDay()];

    tomorrowForecast.innerHTML = `${tomorrowDay}:  ${data.list[1].main.temp}&deg; F`;
    forecastCard.appendChild(tomorrowForecast);

    const dayAfter = new Date(today);
    dayAfter.setDate(today.getDate() + 2);
    const dayAfterDay = daysOfWeek[dayAfter.getDay()];

    dayAfterForecast.innerHTML = `${dayAfterDay}:  ${data.list[2].main.temp}&deg; F`;
    forecastCard.appendChild(dayAfterForecast);



}
apiFetchForecast();




//Spotlight Business Cards

const spotLight = document.querySelector('#spot-light');
const url = "data/members.json";




async function getSpotLightChamberBusinesses() {
    const response = await fetch(url);
    const data = await response.json();
    displaySpotLightBusinessCards(data.companies);
}


const displaySpotLightBusinessCards = (companies) => {
    
    const list = [];
    companies.forEach((company) => {
        if (company.membershipLevel === "Gold" || company.membershipLevel === "Silver") { 
            list.push(company);
        }
    })

    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    const randomList = list.slice(0, 2);

    randomList.forEach((company) => {
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
        let p5 = document.createElement('p');

        heading.innerHTML = `${company.name}`;
        division1.appendChild(heading);
        section.appendChild(division1);

        image.setAttribute('src', company.image);
        image.setAttribute('alt', `Company Logo: ${company.name}`);
        image.setAttribute('width', 150);
        image.setAttribute('loading', 'lazy');

        p5.innerHTML = `Membership: ${company.membershipLevel}`;
        p1.innerHTML = `Phone: ${company.phone}`;
        p2.innerHTML = `Website: ${company.websites}`;
        p3.innerHTML = `${company.address.street}`;
        p4.innerHTML = `${company.address.city}, ${company.address.state} ${company.address.zip}`;

        division3.appendChild(p5);
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

        spotLight.appendChild(section);
    })

}

getSpotLightChamberBusinesses();
