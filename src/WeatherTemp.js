import React, { useState } from 'react';

export default function WeatherTemp(props) {
    const [unit, setUnit] = useState("celsius");
    function convertToF(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToC(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === 'celsius') {
        return (
            <div classname="WeatherTemp">
                <span className="temperature">{Math.round(props.celsius)}</span><span className="unit">˚C |{" "}<a href="" onClick={convertToF}>˚F</a></span>
            </div>
        );
    } else {
        let fahrenheit = (props.celsius * 9/5) +32;
        return (
            <div classname="WeatherTemp">
                <span className="temperature">{Math.round(fahrenheit)}</span><span className="unit"><a href="/" onClick={convertToC}>˚C</a> {" "}| ˚F</span>
            </div>
        );
    }

}