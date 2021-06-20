import React from 'react';

export default function WeatherTemp(props) {
    return (
        <div className={`WeatherTemp ${props.className}`}>
                <span className="temperature">{Math.round(props.celsius)}</span><span className="unit">˚C</span>
            </div>
        );
}