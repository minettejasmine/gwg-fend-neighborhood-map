import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'; // import link to Map component
import FourSquareAPI from './API';

class App extends Component {
	constructor() { // functional requirement: map marker
		super();
		this.state = { // assembles data venue markers on the map
			venues:[], // array of venues
			markers:[], // array of markers
			center:[],  // centers map view based on the location of the marker/markers
			zoom: 12 // designated map zoom scale
		// data stored in this.state will be passed to the Map component
		};
	}
	componentDidMount() {
		FourSquareAPI.search({
			near:"Winter Garden,FL",
			query:"school",
			limit: 12 //which is a Promise
		}).then(results => {
			//deconstruct the response
			const { venues } = results.response;
			const { center } = results.response.geocode.feature.geometry;
			const markers = venues.map(venue => {
				return {
					lat:venue.location.lat,
					lng:venue.location.lng,
					isOpen:false,
					isVisible:true,
				};
			});
			this.setState({ venues, markers, center });
			console.log(results);
		});
	}
	render() {
		return (
			<div className="App">
				<Map {...this.state} />
			</div>
		);
	}
}

export default App;
