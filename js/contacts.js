function initMap() {
	// Create a map object and specify the DOM element for display.
	const center = {lat: 50.463440, lng: 30.452855};
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: center,
	  scrollwheel: false,
	  zoom: 15,
	  styles: [
	            {
	                "featureType": "all",
	                "elementType": "geometry.fill",
	                "stylers": [
	                    {
	                        "weight": "2.00"
	                    }
	                ]
	            },
	            {
	                "featureType": "all",
	                "elementType": "geometry.stroke",
	                "stylers": [
	                    {
	                        "color": "#9c9c9c"
	                    }
	                ]
	            },
	            {
	                "featureType": "all",
	                "elementType": "labels.text",
	                "stylers": [
	                    {
	                        "visibility": "on"
	                    }
	                ]
	            },
	            {
	                "featureType": "landscape",
	                "elementType": "all",
	                "stylers": [
	                    {
	                        "color": "#f2f2f2"
	                    }
	                ]
	            },
	            {
	                "featureType": "landscape",
	                "elementType": "geometry.fill",
	                "stylers": [
	                    {
	                        "color": "#ffffff"
	                    }
	                ]
	            },
	            {
	                "featureType": "landscape.man_made",
	                "elementType": "geometry.fill",
	                "stylers": [
	                    {
	                        "color": "#ffffff"
	                    }
	                ]
	            },
	            {
	                "featureType": "poi",
	                "elementType": "all",
	                "stylers": [
	                    {
	                        "visibility": "off"
	                    }
	                ]
	            },
	            {
	                "featureType": "road",
	                "elementType": "all",
	                "stylers": [
	                    {
	                        "saturation": -100
	                    },
	                    {
	                        "lightness": 45
	                    }
	                ]
	            },
	            {
	                "featureType": "road",
	                "elementType": "geometry.fill",
	                "stylers": [
	                    {
	                        "color": "#eeeeee"
	                    }
	                ]
	            },
	            {
	                "featureType": "road",
	                "elementType": "labels.text.fill",
	                "stylers": [
	                    {
	                        "color": "#f89321"
	                    }
	                ]
	            },
	            {
	                "featureType": "road",
	                "elementType": "labels.text.stroke",
	                "stylers": [
	                    {
	                        "color": "#ffffff"
	                    }
	                ]
	            },
	            {
	                "featureType": "road",
	                "elementType": "labels.icon",
	                "stylers": [
	                    {
	                        "color": "#ffffff"
	                    },
	                    {
	                        "visibility": "off"
	                    }
	                ]
	            },
	            {
	                "featureType": "road.highway",
	                "elementType": "all",
	                "stylers": [
	                    {
	                        "visibility": "simplified"
	                    }
	                ]
	            },
	            {
	                "featureType": "road.highway",
	                "elementType": "labels.icon",
	                "stylers": [
	                    {
	                        "visibility": "off"
	                    },
	                    {
	                        "color": "#ff0000"
	                    }
	                ]
	            },
	            {
	                "featureType": "road.arterial",
	                "elementType": "labels.icon",
	                "stylers": [
	                    {
	                        "visibility": "off"
	                    }
	                ]
	            },
	            {
	                "featureType": "transit",
	                "elementType": "all",
	                "stylers": [
	                    {
	                        "visibility": "off"
	                    }
	                ]
	            },
	            {
	                "featureType": "transit.station",
	                "elementType": "labels.icon",
	                "stylers": [
	                    {
	                        "visibility": "on"
	                    },
	                    {
	                        "hue": "#ff8700"
	                    },
	                    {
	                        "saturation": "43"
	                    },
	                    {
	                        "lightness": "57"
	                    }
	                ]
	            },
	            {
	                "featureType": "water",
	                "elementType": "all",
	                "stylers": [
	                    {
	                        "color": "#46bcec"
	                    },
	                    {
	                        "visibility": "on"
	                    }
	                ]
	            },
	            {
	                "featureType": "water",
	                "elementType": "geometry.fill",
	                "stylers": [
	                    {
	                        "color": "#c8d7d4"
	                    }
	                ]
	            },
	            {
	                "featureType": "water",
	                "elementType": "labels.text.fill",
	                "stylers": [
	                    {
	                        "color": "#070707"
	                    }
	                ]
	            },
	            {
	                "featureType": "water",
	                "elementType": "labels.text.stroke",
	                "stylers": [
	                    {
	                        "color": "#ffffff"
	                    }
	                ]
	            }
	        ]
	});
	var marker = new google.maps.Marker({
	    position: center,
	    map: map,
	    icon: {
			    url: './img/marker.png',
			    size: new google.maps.Size(31, 56),
			    origin: new google.maps.Point(0, 0),
			    anchor: new google.maps.Point(15, 56)
			  }
	});
}