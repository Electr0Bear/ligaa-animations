import {addMainMarker} from './add-main-marker';

const vp1023 = window.matchMedia('(max-width: 1023px)');

export const initMap1 = async () => {
  try {
    if (!document.querySelector('#map1')) {return}

    const map1 = new ymaps.Map('map1', {
      center: [55.758926, 37.641266],
      zoom: 17,
      controls: [],
    });

    addMainMarker(map1);

    vp1023.matches ? map1.behaviors.enable('scrollZoom') : map1.behaviors.disable('scrollZoom');
    const resizeObserver = new ResizeObserver(() => {
      vp1023.matches ? map1.behaviors.enable('scrollZoom') : map1.behaviors.disable('scrollZoom');
    });
    resizeObserver.observe(document.documentElement);


  } catch (error) {
    console.log(error);
  }
};
