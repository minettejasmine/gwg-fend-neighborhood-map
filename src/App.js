import React, { Component } from 'react';
import './App.css';
import Map from './components/Map'; // import link to Map component
import FourSquareAPI from './API';
import SideBar from './components/SideBar';

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
	closeMapMarkers = () => {
		const markers = this.state.markers.map(marker => {
			marker.isOpen = false;
			return marker;
		})
		this.setState({ markers: Object.assign(this.state.markers, markers) });
		// All other markers will be closed via handleMarkerClick when one marker is clicked
	}
	handleMarkerClick = marker => {
		this.closeMapMarkers();
		marker.isOpen = true;
		this.setState({markers: Object.assign(this.state.markers, marker) });
		// Copies marker inside the list of markers via Object.assign
		// handleMarkerClick is then passed down to the Map
		const venue = this.state.venues.find(venue => venue.id === marker.id);

		FourSquareAPI.getVenueSpecifics(marker.id).then(res => {
			const newVenue = Object.assign(venue, res.response.venue);
				this.setState({venues: Object.assign(this.state.venues, newVenue)});
			console.log(newVenue);
		});
	};

	componentDidMount() {
		FourSquareAPI.search({
			near:"Park City UT",
			query:"coffee",
			limit: 10 // which is a Promise
		}).then(results => {
			//deconstruct the response
			const { venues } = results.response;
			const { center } = results.response.geocode.feature.geometry;
			const markers = venues.map(venue => {
				return {
					lat: venue.location.lat,
					lng: venue.location.lng,
					isOpen: false,
					isVisible: true,
					// Associate marker with a venue
					id: venue.id
				};
			});
			this.setState({ venues, markers, center });
			console.log(results);
		});
	}
	render() {
		return (
			<div className="App">
				<SideBar {...this.state} />
				<Map {...this.state} handleMarkerClick={this.handleMarkerClick}/>
			</div>
		);
	}
}

export default App;
