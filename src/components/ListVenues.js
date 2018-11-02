import React, { Component } from 'react';
import ListItem from './ListItem'; // import data from ListItems component

export default class ListVenues extends Component {
	render() {
		return (
			<ol className="listVenues">
				{this.props.venues &&
					this.props.venues.map((venue, index) => (
						<ListItem key={index} {...venue} />
					))}
			</ol>
		);
	}
}