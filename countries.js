mapboxgl.accessToken = 'pk.eyJ1Ijoib25yY3JwayIsImEiOiJjbHZxYW96ZXUwOTFqMmpycm1ydmxodm03In0.-QAfHKC4v-0m330viawnew';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [25, 33],
    zoom:   2.45,
     projection: 'globe',
    });
	
	const geojson1 = {
  'type': 'FeatureCollection',
  'features': [
  {
  'type': 'Feature',
  'geometry': {
  'type': 'Point',
  'coordinates': [6.8498, 52.2397]
  },
  'properties': {
  'title': 'University of Twente - ITC',
  'description': "MSc in Geoinformatics. (2021-2023)"
  }
  },
  ]
  };
const geojson2 = {
    'type': 'FeatureCollection',
    'features': [
    {
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [36.2110, 41.3718]
    },
    'properties': {
    'title': 'Ondokuz Mayıs University',
    'description': 'BA in Geomatics. (2012-2017)'
    }
    },
    ]
    };
const geojson3 = {
      'type': 'FeatureCollection',
      'features': [
      {
      'type': 'Feature',
      'geometry': {
      'type': 'Point',
      'coordinates': [-97.7341, 30.2849]
      },
      'properties': {
      'title': 'University of Texas at Austin',
      'description': 'Academic English Program. (2020)'
      }
      },
      ]
      };
const geojson4 = {
      'type': 'FeatureCollection',
      'features': [
      {
      'type': 'Feature',
      'geometry': {
      'type': 'Point',
      'coordinates': [14.5058, 46.0569]
      },
      'properties': {
      'title': 'University of Ljubljana',
      'description': 'Erasmus+ Exchange Student (2015-2016)'
      }
      },
      ]
      };    
const geojson5 = {
        'type': 'FeatureCollection',
        'features': [
        {
        'type': 'Feature',
        'geometry': {
        'type': 'Point',
        'coordinates': [14.3913, 50.1030]
        },
        'properties': {
        'title': 'Czech technical university in Prague',
        'description': 'Erasmus+ Internship (2017)'
        }
        },
        ]
        };    

const geojson6 = {
          'type': 'FeatureCollection',
          'features': [
          {
          'type': 'Feature',
          'geometry': {
          'type': 'Point',
          'coordinates': [32.8223, 39.9396]
          },
          'properties': {
          'title': 'Gazi University',
          'description': 'Academic English Program. (2019)'
          }
          },
          ]
          }; 
          
    // add markers to map
    for (const feature of geojson1.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker2';


    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    )
    )
    .addTo(map);
    };
  
    // add markers to map
    for (const feature of geojson2.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker1';


    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    )
    )
    .addTo(map);
    };
  
    // add markers to map
    for (const feature of geojson3.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker3';

    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    )
    )
    .addTo(map);
    };
  
    // add markers to map
    for (const feature of geojson4.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker4';

    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    )
    )
    .addTo(map);
    };
  

    // add markers to map
    for (const feature of geojson5.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker5';

    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    )
    )
    .addTo(map);
    };
  
  
    // add markers to map
    for (const feature of geojson6.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker6';

    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    )
    )
    .addTo(map);
    };
  
  
    map.on('style.load', () => {
        map.setFog({
          "range": [0.8, 8],
          "color": "#dc9f9f",
          "horizon-blend": 0.25,
          "high-color": "#245bde",
          "space-color": "#000000",
          "star-intensity": 0.75
        });
    });
  
      map.on('load', function() {


          map.addLayer(
            {
              id: 'state-boundaries',
              source: {
                type: 'vector',
                url: 'mapbox://onrcrpk.0a72kw62',
              },
              'source-layer': 'stateData-5u6pjp',
              type: 'fill',
              paint: {
                'fill-color': '#4ee44e',
                'fill-opacity': 0.55,
                'fill-outline-color': "#FEDD00",
                
              },
            },
            'country-label'
          );

          map.setFilter(
            'state-boundaries',
            [
              'all',
              ['match', ['get', 'name'], ['Texas'], true, false]
            ]
          );


        map.addLayer(
          {
            id: 'country-boundaries',
            source: {
              type: 'vector',
              url: 'mapbox://mapbox.country-boundaries-v1',
            },
            'source-layer': 'country_boundaries',
            type: 'fill',
            paint: {
              'fill-color': '#4ee44e',
              'fill-opacity': 1,
              'fill-outline-color': "#045dbb",
              
            },
          },
          'country-label'
        );
          
          
     map.setFilter(
  'country-boundaries',
  ['match', ['get', 'iso_3166_1_alpha_3'], 
    ['NLD', 'ITA', 'TUR', 'DEU', 'SVN', 'CZE', 'POL', 'HRV', 'HUN', 'SVK', 'AUT', 'SRB', 'BEL'], 
    true, false
  ]
);

console.log(map.getStyle().sources);


        map.on('click', function (e) {
  let features = map.queryRenderedFeatures(e.point, { layers: ['country-boundaries'] });
  if (features.length) {
    console.log(features[0].properties);
  }
});

		
  // The following values can be changed to control rotation speed:
        
  // At low zooms, complete a revolution every two minutes.
  const secondsPerRevolution = 70;
  // Above zoom level 5, do not rotate.
  const maxSpinZoom = 5;
  // Rotate at intermediate speeds between zoom levels 3 and 5.
  const slowSpinZoom = 3;
   
  let userInteracting = false;
  let spinEnabled = false;
   
  function spinGlobe() {
  const zoom = map.getZoom();
  if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
  let distancePerSecond = 360 / secondsPerRevolution;
  if (zoom > slowSpinZoom) {
  // Slow spinning at higher zooms
  const zoomDif =
  (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
  distancePerSecond *= zoomDif;
  }
  const center = map.getCenter();
  center.lng -= distancePerSecond;
  // Smoothly animate the map over one second.
  // When this animation is complete, it calls a 'moveend' event.
  map.easeTo({ center, duration: 1000, easing: (n) => n });
  }
  }
   
  // Pause spinning on interaction
  map.on('mousedown', () => {
  userInteracting = true;
  });
   
  // Restart spinning the globe when interaction is complete
  map.on('mouseup', () => {
  userInteracting = false;
  spinGlobe();
  });
   
  // These events account for cases where the mouse has moved
  // off the map, so 'mouseup' will not be fired.
  map.on('dragend', () => {
  userInteracting = false;
  spinGlobe();
  });
  map.on('pitchend', () => {
  userInteracting = false;
  spinGlobe();
  });
  map.on('rotateend', () => {
  userInteracting = false;
  spinGlobe();
  });
   
  // When animation is complete, start spinning if there is no ongoing interaction
  map.on('moveend', () => {
  spinGlobe();
  });
   
  document.getElementById('btn-spin').addEventListener('click', (e) => {
  spinEnabled = !spinEnabled;
  if (spinEnabled) {
  spinGlobe();
  e.target.innerHTML = 'Stop Rotation';
  } else {
  map.stop(); // Immediately end ongoing animation
  e.target.innerHTML = 'Rotate';
  }
  });
   
  spinGlobe();
      });
      
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl({
  // Hide compass
  showCompass: false
}), 'top-left');
