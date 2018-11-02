import React, { Component } from 'react';
// ListItem component data will populate and update into the ListVenues component

export default class ListItem extends Component {
	render() {
		return (
			<li
				className="listItem"
				onClick={() => this.props.handleListItemClick(this.props)}
			>
				{this.props.name}
			</li>
		);
	}
}