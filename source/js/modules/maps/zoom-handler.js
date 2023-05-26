// let ctrlIsPressed = false;

const onMouseWheel = (e, map) => {
  // e.preventDefault();

  // // console.log(e);

  // const mapBlock = e.target.closest('[data-map-container]');
  // const mapMessage = mapBlock.querySelector('[data-map-message]');


  // console.log(map);


  // if (!ctrlIsPressed) {
  //   mapMessage.classList.add('is-shown');
  //   map.behaviors.disable('scrollZoom');


  // } else {
  //   mapMessage.classList.remove('is-shown');
  //   map.behaviors.enable('scrollZoom');

  // }
}

const onCtrlPress = (e) => {

  // if (e.key === 'Control') {
  //   console.log('ctrl pressed');
  //   ctrlIsPressed = true;
  // }
}

const onCtrlRelease = (e) => {

  // if (e.key === 'Control') {
  //   console.log('ctrl up');
  //   ctrlIsPressed = false;
  // }
}

const onMouseEnter = (e, block) => {
  // console.log('enter');
  // block.addEventListener('wheel', (evt) => onMouseWheel(evt, block));
  // window.addEventListener('keydown', onCtrlPress);
  // window.addEventListener('keyup', onCtrlRelease);
}

const onMouseLeave = (e, block) => {
  // console.log('leave');
  // block.removeEventListener('wheel', (evt) => onMouseWheel(evt, block));
  // window.removeEventListener('keydown', onCtrlPress);
  // window.removeEventListener('keyup', onCtrlRelease);
}

export const zoomHandler = (map) => {
  // try {
  //   const mapContainer = document.querySelector('[data-map-container]');
  //   const mapMessage = mapContainer.querySelector('[data-map-message]');

  //   if (!mapMessage) {return}

  //   mapContainer.addEventListener('mouseenter', (e) => onMouseEnter(e, map));
  //   mapContainer.addEventListener('mouseleave', (e) => onMouseLeave(e, map));

  // } catch (error) {
  //   console.log(error);
  // }
};
