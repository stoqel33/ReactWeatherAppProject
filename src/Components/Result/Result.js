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
          <h2>Tepmeratura {temp.toFixed(1)} &#x2103;</h2>
          <h3>Temperatura odczuwalna {feels.toFixed(1)} &#x2103;</h3>
          <p>Wschód słońca {sunriseTime}</p>
          <p>Zachód słońca {sunsetTime}</p>
          <p>Ciśnienie {pressure} hPa</p>
          <p>Wiatr {wind} km/h</p>
          <p>{status}</p>
        </div>
      }
    </>
  )
}

export default Result;