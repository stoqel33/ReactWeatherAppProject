import React from 'react';
import './App.css';
import Form from '../Form/Form';
import Result from '../Result/Result';

const APIkey = 'd9b6b27164757a07549519653faf6737';
const time = new Date().toLocaleString();

class App extends React.Component {
  state = {
    value: '',
    data: '',
    city: '',
    temp: '',
    feels: '',
    sunrise: '',
    sunset: '',
    pressure: '',
    wind: '',
    status: '',
    err: true,
  }

  handleChangeInputForm = (e) => {
    this.setState({
      value: e.target.value
    })

  }

  componentDidMount() {

    this.setState({
      data: time,
    })

  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIkey}&units=metric&lang=pl`;

    fetch(API)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else throw Error('Error')
      })
      .then(data => {
        console.log(data);

        const currentTime = new Date().toLocaleString();

        this.setState({
          data: currentTime,
          city: data.name,
          temp: data.main.temp,
          feels: data.main.feels_like,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          status: data.weather[0].description,
          err: false,
        })
      })
      .catch(err => {
        this.setState({
          err: true
        })
        console.log('error' + err)
      })
  }

  render() {
    return (
      <div>
        <Form
          input={this.state.value}
          change={this.handleChangeInputForm}
          submit={this.handleSubmitForm}
        />
        <Result
          weather={this.state}
        />
      </div>
    );
  }
}

export default App;
