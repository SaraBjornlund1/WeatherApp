import React,{Component} from 'react';

export default class SearchForm extends Component{

    render() {
        return(
            <div className="rightWrapper">
                <div className="row">
                <h6>Search for a location:</h6>
                    <form className="col s12" onSubmit={this.props.getWeather}>
                        <div className="input-field col s6">
                            <input id="city" type="text" name="city" />
                            <label className="active" htmlFor="city">City...</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="country" type="text" name="country" />
                            <label className="active" htmlFor="country">Country...</label>
                        </div>
                        <button>Get Weather</button>
                    </form>
                </div>
            </div>
        );
    }

}