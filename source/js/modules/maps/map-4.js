import {addMainMarker} from './add-main-marker';
import {addMarkers} from './add-markers';
import {fetchPlaces} from './fetch-places';
import { filterHandler } from './filter-handler';
// import { zoomHandler } from './zoom-handler';

const vp1023 = window.matchMedia('(max-width: 1023px)');
const filterForm = document.querySelector('[data-filter-form]');

export const initMap3 = async () => {
  try {
    if (!document.querySelector('#map4')) {return}

    const map4 = new ymaps.Map('map4', {
      center: [55.758926, 37.641266],
      zoom: 17,
      controls: [],
    });

    addMainMarker(map4);

    const places = await fetchPlaces();
    addMarkers(map4, places);

    vp1023.matches ? map4.behaviors.enable('scrollZoom') : map4.behaviors.disable('scrollZoom');
    const resizeObserver = new ResizeObserver(() => {
      vp1023.matches ? map4.behaviors.enable('scrollZoom') : map4.behaviors.disable('scrollZoom');
    });
    resizeObserver.observe(document.documentElement);

    filterForm.addEventListener('change', (e) => filterHandler(e, map4));

    // zoomHandler(map3);

  } catch (error) {
    console.log(error)
  }

};
