import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';

export class ScrollSlider {
  constructor() {
    this.slider = '';
    this.slides = [];
    this.activeSlide = 0;
    this.timeline = null;
    this.scroller = 'body';
    this._setHeight = this._setHeight.bind(this);
    this._setActiveSlide = this._setActiveSlide.bind(this);
    this._changeSlide = this._changeSlide.bind(this);
    this._initScroll = this._initScroll.bind(this);
    this.init = this.init.bind(this);
  }

  _setHeight() {
    this.slider.style.minHeight = this.slides.length * window.innerHeight + 'px';
  }

  _setActiveSlide(slideIndex) {
    this.slides.forEach(slide => slide.classList.remove('is-active'));
    this.slides[slideIndex].classList.add('is-active');
  }

  _changeSlide(scroll) {
    if (scroll.progress !== 0) {
      this.activeSlide = Math.ceil(scroll.progress / (1 / this.slides.length)) - 1;
    }

    this._setActiveSlide(this.activeSlide);
  }

  _initScroll() {
    if (this.timeline) {
      this.timeline.seek(0).kill();
    }
    this.timeline = gsap.timeline({paused: true});

    ScrollTrigger.create({
      scroller: this.scroller,
      trigger: this.slider,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: this._changeSlide,
      animation: this.timeline,
    });
  }

  init() {
    try {
      this.slider = document.querySelector('[data-scroll-slider="parent"]');
      if (!this.slider) {return}

      this.slides = this.slider.querySelectorAll('[data-scroll-slider="slide"]');

      this._setHeight();
      this._setActiveSlide(0);
      this._initScroll();

    } catch (error) {
      console.log(error);
    }
  }
}
