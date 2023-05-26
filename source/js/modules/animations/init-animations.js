import {initParallaxAnimations} from './parallax-animations';
import {initPresetAnimations} from './preset-animations';
import { ScrollSlider } from './scroll-slider';
import {initTimelineAnimations} from './timeline-animations';

export const initAnimations = () => {
  initTimelineAnimations();
  initPresetAnimations();
  initParallaxAnimations();

  const scrollSlider = new ScrollSlider();
  scrollSlider.init();
  // const resizeObserver = new ResizeObserver(() => {
  //   initTimeline(); // вызываем по ресайзу
  // });
  // resizeObserver.observe(document.documentElement); // отслеживаем изменения размера корневого тега
};
