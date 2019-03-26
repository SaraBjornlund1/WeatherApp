import React, { Component } from 'react';

import WeatherApp from './components/WeatherApp.js';

const ApiKey = '7206f555ea9bd199f277647daa4aad73';

class App extends Component {

  getWeather = async () => {
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=stockholm,sweden&APPID=${ApiKey}&units=metric`);
    const data = await apiCall.json();
    console.log(data);
  }
  render() {
    return (
      <WeatherApp />
    );
  }
}

export default App;
