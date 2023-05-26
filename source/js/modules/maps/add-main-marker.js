export const addMainMarker = (map) => {
  const mainPin = new ymaps.Placemark(map.getCenter(), {
    hintContent: 'Моя великолепная метка',
  }, {
    placemarkType: 'mainMarker',
    iconLayout: 'default#image',
    iconImageHref: 'img/map/pins/pin-main.png',
    iconImageSize: [80, 80],
    iconImageOffset: [-40, -80],
  });

  map.geoObjects.add(mainPin);
};
