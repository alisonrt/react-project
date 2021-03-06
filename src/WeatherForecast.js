import React, {useState, useEffect} from 'react';
import './WeatherForecast.css';
import WeatherForecastDay from './WeatherForecastDay';
import axios from 'axios';


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coords]);
        

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index >= 5) return null;

                        return (
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    } else {

            let apiKey = "20f80f60d74acf5419e80528f290a5b9";
            let latitude = props.coords.lat;
            let longitude = props.coords.lon;
            let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

            axios.get(apiUrl).then(handleResponse);
        return null;
    }
}