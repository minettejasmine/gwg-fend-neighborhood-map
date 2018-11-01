import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'; // import link to Map component
import FourSquareAPI from './API';

class App extends Component {
	componentDidMount() {
		FourSquareAPI.search({
			near:"Winter Garden,FL",
			query:"school",
			limit: 12 //which is a Promise
		}).then(results => console.log(results));
	}
  render() {
    return (
      <div className="App">
        <Map/>
      </div>
    );
  }
}

export default App;
