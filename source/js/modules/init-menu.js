import {ScrollLock} from '../utils/scroll-lock';
// import { locomotive } from './init-locomotive';

const SELECTORS = {
  menuBtn: '[data-menu="btn"]',
  menuContainer: '[data-menu="container"]',
  menuNav: '[data-menu="nav"]',
};

const scrollLock = new ScrollLock();

const onBtnClick = (e) => {
  if (!e.target.closest(SELECTORS.menuBtn)) {return}

  try {
    const btn = e.target.closest(SELECTORS.menuBtn);
    const container = e.currentTarget;
    const nav = container.querySelector(SELECTORS.menuNav);

    container.classList.toggle('is-opened');
    btn.classList.toggle('is-active');
    nav.classList.toggle('is-opened');

    if (container.classList.contains('is-opened')) {
      scrollLock.disableScrolling();

    } else {
      scrollLock.enableScrolling();
    }

  } catch (error) {
    console.log(error);
  }
};

export const initMenu = () => {
  const menuContainers = document.querySelectorAll(SELECTORS.menuContainer);

  if (!menuContainers.length) {return}

  try {
    menuContainers.forEach(block => block.addEventListener('click', onBtnClick));

  } catch (error) {
    console.log(error);
  }
};
