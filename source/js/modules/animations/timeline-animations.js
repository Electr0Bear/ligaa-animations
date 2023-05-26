import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

const vpTouch = window.matchMedia('(pointer: coarse)');
const scroller = 'body';

const SELECTORS = {
  dataSectionAnimation: '[data-section-animation]',
  dataAnimation: '[data-animation]',
}

const getObjectFromString = (str) => {
  if (str.indexOf('clipPath') !== -1) {
    const arr = str.split(':');
    return {
      clipPath: arr[1],
    };
  }
  return str.split(',').map(function (keyVal) {
    return keyVal.split(':').map(function (_) {
      return _.trim();
    });
  }).reduce(function (accumulator, currentValue) {
    accumulator[currentValue[0]] = isNaN(Number(currentValue[1])) ? currentValue[1] : Number(currentValue[1]);
    return accumulator;
  }, {});
};

const getAnimationObject = (el) => {
  let obj = {};
  obj.direction = el.dataset.animationDirection;
  obj.duration = +el.dataset.animationDuration || 1;
  obj.delay = +el.dataset.animationDelay || 0;
  obj.position = el.dataset.position;
  obj.element = el;
  obj.animation = getObjectFromString(el.dataset.animation.toString());
  return obj;
};

export const initTimelineAnimations = () => {
  try {
    const sections = document.querySelectorAll(SELECTORS.dataSectionAnimation);

    if (!sections) {return}

    sections.forEach(section => {
      const blocks = gsap.utils.toArray(section.querySelectorAll(SELECTORS.dataAnimation));

      const timeline = gsap.timeline({
        scrollTrigger: {
          scroller: scroller,
          trigger: section,
          start: section.dataset.start,
          end: section.dataset.end,
          scrub: vpTouch.matches ? 1 : true,
        }
      });

      blocks.forEach(block => {
        let obj = getAnimationObject(block);

        if (obj.position) {
          timeline[obj.direction](obj.element, {
            duration: obj.duration,
            delay: obj.delay,
            ...obj.animation,
          }, obj.position);

        } else {
          timeline[obj.direction](obj.element, {
            duration: obj.duration,
            delay: obj.delay,
            ...obj.animation,
          });
        }
      });
    });

  } catch (error) {
    console.log(error);
  }
  // if (timeline) { // если таймлайн создан
  //   timeline.seek(0).kill(); // отматываем к началу и удаляем
  // }

  // timeline = gsap.timeline({paused: true}); // инициализируем таймлайн
  // timeline.to('.box', {rotate: 270}); // задаем анимацию
  // ScrollTrigger.create({
  //   scroller: nativeScroller, // указываем контейнер со скроллом (локо или нативный)
  //   trigger: '.box',
  //   start: 'top bottom',
  //   end: 'top center',
  //   scrub: true, // без scrub анимация не будет присоединена к скроллу
  //   animation: timeline, // наша анимация
  // });

  // timeline = gsap.timeline({paused: true}); // инициализируем таймлайн
  // timeline.to('[data-animate="intro"] .container', {
  //   scale: '1',
  //   opacity: 1,
  //   rotateX: '0deg',
  //   y: '0px',
  // });
  // timeline.to('[data-animate="intro"] .container', {
  //   scale: 0.75,
  //   opacity: 0.5,
  //   rotateX: '5deg',
  //   y: '-10vh',
  // }); // задаем анимацию
  // ScrollTrigger.create({
  //   scroller: nativeScroller, // указываем контейнер со скроллом (локо или нативный)
  //   trigger: '[data-animate="intro"] .container',
  //   start: 'top center',
  //   end: '100%',
  //   scrub: true, // без scrub анимация не будет присоединена к скроллу
  //   animation: timeline, // наша анимация
  // });
};
