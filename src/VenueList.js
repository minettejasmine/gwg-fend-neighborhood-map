import React, { Component } from "react";
import VenueItem from "./VenueItem";

export default class venueList extends Component {
	render() {
		return (
			<ol className="venueList">
				<VenueItem/>
			</ol>
		);
	}
}