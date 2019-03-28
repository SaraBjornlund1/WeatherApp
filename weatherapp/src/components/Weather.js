import React,{Component} from 'react';


export default class Weather extends Component{

    render()
    {
        return (<div className="owf owf-200">
            <h1>Weather today:</h1>
            <p>Location: {this.props.city}, {this.props.country}</p>
            <p>Temprature: {this.props.icon} {this.props.temprature}</p>
            <p>Description: {this.props.description}</p>
            <p>Local Time: {this.props.date}</p>
        </div>); 
    }
}