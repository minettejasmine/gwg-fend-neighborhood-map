// Reference: https://foursquare.com/developers/apps
class Helper {
	static baseURL() {
		// for each venue data request, this URL is used to make request; this URL never changes: https://api.foursquare.com/v2/ for requesting data about a venue
		return "https://api.foursquare.com/v2";
	}
	static auth() {
		// authentication function for URL queries
		const keys = {
			// store foursquare API unique client ID and client secret strings
			client_id:"YIZUP0HTO13KIS5IWUN250MSFGEKJVXDUMGLG2RFBATHC5BY",
			client_secret:"XSX45GGMKO12V1C4NG51G24IQCW2UU34D5WDAYEVKUSUS0ZL",
			v: "20181031"
			// this object is will be compiled as a string
		};
		// return keys object parameters as a string literal, which will return a new array, which will be joined with $:
		return Object.keys(keys)
			.map(key => `${key}=${keys[key]}`)
			.join("&")
	}
	static urlCreator(urlParams) {
		// if empty, then return an empty string
		if(!urlParams) {
			return ""
		}
		// if not empty, then return object keys for venue by creating a string literal, which returns an array, joined with &:
		return Object.keys(urlParams)
			.map(key => `${key}=${urlParams[key]}`)
			.join("&")
	}
	static headers() {
		return { // create headers for
			Accept: "application/json"
		};
	}
	// create fetch for three parameters for venue: the endpoint, which is whatever is appended to https://api.foursquare.com/v2, method, and URL parameters
	static simpleFetch(endPoint,method,urlParams) {
		// URL parameters are anything populated into: VENUE_ID from foursquare
		// Use Helper function since the data is static
		let venueData = {
			method,
			headers: Helper.headers()
		};
		return fetch(
			`${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlCreator(urlParams)}`,
			// pass venueData and json data
			venueData
		).then(res => res.json());
	}
}
// this code is only used once - inside this file only - so it needs to export a class that will be used for the endpoints designated to the venue data
export default class FourSquareAPI {
	static search(urlParams) {
		return Helper.simpleFetch("/venues/search", "GET", urlParams);
	}
	static getVenueSpecifics(VENUE_ID){
		return Helper.simpleFetch(`/venues/${VENUE_ID}`,"GET"); // No urlParams needed here
	}
	static getVenuePics(VENUE_ID) {
		return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET"); // No urlParams needed here
	}
}