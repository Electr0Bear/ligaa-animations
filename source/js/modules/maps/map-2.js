import {addMainMarker} from './add-main-marker';
import {addMarkers} from './add-markers';
import {fetchPlaces} from './fetch-places';
import {resizeObserver} from './resizeObserver';

export const initMap2 = async () => {
  try {
    const map = document.querySelector('#map2');
    if (!map) {return}

    const map2 = new ymaps.Map('map2', {
      center: [55.758926, 37.641266],
      zoom: 17,
      controls: [],
    });

    addMainMarker(map2);
    const places = await fetchPlaces();
    addMarkers(map2, places);
    resizeObserver(map2);

  } catch (error) {
    console.log(error)
  }

};
