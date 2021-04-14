import React,{useState} from 'react'


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

    const [show , setShow] = useState(0);

    function Search(){
    const city = document.getElementById("name-city").value;
    getWeatherData(city)
    setShow(1)
    }

     function showWeather(weatherData) {
        document.getElementById("city-name").innerText = weatherData.name;
        document.getElementById("weather-type").innerText= weatherData.weather[0].main;
        document.getElementById("temp").innerText = (weatherData.main.temp -273.15).toString().substring(0, 5);
        document.getElementById("min-temp").innerText = (weatherData.main.temp_min - 273.15).toString().substring(0,5);
        document.getElementById("max-temp").innerText = (weatherData.main.temp_max - 273.15).toString().substring(0,5);

    }

    
    

return(
<div>
    <div className="container">
        <div className="left">
            <h1>Weather</h1>
            <input id="name-city" type="text" placeholder="Search the city" />
                <a href="#Result"><button href="#Result" type="button" onClick={Search}>
                    Search
                </button></a>
        </div>

        <div className="right">
            <img src="Weatherr.gif" alt="" />
        </div>
    </div>

    <div className="result" id="Result" style={{opacity: show ? 1 : 0}}>
        <h3 id="city-name">----</h3>
        <h1 id="weather-type">----</h1>
        <ul>
            <li>Temp: <span id="temp">--</span>°</li>
            <li>Min Temp: <span id="min-temp">--</span>°</li>
            <li>Max Temp: <span id="max-temp">--</span>°</li>
        </ul>
        </div>
</div>
)
}


export default Data;
