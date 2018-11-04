import React, { Component } from 'react';
import ListItem from './ListItem'; // import data from ListItems component

// Map over the list item data when it is clicked in the sidebar
export default class ListVenues extends Component {
	render() {
		return (
			<ol className="listVenues">
				{this.props.venues &&
					this.props.venues.map((venue, index) => (
						<ListItem
							key={index}
							{...venue}
							handleListItemClick={this.props.handleListItemClick}
						/>
					))}
			</ol>
		);
	}
}