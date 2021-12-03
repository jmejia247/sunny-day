import { Component } from 'react'
import Weather from './weather'
import WeatherForm from './weatherForm'

class WeatherCard extends Component {
    constructor() {
        super()
        this.state = {
            location: ''
        }
    }

    getLocation = (data) => {
        // console.log(typeof data)

        this.setState({
            location: data
        })
    }

    render() {
        return (
            <div className='weather-card'>
                <WeatherForm getLocation={this.getLocation}/>
                <Weather location={this.state.location} />
            </div>
        )
    }
}
 
export default WeatherCard;
