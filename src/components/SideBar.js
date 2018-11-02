import React, { Component } from 'react';
import ListVenues from './ListVenues'; // Import data from List Venues component

export default class SideBar extends Component {
	render() {
		return (
			<div className="sideBar">
				<input type={"search"} id={"search"} placeholder={"Search Venues"} />
				<ListVenues {...this.props} handleListItemClick={this.props.handleListItemClick}/>
			</div>
		);
	}
}