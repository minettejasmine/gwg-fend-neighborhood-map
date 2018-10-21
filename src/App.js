import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    venues: []
  }

  componentDidMount() {
    this.getVenues()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBdjqDQ_NeuEj-X_1WpvIMLfEOa8n2X1ZU&callback=initMap")
    window.initMap = this.initMap
  }

getVenues = () => {
  const endPoint = "https://api.foursquare.com/v2/venues/explore?"
  const parameters = {
    client_id: "YIZUP0HTO13KIS5IWUN250MSFGEKJVXDUMGLG2RFBATHC5BY",
    client_secret: "XSX45GGMKO12V1C4NG51G24IQCW2UU34D5WDAYEVKUSUS0ZL",
    query: "food",
    near: "Sydney",
    v: "20181020"
  }

  axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({
        venues: response.data.response.groups[0].items
      }, this.renderMap())
    })
    .catch(error => {
      console.log("Error! " + error)
    })
}


  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    })

    this.state.venues.map(myVenue => {
      var marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat, lng:  myVenue.venue.location.lng},
        map: map,
        title: myVenue.venue.name
      })
    })


  }

  render() {
    return (
      <main>
         <div id="map"></div>

      </main>

    );
  }
}

/*

<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    async defer></script>

*/

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}


export default App;
