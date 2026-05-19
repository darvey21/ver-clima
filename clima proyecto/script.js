const inputBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const errormessage = document.querySelector(".error");

 async function checkWeather(city) {
    try {

    const apiKey = "a711c7938ae8e8643c696a80be48b599";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Ciudad no encontrada");
    }
    const data = await response.json();

    console.log(data);
    updateWeatherUI(data);
    } catch (error) {
        console.error(error.message);
        weather.style.display = "none";
        errormessage.style.display = "block";
    }

}
function updateWeatherUI(data) {
    document.querySelector(".temp").innerHTML = `${ Math.round(data.main.temp)} &deg;C`;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

    const weatherIcons = {
        Clear : "images/clear.png",
        Rain : "images/rain.png",
        Snow : "images/snow.png",
        Clouds : "images/clouds.png",
    }
    weatherIcon.src = weatherIcons[data.weather[0].main] || "images/default.png";

    weather.style.display = "block";
    errormessage.style.display = "none";

}



searchBtn.addEventListener("click", () => {
    checkWeather(inputBox.value);

});
window.onload = () => {
    checkWeather("villavicencio");
}



