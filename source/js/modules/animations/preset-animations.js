import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

const SELECTORS = {
  dataAnimationPreset: '[data-animation-preset]',
  dataAnimationPresetFade: '[data-animation-preset="fade"]',
  dataAnimationPresetFadeIn: '[data-animation-preset="fadeIn"]',
  dataAnimationPresetFadeScale: '[data-animation-preset="fadeScale"]',
  dataAnimationPresetItem: '[data-animation-preset="item"]',
};

const scroller = 'body';

export const initPresetAnimations = () => {
  try {
    const animationBlocks = document.querySelector(SELECTORS.dataAnimationPreset);

    if (!animationBlocks) {return}

    ScrollTrigger.batch(SELECTORS.dataAnimationPresetFade, {
      onEnter: batch => gsap.to(SELECTORS.dataAnimationPresetFade, {
        autoAlpha: 1,
        duration: 0.45,
        stagger: 0.1,
      }),
      start: 'top center',
      scroller: scroller,
    });

    ScrollTrigger.batch(SELECTORS.dataAnimationPresetFadeIn, {
      onEnter: batch => gsap.to(`${SELECTORS.dataAnimationPresetFadeIn} ${SELECTORS.dataAnimationPresetItem}`, {
        autoAlpha: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.1,
      }),
      start: 'top center',
      scroller: scroller,
    });

    ScrollTrigger.batch(SELECTORS.dataAnimationPresetFadeScale, {
      onEnter: batch => gsap.to(`${SELECTORS.dataAnimationPresetFadeScale} ${SELECTORS.dataAnimationPresetItem}`, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.45,
        ease: 'back.out(1.5)',
        stagger: 0.1,
      }),
      start: 'top center',
      scroller: scroller,
    });

  } catch (error) {
    console.log(error);
  }
};
