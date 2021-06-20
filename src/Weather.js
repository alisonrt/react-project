import React, { useState } from 'react';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';
import "./Weather.css";

export default function Weather (props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            coord: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            sunrise: response.data.sys.sunrise,
            sunset: response.data.sys.sunset
        });
    }

    function search() {
        const apiKey = "20f80f60d74acf5419e80528f290a5b9";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return(
                <div className="Weather">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-9">
                                <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handleCityChange}/>
                            </div>
                            <div className="col-3">
                                <input type="submit" value="Search" className="btn btn-primary w-100" />
                            </div>
                        </div>
                    </form>
                    <WeatherInfo data={weatherData}/>
                    <WeatherForecast coords={weatherData.coord} />
                </div>
            );
    } else {
        search();
        return "loading...";
    }
    
}