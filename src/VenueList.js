import React, { Component } from 'react';
import VenueItem from './VenueItem';

export default class venueList extends Component {
	render() {
		return (
			<ol className="venueList">
				{this.props.venues &&
					this.props.venues.map((venue,idx) => (
						<VenueItem key={idx} {...venue} />
				))}
			</ol>
		);
	}
}