import React,{Component} from 'react';


export default class Weather extends Component{

    render()
    {
        return (<div>
            <h1>Vädret i Stockholm idag:</h1>
            <p>Grader: {this.props.temperature}</p>
        </div>); 
    }


}