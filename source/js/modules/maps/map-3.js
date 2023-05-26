import {addMainMarker} from './add-main-marker';
import {addMarkers} from './add-markers';
import {fetchPlaces} from './fetch-places';
import { filterHandler } from './filter-handler';
// import {removeMarkers} from './remove-markers';
// import { zoomHandler } from './zoom-handler';

const vp1023 = window.matchMedia('(max-width: 1023px)');
const filterForm = document.querySelector('[data-filter-form]');

export const initMap3 = async () => {
  try {
    if (!document.querySelector('#map3')) {return}

    const map3 = new ymaps.Map('map3', {
      center: [55.758926, 37.641266],
      zoom: 17,
      controls: [],
    });

    addMainMarker(map3);

    const places = await fetchPlaces();
    addMarkers(map3, places);

    vp1023.matches ? map3.behaviors.enable('scrollZoom') : map3.behaviors.disable('scrollZoom');
    const resizeObserver = new ResizeObserver(() => {
      vp1023.matches ? map3.behaviors.enable('scrollZoom') : map3.behaviors.disable('scrollZoom');
    });
    resizeObserver.observe(document.documentElement);

    filterForm.addEventListener('change', (e) => filterHandler(e, map3));

    // zoomHandler(map3);

  } catch (error) {
    console.log(error)
  }

};
