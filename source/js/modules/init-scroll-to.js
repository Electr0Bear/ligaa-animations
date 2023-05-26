import {gsap} from 'gsap';

const onLinkClick = (e) => {
  try {
    if (!e.target.closest('[data-scroll-to]')) {return}

    e.preventDefault();

    const btn = e.target.closest('[data-scroll-to]');
    const href = btn.getAttribute('href');

    gsap.to(window, {
      duration: 0.7,
      scrollTo: href,
      ease: 'power2',
    });

  } catch (error) {
    console.log(error);
  }
};

export const initScrollTo = () => {
  document.addEventListener('click', onLinkClick);
};

