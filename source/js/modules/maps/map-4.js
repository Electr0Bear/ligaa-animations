import {addCluster} from './add-clusters';
import {addMainMarker} from './add-main-marker';
import {fetchPlaces} from './fetch-places';
import {resizeObserver} from './resizeObserver';
import {zoomHandler} from './zoom-handler';


export const initMap4 = async () => {
  try {
    const map = document.querySelector('#map4');
    if (!map) {return}

    const map4 = new ymaps.Map('map4', {
      center: [55.758926, 37.641266],
      zoom: 17,
      controls: [],
    });

    addMainMarker(map4);
    const places = await fetchPlaces();
    addCluster(map4, places);
    resizeObserver(map4);
    zoomHandler(map4);

  } catch (error) {
    console.log(error)
  }
};
