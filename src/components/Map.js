/* global google */
import React, { Component } from 'react';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
	InfoWindow
} from 'react-google-maps';

// Used react-google-maps, which provides a set of React components wrapping the underlying Google Maps JavaScript API v3 instances. The wrapping includes props delegation, events as callbacks, lifecycle management, and auto-mount on map. source: https://tomchentw.github.io/react-google-maps/#installation

// Then created Map component that can be called/exported to App.js; Added unique Google Map JavaScript API key
// populate Map component variable with venue marker data props passed from ...this.state in App.js
// Added map marker animation to bounce and drop onto the map when appropriate

const MyMapComponent = withScriptjs(
	withGoogleMap(props => (
	  	<GoogleMap
		    defaultZoom={8}
		    zoom={props.zoom}
		    defaultCenter={{ lat: -34.397, lng: 150.644 }}
		  	center={props.center}
  		>
	    	{props.markers &&
	    		props.markers.filter(marker => marker.isVisible).map((marker,index,arr) => {
	    			const venueInfo = props.venues.find(venue => venue.id === marker.id);
	    			return (
	    				<Marker
	    					key={index}
	    					position={{ lat: marker.lat, lng: marker.lng }}
	    					onClick={() => props.handleMarkerClick(marker)}
	    					animation={arr.length === 1 ? google.maps.Animation.BOUNCE : google.maps.Animation.DROP}
    					>
	    					{marker.isOpen &&
	    						venueInfo.bestPhoto && (
		    						<InfoWindow>
		    							<React.Fragment>
		    								<img
			    								src={`${venueInfo.bestPhoto.prefix}150x150${venueInfo.bestPhoto.suffix}`} alt={"View Of Venue"}
		    								/>
		    								<p>{venueInfo.name}</p>
		    							</React.Fragment>
		    						</InfoWindow>
								)}
						</Marker>
					);
				})}
	  </GoogleMap>
	))
);

export default class Map extends Component {
	render() {
		return (
			<MyMapComponent
				{...this.props}
			  isMarkerShown
			  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBdjqDQ_NeuEj-X_1WpvIMLfEOa8n2X1ZU"
			  loadingElement={<div style={{ height: `100%` }} />}
			  containerElement={<div style={{ height: `100%`, width: `75%` }} />}
			  mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}