import React, { Component } from 'react';
import ListVenues from './components/ListVenues';
import ListItem from './components/ListItem';

// Sidebar component
export default class SideBar extends Component {
	render() {
		return (
			<div className="sideBar">
				<ListVenues />
			</div>
		);
	}
}