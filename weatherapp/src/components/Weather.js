import React,{Component} from 'react';

export default class Weather extends Component{

    render()
    {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper teal darken-4">
                        <h3>WeatherSMHI</h3>
                    </div>
                </nav>
                <div className="background">
                    <h1>Weather Today</h1>
                    <div className="container1">
                        <img className="imgSize" src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="WeatherImage" />
                    </div>
                    <div className="container2">

                        <p><strong>Location:</strong> {this.props.city}, {this.props.country}</p>
                        <p><strong>Temprature:</strong> {Math.round(this.props.temprature)} °C</p>
                        <p><strong>Description:</strong> {this.props.description}</p>
                        <p><strong>Local Time:</strong> {this.props.date}</p>
                    </div>
                </div>
            </div>
        ); 
    }
}