import {addMainMarker} from './add-main-marker';
import {addMarkers} from './add-markers';
import {fetchPlaces} from './fetch-places';
import {filterHandler} from './filter-handler';
import {resizeObserver} from './resizeObserver';
import {zoomHandler} from './zoom-handler';

const filterForm = document.querySelector('[data-filter-form]');

export const initMap3 = async () => {
  try {
    const map = document.querySelector('#map3');
    if (!map) {return}

    const mapContainer = map.closest('[data-map-container]'),
          mapOverlay = mapContainer.querySelector('[data-map-message]');

    const map3 = new ymaps.Map('map3', {
      center: [55.758926, 37.641266],
      zoom: 17,
      controls: [],
    });

    addMainMarker(map3);
    const places = await fetchPlaces();
    addMarkers(map3, places);
    resizeObserver(map3);
    filterForm.addEventListener('change', (e) => filterHandler(e, map3));
    zoomHandler(map3);

    // const events = ['mouseenter', 'mouseleave', 'wheel'];

    // ymaps.domEvent.manager.group(map)
    //   .add(events, event => {
    //       // console.log(event);
    //       // console.log(event.get('type'));

    //       console.log(map3.behaviors);

    //       if (event.get('type') === 'mouseenter') {
    //         window.addEventListener('keydown', (e) => {
    //           if (e.key === 'Control') {
    //             mapOverlay.classList.remove('is-shown');
    //             map3.behaviors.enable('scrollZoom');
    //           }
    //         });

    //         window.addEventListener('keyup', (e) => {
    //           if (e.key === 'Control') {
    //             map3.behaviors.disable('scrollZoom');
    //           }
    //         });
    //       }

    //       if (event.get('type') === 'wheel') {

    //         const zoomEnabled = map3.behaviors.get('scrollZoom')._behaviorEnabled;

    //         if (zoomEnabled) {
    //           console.log('enabled');

    //           mapOverlay.classList.remove('is-shown');
    //         } else {
    //           console.log('disabled')
    //           mapOverlay.classList.add('is-shown');
    //         }
    //       }
    //   });

    // ymaps.domEvent.manager
    //   .add(map, 'keydown', function (event) {
    //       // событие 'click'.
    //       console.log(event.get('type'));
    //   })

  } catch (error) {
    console.log(error)
  }

};
