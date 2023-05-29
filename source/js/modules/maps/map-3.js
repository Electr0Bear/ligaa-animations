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

  } catch (error) {
    console.log(error)
  }
};
