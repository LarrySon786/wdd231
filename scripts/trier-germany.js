

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const myKey = "f140179844ab9c3bf29f7274495271d1";
const myLat = "49.755534867656095";
const myLong = "6.641857568975138";
const url = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;




async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = response.json();
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

function displayResults(data) {
    console.log("Hello");
    currentTemp.innerHTML = data.main.temp
}
apiFetch();






