import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// Used react-google-maps, which provides a set of React components wrapping the underlying Google Maps JavaScript API v3 instances. The wrapping includes props delegation, events as callbacks, lifecycle management, and auto-mount on map. source: https://tomchentw.github.io/react-google-maps/#installation
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))

// Created Map component that can be called/exported to App.js; Added unique Google Map JavaScript API key
export default class Map extends Component {
	render() {
		return (
			<MyMapComponent
			  isMarkerShown
			  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBdjqDQ_NeuEj-X_1WpvIMLfEOa8n2X1ZU"
			  loadingElement={<div style={{ height: `100%` }} />}
			  containerElement={<div style={{ height: `400px` }} />}
			  mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}