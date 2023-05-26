import {addMainMarker} from './add-main-marker';
import {addMarkers} from './add-markers';
import {fetchPlaces} from './fetch-places';

const vp1023 = window.matchMedia('(max-width: 1023px)');

export const initMap2 = async () => {
  try {
    if (!document.querySelector('#map2')) {return}

    const map2 = new ymaps.Map('map2', {
      center: [55.758926, 37.641266],
      zoom: 17,
      controls: [],
    });

    addMainMarker(map2);

    const places = await fetchPlaces();
    addMarkers(map2, places);


    vp1023.matches ? map2.behaviors.enable('scrollZoom') : map2.behaviors.disable('scrollZoom');
    const resizeObserver = new ResizeObserver(() => {
      vp1023.matches ? map2.behaviors.enable('scrollZoom') : map2.behaviors.disable('scrollZoom');
    });
    resizeObserver.observe(document.documentElement);



  } catch (error) {
    console.log(error)
  }

};
