import React, { Component } from 'react';

export default class VenueItem extends Component {
	render() {
		return (
			<li className="venueItem" onClick={() => this.props.handleVenueItemClick(this.props)}>{this.props.venue.name}
			</li>
		);
	}
}