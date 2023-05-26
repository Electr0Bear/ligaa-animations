import {gsap} from 'gsap';
import {ScrollLock} from '../../utils/scroll-lock';

const scrollLock = new ScrollLock();

export class Loader {
  constructor() {
    this.loader = document.querySelector('[data-loader="container"]');
    this.eventAfterLoad = new Event('pageLoaded');

    this._enableScrolling = this._enableScrolling.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.afterLoad = this.afterLoad.bind(this);
    this.init = this.init.bind(this);
  }

  _enableScrolling() {
    document.body.classList.remove('scroll-lock-ios', 'scroll-lock');
    document.body.style.paddingRight = null;
    document.body.style.top = null;
    document.body.removeAttribute('data-scroll');
  }

  onLoad() {
    window.scrollTo(0, 0);
    gsap.fromTo(this.loader, {
      duration: 0.6,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 110%)',
    }, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    }).then(this.afterLoad);
  }

  afterLoad() {
    this.loader.classList.add('is-hidden');
    this._enableScrolling();

    window.dispatchEvent(this.eventAfterLoad);
  }

  init() {
    scrollLock.disableScrolling();
    window.addEventListener('load', this.onLoad);
  }
}


