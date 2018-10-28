import React, { Component } from 'react';
import VenueList from './VenueList';

export default class SideBar extends Component {
	render() {
		return (
			<div className="sideBar">
				<input type={"search"} id={"searchField"} placeholder={"Filter Venues"} />
				<VenueList {...this.props} />
			</div>
		);
	}
}