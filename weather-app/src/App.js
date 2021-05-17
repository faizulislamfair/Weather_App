import React, { Component } from "react";

import './App.css';

import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './app_component/weather.component'

// api call api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
const API_key="543131be8589bf754ffee80adfb1bebc"

class App extends React.Component {
  state = { }
  render(){
    return();
  }
}

function App() {
  return (
    <div className="App">
      <Weather/>
    </div>
  );
}

export default App;
