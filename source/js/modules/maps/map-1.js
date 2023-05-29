import {addMainMarker} from './add-main-marker';
import {resizeObserver} from './resizeObserver';

export const initMap1 = async () => {
  try {
    const map = document.querySelector('#map1');
    if (!map) {return}

    const map1 = new ymaps.Map('map1', {
      center: [55.758926, 37.641266],
      zoom: 17,
      controls: [],
    });

    addMainMarker(map1);
    resizeObserver(map1);

  } catch (error) {
    console.log(error);
  }
};
