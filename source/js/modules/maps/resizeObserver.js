const vp1023 = window.matchMedia('(max-width: 1023px)');

export const resizeObserver = mapObject => {
  vp1023.matches ? mapObject.behaviors.enable('scrollZoom') : mapObject.behaviors.disable('scrollZoom');
  const resizeObserver = new ResizeObserver(() => {
    vp1023.matches ? mapObject.behaviors.enable('scrollZoom') : mapObject.behaviors.disable('scrollZoom');
  });
  resizeObserver.observe(document.documentElement);
};
