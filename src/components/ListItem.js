import React, { Component } from 'react';
// ListItem component data will populate and update into the ListVenues component


export default class ListItem extends Component {
	render() {
		// ListItem component data include the FourSquare icon for each venue item in the list
		// The venue item name will be next to the icon
		return (
			<li
				className="listItem"
				onClick={() => this.props.handleListItemClick(this.props)}
				>
					<img
						src={
							this.props.categories[0].icon.prefix+
							"32"+
							this.props.categories[0].icon.suffix
						}
						alt={this.props.categories[0].name}
					/>
				{this.props.name}
			</li>
		);
	}
}