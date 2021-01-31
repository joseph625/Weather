import React from 'react'


function Data() {

    //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    const API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
    const URL = "https://api.openweathermap.org/data/2.5/weather?";

    function getWeatherData(city) {

        const Full_URL = `${URL}q=${city}&appid=${API_KEY}`;
        const weather = fetch(Full_URL);
        weather.then((response) => {
            return response.json();
        }).then((resData) => {
             showWeather(resData);
        }).catch(error => {
            console.log(error);
        })
    }

    


    function Search(){

    const city = document.getElementById("name-city").value;
    getWeatherData(city)
    }


     function showWeather(weatherData) {
        document.getElementById("city-name").innerText = weatherData.name;
        document.getElementById("weather-type").innerText= weatherData.weather[0].main;
        document.getElementById("temp").innerText = weatherData.main.temp;
        document.getElementById("min-temp").innerText = weatherData.main.temp_min;
        document.getElementById("max-temp").innerText = weatherData.main.temp_max;
    }

return(
<div>
    <div className="container">
        <div className="left">
            <h1>Weather</h1>
            <input id="name-city" type="text" placeholder=" Search the city" />
                <a href="#Result"><button href="#Result" type="button" onClick={Search}>
                    Search
                </button></a>
        </div>

        <div className="right">
            <img src="Weatherr.gif" alt="" />
        </div>
    </div>
</div>
)
}


export default Data;