import React, { Component } from 'react';
import logo from './foursquare-logo.svg';
import ListVenues from './ListVenues'; // Import data from List Venues component

export default class SideBar extends Component {
	constructor() {
		super();
		this.state = {
			query:"", // Passed to handleSearchVenues
			venues:[] // Create array of venues to hold the results of the searches
		};
	}
	// In search venue
	handleSearchVenues = () => {
		if(this.state.query.trim() !== "") {
			const venues = this.props.venues.filter(venue => venue.name
				.toLowerCase()
				.includes(this.state.query.toLowerCase())
			);
			console.log(venues);
			return venues;
		}
		return this.props.venues;
	};
	handleUpdate = e => {
		this.setState({ query: e.target.value });

		// Hide markers when user starts typing in the search field, by mapping over the venues. Then find the corresponding marker for the venue that is a result of the search.
		const markers = this.props.venues.map(venue => {
			const isMatched = venue.name
				.toLowerCase()
				.includes(e.target.value.toLowerCase());
			const marker = this.props.markers.find(marker => marker.id === venue.id);
			// Hide all map markers that do not match the search result; Show the marker that matches the search result
			if (isMatched) {
				marker.isVisible = true;
			} else {
				marker.isVisible = false;
			}
			return marker;
		});
		this.props.updateSuperState({ markers });
	};

	render() {
		return (
			<div className="sideBar" aria-role="Sidebar" tabIndex="2">
				<header className="App-header" aria-role="Sidebar Header" tabIndex="3">
          			<img src={logo} className="App-logo" alt="API source logo" aria-role="Foursquare API Source Logo" tabIndex="4"/>
       			</header>
					<input className="searchbox" aria-role="Search Text Field" tabIndex="5"
						type={"search"}
						id={"search"}
						placeholder={"Search..."}
						onChange={this.handleUpdate}
					/>
				<ListVenues
					{...this.props}
					venues={this.handleSearchVenues()}
					handleListItemClick={this.props.handleListItemClick}
				/>
			</div>
		);
	}
}