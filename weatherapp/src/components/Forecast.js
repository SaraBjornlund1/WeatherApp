import React,{Component} from 'react';

const ApiKey = '7206f555ea9bd199f277647daa4aad73';

export default class Forecast extends Component{

    state = {
        forecast: undefined
    }

    getForecast = async (e) => {
        e.preventDefault();

        const apiForecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=stockholm,sweden&APPID=${ApiKey}&units=metric`);
        const forecastData = await apiForecast.json();
        console.log(forecastData);

        this.setState({
            forecast: forecastData.list
        })
    }


    render()
    {
        var forecastList;
        if(this.state.forecast){
            forecastList = this.state.forecast.map((forecast) => {
                return (<li>{forecast.dt_txt}: {forecast.main.temp_min} / {forecast.main.temp_max}</li>);
            });
        }
        //console.log(this.props.day);
        return (<div>
            <h1>Forecast 5 days</h1>
            {this.state.forecast && <ul>{forecastList}</ul>}
        </div>
        // <form onSubmit={this.props.getWeather}>
        //     <input type="text" name="city" placeholder="City..."/>
        //     <input type="text" name="country" placeholder="Country..."/>
        //     <button>Get Weather</button>
        // </form>

        );
    }
}