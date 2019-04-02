import React,{Component} from 'react';

const ApiKey = '7206f555ea9bd199f277647daa4aad73';

export default class Forecast extends Component{

    state = {
        forecast: []
    }

    async componentDidMount(){
        const apiForecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=stockholm,sweden&APPID=${ApiKey}&units=metric`);
        const forecastData = await apiForecast.json();
        console.log(forecastData);

        this.setState({
            forecast: forecastData.list,
        });
    }

    render() {
        let allDays = this.state.forecast.map((forecasts) => {
            return(
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card teal darken-3">
                            <div className="card-content white-text">
                                <li>
                                    <div className="container1">
                                    <img className="imgSize" src={`http://openweathermap.org/img/w/` + forecasts.weather[0].icon + `.png`} alt="WeatherImage" />
                                    </div>
                                    <strong>{forecasts.dt_txt}</strong>
                                    <p>Min Temp: {Math.round(forecasts.main.temp_min)} °C / Max Temp: {Math.round(forecasts.main.temp_max)} °C</p>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
        return(<div className="wrapper">
            <h1>Forecast 5 Days</h1>
            <ul>{allDays}</ul>
        </div>);
    }
    

    // render(){
    //     let allDays = this.state.forecast.map((forecast) => {
    //         let day = forecast.weather[0].id;

    //         return (<div>
    //             <h1>Forecast 5 days</h1>
    //         </div>);
    //     })
    // });
}