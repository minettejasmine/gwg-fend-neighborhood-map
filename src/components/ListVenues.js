import React, { Component } from 'react';
import ListItem from './components/ListItem';

// List of venues component for sidebar
export default class ListVenues extends Component {
	render() {
		return (
			<ol className="listVenues">
				<ListItem />
			</ol>
		);
	}
}