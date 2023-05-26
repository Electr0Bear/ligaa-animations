import {addMainMarker} from './add-main-marker';

export const removeMarkers = (map) => {
  map.geoObjects.removeAll();

  addMainMarker(map);
};
