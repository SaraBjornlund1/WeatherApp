import React, { Component } from 'react';

import Weather from './components/Weather.js';
import Forecast from './components/Forecast.js';

const ApiKey = '7206f555ea9bd199f277647daa4aad73';

class App extends Component {

  state = {
    temprature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    //error: undefined,
    date: undefined
  }

  async componentDidMount() {
  //getWeather = async (e) => {
    //e.preventDefault();
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=stockholm,sweden&APPID=${ApiKey}&units=metric`);
    const data = await apiCall.json();
    console.log(data);

    this.setState({
      temprature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      //error: "",
      date: new Date().toLocaleString()
    });
  }

  render() {
    return (<div>
      <Weather
        temprature={this.state.temprature}
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        error={this.state.error}
        date={this.state.date}
        />
      <Forecast getWeather={this.getWeather}/>
    </div>

    );
  }
}

export default App;
