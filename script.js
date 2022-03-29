window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);
      
};

const staticLoadPlaces = () => {
    return [
        {
            name: "Rinconcito cusqueño",
            location: {
                lat: 40.41085, // add here latitude if using static data
                lng: -3.730763, // add here longitude if using static data
            }
        },
        {
            name: "Droguería",
            location: {
                lat: 40.411995, // add here latitude if using static data
                lng: -3.732379, // add here longitude if using static data
            }
        },
        {
            name: "Vinoteca la Herradura",
            location: {
                lat: 40.410828, // add here latitude if using static data
                lng: -3.735749, // add here longitude if using static data
            }
        },
        {
            name: "La Quinta del Sordo",
            location: {
                lat: 40.411177, // add here latitude if using static data
                lng: -3.729324, // add here longitude if using static data
            }
        },
        {
            name: "Tapas Restaurant",
            location: {
                lat: 40.415027, // add here latitude if using static data
                lng: -3.731149, // add here longitude if using static data
            }
        },
        {
            name: 'Grocery Store / Supermarket',
            location: {
                lat: 40.41225,
                lng: -3.732853,
            }
        },
        {
            name: "Consultorio médico",
            location: {
                lat: 40.408831, // add here latitude if using static data
                lng: -3.732915, // add here longitude if using static data
            }
        }, 
        {
            name: "Clínica Dental Orión",
            location: {
                lat: 40.411823, // add here latitude if using static data
                lng: -3.732956, // add here longitude if using static data
            }
        },
        {
            name: "Centro de Salud Pso de Extremadura",
            location: {
                lat: 40.410934, // add here latitude if using static data
                lng: -3.735184, // add here longitude if using static data
            }
        },
        {
            name: "Salesianos San Miguel Arcángel",
            location: {
                lat: 40.410308, // add here latitude if using static data
                lng: -3.733733, // add here longitude if using static data
            }
        },
        {
            name: "Colegio San Miguel Arcangel",
            location: {
                lat: 40.409783, // add here latitude if using static data
                lng: -3.734045, // add here longitude if using static data
            }
        },
        {
            name: "Colegio Cristo Rey",
            location: {
                lat: 40.412443, // add here latitude if using static data
                lng: -3.730322, // add here longitude if using static data
            }
        },
        {
            name: "Consultorio médico",
            location: {
                lat: 40.408831, // add here latitude if using static data
                lng: -3.732915, // add here longitude if using static data
            }
        }
    
    ]
    
};

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;
       let name = place.name

       let model = document.createElement('a-entity');
       model.setAttribute('gps-projected-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', './assets/map_pointer.gltf');
       model.setAttribute('rotation', '0 180 0');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('scale', '10 10 10');

        let tag = document.createElement('a-text');
        tag.setAttribute('gps-projected-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        tag.setAttribute('scale', '20 20 20');
        tag.setAttribute('value', `${name}`);

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });
       tag.addEventListener('loaded', () => {
        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        console.log('aqui')
    });
    scene.appendChild(tag);
       scene.appendChild(model);
       
   });
}