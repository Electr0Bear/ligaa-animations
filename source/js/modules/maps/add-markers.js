export const addMarkers = (map, places) => {
  let placePins = [];

  places.forEach(place => {
    const coordinates = [place.lat, place.lng];
    const pin = `img/map/pins/pin${place.type}.png`;
    const balloonBody =
      `<div class="map-balloon">
        <div class="map-balloon__photo">
          <img src="img/map/photos/${place.photo}.jpg" wid/>
        </div>
        <div class="map-balloon__content">
          <p class="map-balloon__text">${place.text}</p>
          <p class="map-balloon__name">${place.name}</p>
          <p class="map-balloon__address">${place.address}</p>
        </div>
        <button class="map-balloon__close-button" aria-label="Закрыть баллун">
          <svg width="12" height="12" aria-hidden="true">
            <use xlink:href="#icon-close"></use>
          </svg>
        </button>
      </div>`;

    const customBalloonLayout = ymaps.templateLayoutFactory.createClass(balloonBody, {
      build: function () {
        this.constructor.superclass.build.call(this);
        this._$element = this.getParentElement().querySelector(".map-balloon");
        this._$closeBtn = this._$element.querySelector(".map-balloon__close-button");
        this.onCloseClick = this.onCloseClick.bind(this);
        this._$closeBtn.addEventListener("click", this.onCloseClick);
      },
      onCloseClick: function (e) {
        e.preventDefault();
        map.balloon.close();
      },
    });

    const placePin = new ymaps.Placemark(coordinates, {
      hintContent: place.name,
      balloonContent: balloonBody,
      name: place.name,
      text: place.text,
      type: place.type,
      photo: place.photo,
      address: place.address,
    }, {
      placemarkType: place.type,
      iconLayout: 'default#image',
      iconImageHref: pin,
      iconImageSize: [60, 60],
      iconImageOffset: [-30, -60],
      hideIconOnBalloonOpen: false,
      balloonLayout: customBalloonLayout,
      balloonOffset: [0, -160],
    });

    placePins.push(placePin);
  });

  ymaps.geoQuery(placePins).addToMap(map);
};
