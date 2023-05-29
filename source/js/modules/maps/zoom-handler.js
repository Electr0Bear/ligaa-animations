const vp767 = window.matchMedia('(max-width: 767px)');

let overlayIsShown;
let timeout;

const hideOverlay = (mapOverlay) => {
  if (overlayIsShown) {
    mapOverlay.classList.remove('is-shown');
    overlayIsShown = false;
  }
};

const showOverlay = (mapOverlay) => {
  mapOverlay.classList.add('is-shown');
  clearTimeout(timeout);
  timeout = setTimeout(() => hideOverlay(mapOverlay), 2000);
  overlayIsShown = true;
};

const onClick = (e, mapOverlay) => {
  overlayIsShown = true;
  hideOverlay(mapOverlay);
};

const onMouseWheel = (e, mapOverlay, mapObject) => {
  mapObject.behaviors.get('scrollZoom')._behaviorEnabled ? hideOverlay(mapOverlay) : showOverlay(mapOverlay);
};

const onCtrlPress = (mapOverlay, mapObject, e) => {
  if (e.key === 'Control') {
    mapOverlay.classList.remove('is-shown');
    mapObject.behaviors.enable('scrollZoom');
  }
};

const onCtrlRelease = (mapOverlay, mapObject, e) => {
  if (e.key === 'Control') {
    mapObject.behaviors.disable('scrollZoom');
  }
};

const onMouseEnter = (e, mapContainer, mapObject) => {
  const mapOverlay = mapContainer.querySelector('[data-map-message]');

  mapContainer.addEventListener('wheel', (evt) => onMouseWheel(evt, mapOverlay, mapObject));
  mapContainer.addEventListener('click', (evt) => onClick(evt, mapOverlay));
  document.addEventListener('keydown', onCtrlPress.bind(document, mapOverlay, mapObject));
  document.addEventListener('keyup', onCtrlRelease.bind(document, mapOverlay, mapObject));
};

const onMouseLeave = (e, mapContainer, mapObject) => {
  const mapOverlay = mapContainer.querySelector('[data-map-message]');

  overlayIsShown = true;
  hideOverlay(mapOverlay);

  mapContainer.removeEventListener('wheel', (evt) => onMouseWheel(evt, mapOverlay, mapObject));
  mapContainer.removeEventListener('click', (evt) => onClick(evt, mapOverlay));
  document.removeEventListener('keydown', onCtrlPress.bind(document, mapOverlay, mapObject));
  document.removeEventListener('keyup', onCtrlRelease.bind(document, mapOverlay, mapObject));
};

export const zoomHandler = (mapObject) => {
  try {
    if (vp767.matches) {return}

    const mapContainer = document.querySelector('[data-map-container]');
    const mapMessage = mapContainer.querySelector('[data-map-message]');

    if (!mapContainer || !mapMessage) {return}

    mapContainer.addEventListener('mouseenter', (e) => onMouseEnter(e, mapContainer, mapObject));
    mapContainer.addEventListener('mouseleave', (e) => onMouseLeave(e, mapContainer, mapObject));

  } catch (error) {
    console.log(error);
  }

  // const mapContainer = document.querySelector('[data-map-container]'),
  //       mapMessage = mapContainer.querySelector('[data-map-message]');

  // if (!mapContainer || !mapMessage) {return}

  // const events = ['mouseenter', 'mouseleave', 'wheel'];

  // const zoomEvents = ymaps.domEvent.manager.group(mapObject)
  //     .add(events, event => {
  //       // console.log(event);
  //       // console.log(event.get('type'));

  //       console.log(mapObject.behaviors);

  //       if (event.get('type') === 'mouseenter') {
  //         window.addEventListener('keydown', (e) => {
  //           if (e.key === 'Control') {
  //             mapOverlay.classList.remove('is-shown');
  //             map3.behaviors.enable('scrollZoom');
  //           }
  //         });

  //         window.addEventListener('keyup', (e) => {
  //           if (e.key === 'Control') {
  //             map3.behaviors.disable('scrollZoom');
  //           }
  //         });
  //       }

  //       if (event.get('type') === 'wheel') {

  //         const zoomEnabled = map3.behaviors.get('scrollZoom')._behaviorEnabled;

  //         if (zoomEnabled) {
  //           console.log('enabled');

  //           mapOverlay.classList.remove('is-shown');
  //         } else {
  //           console.log('disabled')
  //           mapOverlay.classList.add('is-shown');
  //         }
  //       }
  //     });
};
