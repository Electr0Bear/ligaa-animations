import {initMap1} from './map-1';
import {initMap2} from './map-2';
import {initMap3} from './map-3';

export const initMaps = () => {
  try {
    ymaps.ready(() => {
      initMap1();
      initMap2();
      initMap3();
    });

  } catch (error) {
    console.log(error);
  }
};
