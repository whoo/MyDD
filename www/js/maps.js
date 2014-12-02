/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 *  called by the webworksready event when the environment is ready
 */
function initApp() {
  startGeolocation();
}


/**
 *  google maps
 */

// initialize the map
function initGoogleMaps() {
  myLocation = new google.maps.LatLng(myLat, myLong);
  var mapOptions = {
    zoom: 16,
    center: myLocation,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false
  };
  googleMap = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
}

// search for nearby places
function initGooglePlaces() {
  searchForPlaces(googlePlacesCallback);
}

// search callback
function googlePlacesCallback(results) {
 navigator.vibrate(100);
  for(var i = 0; i < results.length; i++) {
    createGoogleMarker(results[i]);
  }
}

// create a marker / push-pin
function createGoogleMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: googleMap,
    position: place.geometry.location
  });
}








/**
 *  search for POI
 */

// example of seraching for places using google
function searchForPlaces(callback) {
  var request = {
    location: googleMap.center,
    radius: 2000,
    types: ['bar']
  };

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(googleMap);
  service.search(request, callback);
  return;
}



/**
 *  geolocation
 */

// we use HTML5 Geolocation to pin-point where the user is
function startGeolocation() {
  var options;
  navigator.geolocation.getCurrentPosition(geoSuccess, geoFail, options);
}

// geolocation success callback
function geoSuccess(position) {
  var gpsPosition = position;
  var coordinates = gpsPosition.coords;
  myLat = coordinates.latitude;
  myLong = coordinates.longitude;
  navigator.vibrate(100);
  bb.pushScreen('google.html', 'google');
}

// geolocation failure callback
function geoFail() {
  alert('Error getting your position. Using defaults instead');

  // set default position upon failure
  myLat = 43.465187;
  myLong = -80.522372;
  bb.pushScreen('google.html', 'google');
}
