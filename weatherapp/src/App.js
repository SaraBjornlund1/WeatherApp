import React, { Component } from 'react';

import WeatherApp from './components/WeatherApp.js';
import Forecast from './components/Forecast.js';

const ApiKey = '7206f555ea9bd199f277647daa4aad73';

class App extends Component {

  state = {
    temprature: undefined,
    
  }

  async componentDidMount() {
  //getWeather = async (e) => {
    //e.preventDefault();
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=stockholm,sweden&APPID=${ApiKey}&units=metric`);
    const data = await apiCall.json();
    console.log(data);
  }
  render() {
    return (<div>
      <WeatherApp />,
      <Forecast getWeather={this.getWeather}/>
    </div>

    );
  }
}

export default App;
