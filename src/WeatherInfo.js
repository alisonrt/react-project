import React from 'react';
import WeatherIcon from './WeatherIcon';
import PrettyDate from './PrettyDate';
import WeatherTemp from './WeatherTemp';

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
                <ul>
                    <li>
                        <PrettyDate date={props.data.date} />
                    </li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <WeatherIcon code={props.data.icon} size={48} className="float-left" />
                        <WeatherTemp celsius={props.data.temperature} className="float-left" />
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Wind: {props.data.wind} km/h</li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}