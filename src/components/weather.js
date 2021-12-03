import React from 'react'

class Weather extends React.Component {
    constructor() {
        super()
        this.state = {
            weather: []
        }
    }

    componentDidMount() {
        fetch(`https://wttr.in/${this.props.location}?format=j1`).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({
                weather: [data]
            })
            // console.log(data)
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            fetch(`https://wttr.in/${this.props.location}?format=j1`).then((response) => {
                return response.json()
            }).then((data) => {
                this.setState({
                    weather: [data]
                })
                // console.log(data)
            })
        }
    }

    render() {
        // console.log(this.state.weather, 'hello wisconsin')
        const weather = this.state.weather.map((info) => {
            return <div>
                {info.nearest_area[0].areaName[0].value}
            </div>
            // console.log(info)
        })


        return (
            <div>
                {weather}
            </div>
        )
    }
}

export default Weather;
