import React, { Component } from 'react';
import Weather from './components/Weather.js';
import Forecast from './components/Forecast.js';
import SearchForm from './components/SearchForm.js';

const ApiKey = '7206f555ea9bd199f277647daa4aad73';

class App extends Component {

  state = {
    temprature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    date: undefined,
    icon: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiSearch = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${ApiKey}&units=metric`);
    const searchData = await apiSearch.json();
    console.log(searchData);

    if(city && country){
      this.setState({
        temprature: searchData.main.temp,
        city: searchData.name,
        country: searchData.sys.country,
        description: searchData.weather[0].description,
        icon: searchData.weather[0].icon
      })
    }
  }

  async componentDidMount() {
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=stockholm,sweden&APPID=${ApiKey}&units=metric`);
    const data = await apiCall.json();
    console.log(data);

    this.setState({
      temprature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      date: new Date().toLocaleString(),
      icon: data.weather[0].icon,
    });
  }

  render() {
    return (<div>
      <nav>
        <div className="nav-wrapper teal darken-4">
          <h3>WeatherSMHI</h3>
        </div>
        <div className="">
          <SearchForm getWeather={this.getWeather} />
        </div>
      </nav>

      <div className="">
        <Weather
          temprature={this.state.temprature}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          error={this.state.error}
          date={this.state.date}
          icon={this.state.icon}
        />
        
      </div>
      <div className="">
      <Forecast />
      </div>
    </div>
    );
  }
}

export default App;
