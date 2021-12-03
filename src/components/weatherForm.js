import React from 'react'

class WeatherForm extends React.Component {
    constructor() {
        super() 
        this.state = {
            location: ''
        }
    }

    saveLocation(e) {
        e.preventDefault()
        this.setState({
            location: e.target.value
        })
    }

    sendLocation(e) {
        e.preventDefault() 
        this.props.getLocation(this.state.location)
        this.setState({
            location: ''
        })
    }

    render() {
        return(
            <div>
                <form>
                    <label>location: 
                        <input onChange={(e) => this.saveLocation(e)}></input>
                    </label>
                    <button onClick={(e) => this.sendLocation(e)}>find weather!</button>
                <h1>you would like to see weather for {this.state.location}</h1>
                </form>
            </div>
        )
    }
}

export default WeatherForm;
