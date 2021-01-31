import React from 'react'
 
function Result(){

    return(
        <div className="result" id="Result">
        <h3 id="city-name">----</h3>
        <h1 id="weather-type">----</h1>
        <ul>
            <li>Temp: <span id="temp">--</span>°</li>
            <li>Min Temp: <span id="min-temp">--</span>°</li>
            <li>Max Temp: <span id="max-temp">--</span>°</li>
        </ul>
        </div>
    )
}


export default Result