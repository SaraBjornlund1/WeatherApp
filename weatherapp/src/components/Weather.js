import React,{Component} from 'react';

export default class Weather extends Component{

    render()
    {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper teal darken-4">
                        <h3>Atmosphere Weather</h3>
                    </div>
                </nav>
                <div className="background">
                    <h1>Weather Today</h1>
                    <div className="container1">
                        <img className="imgSize" src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="WeatherImage" />
                    </div>
                    <div className="container2">

                        <p>Location: {this.props.city}, {this.props.country}</p>
                        <p>Temprature: {Math.round(this.props.temprature)} °C</p>
                        <p>Description: {this.props.description}</p>
                        <p>Local Time: {this.props.date}</p>
                    </div>
                </div>
            </div>
        ); 
    }
}