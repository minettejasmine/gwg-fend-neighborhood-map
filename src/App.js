import React, { Component } from 'react';
import './App.css';
import Map from "./components/Map"; // import link to Map component

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map/> {/* render Map component from Map.js */}
      </div>
    );
  }
}

export default App;
