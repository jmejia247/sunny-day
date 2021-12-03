import './App.css';
import React from 'react';
import WeatherCard from './components/weatherCard';

class App extends React.Component {
  constructor() {
    super() 
  }

  render() {
    return (
      <div className="App">
        <WeatherCard />
      </div>
    );
  }
}

export default App;
