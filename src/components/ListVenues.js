import React, { Component } from 'react';
import ListItem from './ListItem';

export default class ListVenues extends Component {
	render() {
		return (
			<ol className="listVenues">
				<ListItem />
			</ol>
		);
	}
}