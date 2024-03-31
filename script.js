const apiKey = "cab708cb960ed29de1fa997073b37ee0";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city)  {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "./assets/clouds.png"
    } else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "./assets/clear.png"
    } else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./assets/drizzle.png"
    } else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "./assets/mist.png"
    } else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "./assets/rain.png"
    } else if(data.weather[0].main == "Snow") {
        weatherIcon.src = "./assets/snow.png"
    } else if(data.weather[0].main == "Thunderstrom") {
        weatherIcon.src = "./assets/thunderstrom.png"
    }

    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})