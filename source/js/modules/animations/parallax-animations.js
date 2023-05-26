import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

const SELECTORS = {
  dataAnimationParallax: '[data-animation-parallax]',
  dataAnimationParallaxFadeScale: '[data-animation-parallax="fadeScale"]',
  dataAnimationParallaxTransformY: '[data-animation-parallax="transformY"]',
  dataAnimationParallaxItem: '[data-animation-parallax="item"]',
};

const vpTouch = window.matchMedia('(pointer: coarse)');
const vp767 = window.matchMedia('(max-width: 767px)');
const scroller = 'body';

export const initParallaxAnimations = () => {
  try {
    const blocks = document.querySelectorAll(SELECTORS.dataAnimationParallax);
    if (!blocks.length) {return}

    const fadeScaleBlocks = document.querySelectorAll(SELECTORS.dataAnimationParallaxFadeScale);

    fadeScaleBlocks.forEach(block => {
      const animatedBlock = block.querySelector(SELECTORS.dataAnimationParallaxItem);

      gsap.set(animatedBlock, {
        opacity: 0,
        scale: 0.7,
      });
      const timeline = gsap.to(animatedBlock, {
        opacity: 1,
        scale: 1,
      });
      ScrollTrigger.create({
        trigger: block,
        scroller: scroller,
        start: 'top bottom',
        end: vp767.matches ? 'center center' : 'top center',
        scrub: vpTouch.matches ? 1 : true,
        animation: timeline,
      });
    });

    const transformYBlocks = document.querySelectorAll(SELECTORS.dataAnimationParallaxTransformY);

    transformYBlocks.forEach(block => {
      const animatedBlock = block.querySelector(SELECTORS.dataAnimationParallaxItem);

      gsap.set(animatedBlock, {
        y: block.dataset.start ? block.dataset.start : '100%',
        z: 0,
      });
      const timeline = gsap.to(animatedBlock, {
        y: 0,
      });
      ScrollTrigger.create({
        trigger: block,
        scroller: scroller,
        start: 'top bottom',
        end: vp767.matches ? 'center center' : 'top center',
        scrub: vpTouch.matches ? 1 : true,
        animation: timeline,
      });
    });

  } catch (error) {
    console.log(error)
  }
};
