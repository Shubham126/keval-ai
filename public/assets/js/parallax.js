/*!
 * Modern Vanilla JS Parallax (No jQuery)
 * Inspired by pixelcog/parallax.js
 * Version: 1.0.0
 * Author: Adapted by Subham's Assistant 🚀
 */

(function () {
  'use strict';

  const supportsPassive = (() => {
    let supported = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get: function () {
          supported = true;
        },
      });
      window.addEventListener('test', null, opts);
    } catch (e) {}
    return supported;
  })();

  function addEvent(el, type, listener, passive = true) {
    el.addEventListener(type, listener, supportsPassive ? { passive } : false);
  }

  class Parallax {
    constructor(element, options = {}) {
      this.el = element;
      this.speed = options.speed || parseFloat(element.dataset.speed) || 0.4;
      this.imageSrc = options.imageSrc || element.dataset.imageSrc || '';
      this.offset = 0;
      this.visible = false;

      this.setup();
      this.bindEvents();
    }

    setup() {
      // Create mirror image div
      this.mirror = document.createElement('div');
      this.mirror.className = 'parallax-mirror';
      this.mirror.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;
        z-index: -1;
        visibility: hidden;
        will-change: transform;
        width: 100%;
        height: 100%;
      `;

      // Create image
      this.image = document.createElement('img');
      this.image.className = 'parallax-slider';
      this.image.src = this.imageSrc;
      this.image.style.cssText = `
        position: absolute;
        width: 100%;
        height: auto;
        top: 0;
        left: 0;
        transform: translate3d(0,0,0);
        object-fit: cover;
        will-change: transform;
      `;

      this.mirror.appendChild(this.image);
      document.body.prepend(this.mirror);

      this.refresh();
      this.render();
    }

    bindEvents() {
      addEvent(window, 'scroll', () => this.render());
      addEvent(window, 'resize', () => this.refresh());
      addEvent(window, 'load', () => this.refresh());
      requestAnimationFrame(() => this.render());
    }

    refresh() {
      const rect = this.el.getBoundingClientRect();
      this.boxTop = rect.top + window.pageYOffset;
      this.boxHeight = rect.height;
      this.winHeight = window.innerHeight;
      this.docHeight = document.body.scrollHeight;
    }

    render() {
      const scrollTop = window.pageYOffset;
      const scrollBottom = scrollTop + this.winHeight;

      const boxBottom = this.boxTop + this.boxHeight;
      const visible = boxBottom > scrollTop && this.boxTop <= scrollBottom;
      if (!visible) {
        this.mirror.style.visibility = 'hidden';
        return;
      }

      this.mirror.style.visibility = 'visible';

      const parallaxOffset = (scrollTop - this.boxTop) * this.speed;
      const topOffset = this.boxTop - scrollTop;

      this.mirror.style.height = `${this.boxHeight}px`;
      this.mirror.style.transform = `translate3d(0, ${topOffset}px, 0)`;

      this.image.style.transform = `translate3d(0, ${parallaxOffset}px, 0)`;

      requestAnimationFrame(() => this.render());
    }
  }

  // Initialize automatically for data attributes
  function initParallax() {
    const elements = document.querySelectorAll('[data-parallax="scroll"]');
    elements.forEach((el) => {
      const src = el.getAttribute('data-image-src');
      const speed = parseFloat(el.getAttribute('data-speed')) || 0.4;
      new Parallax(el, { imageSrc: src, speed });
    });
  }

  // Initialize when DOM ready
  if (document.readyState !== 'loading') initParallax();
  else document.addEventListener('DOMContentLoaded', initParallax);
})();
