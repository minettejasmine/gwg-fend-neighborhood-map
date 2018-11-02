import React, { Component } from 'react';
import VenueList from './components/VenueList';

export default class SideBar extends Component {
	render() {
		return (
			<div className="sideBar">
				<VenueList />
			</div>
		);
	}
}