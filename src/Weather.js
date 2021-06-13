import React from 'react';
import "./Weather.css";

export default function Weather () {
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city" className="form-control"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </div>
            </form>
            <h1>Seattle</h1>
            <ul>
                <li>Sunday 16:35</li>
                <li>Rain</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="rain" />
                    16˚C
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 97%</li>
                        <li>Humidity: 95%</li>
                        <li>Wind: 3 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}