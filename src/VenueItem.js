import React, { Component } from 'react';

export default class VenueItem extends Component {
	render() {
		return <li className="venueItem">{this.props.venue.name}</li>;
	}
}