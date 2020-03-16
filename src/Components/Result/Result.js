import React from 'react';
import './Result.css';

const Result = props => {
  const { data, city, temp, feels, sunrise, sunset, pressure, wind, status, err } = props.weather;

  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
  return (
    <>
      {err ? <p>{data}</p> :
        <div>
          <p>{data}</p>
          <h1>{city}</h1>
          <h2>{temp}</h2>
          <p>{sunriseTime}</p>
          <p>{sunsetTime}</p>
          <p>{pressure}</p>
          <p>{wind}</p>
          <p>{status}</p>
        </div>
      }
    </>
  )
}

export default Result;