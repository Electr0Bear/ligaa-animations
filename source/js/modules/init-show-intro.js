export const initShowIntro = () => {
  const intro = document.querySelector('[data-animate="intro"]');

  if (!intro) {return}

  intro.classList.add('is-shown');
};
