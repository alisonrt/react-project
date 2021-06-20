import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';
import axios from 'axios';


export default function WeatherForecast(props) {
    function handleResponse(response) {

    }
    
    const apiKey = "20f80f60d74acf5419e80528f290a5b9";
    let latitude = props.coords.lat;
    let longitude = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="forecast-day">Monday</div>
                    <WeatherIcon code="01d" size={32} />
                    <div className="forecast-temps">
                        <span className="forecast-temp-max">19˚</span>
                        <span className="forecast-temp-min">10˚</span>
                    </div>
                </div>
            </div>
        </div>
    );
}