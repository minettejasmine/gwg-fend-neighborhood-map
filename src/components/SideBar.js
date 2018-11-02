import React, { Component } from 'react';
import ListVenues from './ListVenues';

export default class SideBar extends Component {
	render() {
		return (
			<div className="sideBar">
				<input type={"search"} id={"search"} placeholder={"Search Venues"} />
				<ListVenues />
			</div>
		);
	}
}