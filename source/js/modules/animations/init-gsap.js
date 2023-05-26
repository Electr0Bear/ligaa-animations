import {gsap} from 'gsap';
import {ScrollToPlugin} from 'gsap/dist/ScrollToPlugin';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

export const initGSAP = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
};
