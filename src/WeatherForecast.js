import React from 'react';
import WeatherIcon from './WeatherIcon';
import './WeatherForecast.css';


export default function WeatherForecast() {
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