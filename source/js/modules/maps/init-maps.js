import {initMap1} from './map-1';
import {initMap2} from './map-2';
import {initMap3} from './map-3';
import {initMap4} from './map-4';

export const initMaps = () => {
  try {
    ymaps.ready(() => {
      initMap1();
      initMap2();
      initMap3();
      initMap4();
    });

  } catch (error) {
    console.log(error);
  }
};
