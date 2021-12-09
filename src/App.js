import './App.css';
import React from 'react';
import WeatherCard from './components/weatherCard';

class App extends React.Component {

  render() {
    // const name = 'Tashawnee'
    // const betterName = 'Jose'
    return (
      <div className="App">
        <h1>Pursuit Weather in React</h1>
        <WeatherCard />
      </div>
    );
  }
}

export default App;
