export const filterMarkers = (map, filter) => {
  const markers = ymaps.geoQuery(map.geoObjects);

  if (filter === 'all') {
    markers.each(marker => marker.options.set('visible', true));
    return;
  }

  markers.each(marker => {
    if ((marker.options.get('placemarkType') !== filter) && (marker.options.get('placemarkType') !== 'mainMarker')) {
      marker.options.set('visible', false);
      marker.balloon.close();
    } else {
      marker.options.set('visible', true);
    }
  });
};
