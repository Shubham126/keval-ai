'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register GSAP plugins (ScrollToPlugin is premium, using native scrollTo instead)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

// Type declarations for global libraries
declare global {
  interface Window {
    gsap: typeof gsap;
    ScrollTrigger: typeof ScrollTrigger;
    ScrollSmoother: typeof ScrollSmoother;
    SplitText: any;
    Swiper: any;
    Matter: any;
  }
}

// Make GSAP available globally for legacy code that might need it
if (typeof window !== 'undefined') {
  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
  window.ScrollSmoother = ScrollSmoother;
}

// ============================================================================
// Main Initialization Functions (No jQuery Dependencies)
// ============================================================================

export const initializeMainScripts = () => {
  if (typeof window === 'undefined') return;

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMain);
  } else {
    initMain();
  }
};

const initMain = () => {
  // Sidebar Toggle (handled by React components, but keep for legacy HTML)
  const offcanvasClose = document.querySelectorAll('.offcanvas__close, .offcanvas__overlay');
  offcanvasClose.forEach((el) => {
    el.addEventListener('click', () => {
      document.querySelector('.offcanvas__info')?.classList.remove('info-open');
      document.querySelector('.offcanvas__overlay')?.classList.remove('overlay-open');
    });
  });

  const sidebarToggle = document.querySelectorAll('.sidebar__toggle');
  sidebarToggle.forEach((el) => {
    el.addEventListener('click', () => {
      document.querySelector('.offcanvas__info')?.classList.add('info-open');
      document.querySelector('.offcanvas__overlay')?.classList.add('overlay-open');
    });
  });

  // Body Overlay
  const bodyOverlay = document.querySelector('.body-overlay');
  if (bodyOverlay) {
    bodyOverlay.addEventListener('click', () => {
      document.querySelector('.offcanvas__area')?.classList.remove('offcanvas-opened');
      document.querySelector('.df-search-area')?.classList.remove('opened');
      bodyOverlay.classList.remove('opened');
    });
  }

  // Sticky Header (handled by React components, but keep for legacy)
  const headerSticky = document.getElementById('header-sticky');
  if (headerSticky) {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        headerSticky.classList.add('sticky');
      } else {
        headerSticky.classList.remove('sticky');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
  }

  // Data Background
  document.querySelectorAll<HTMLElement>('[data-background]').forEach((el) => {
    const bg = el.getAttribute('data-background');
    if (bg) {
      el.style.backgroundImage = `url(${bg})`;
    }
  });

  // Custom Accordion
  document.querySelectorAll('.accordion-single .header-area').forEach((header) => {
    header.addEventListener('click', () => {
      const accordion = header.closest('.accordion-single');
      const content = header.nextElementSibling as HTMLElement;
      
      if (!accordion || !content) return;

      const isActive = accordion.classList.contains('active');
      
      // Close all accordions
      document.querySelectorAll('.accordion-single').forEach((acc) => {
        acc.classList.remove('active');
        const cont = acc.querySelector('.content-area') as HTMLElement;
        if (cont) {
          cont.style.display = 'none';
        }
      });

      // Toggle current accordion
      if (!isActive) {
        accordion.classList.add('active');
        if (content) {
          content.style.display = content.style.display === 'none' ? 'block' : 'block';
        }
      }
    });
  });

  // Mouse Cursor
  initializeMouseCursor();

  // Typewriter Effect
  initializeTypewriter();

  // Preloader
  initializePreloader();
};

// ============================================================================
// Mouse Cursor (No jQuery)
// ============================================================================

const initializeMouseCursor = () => {
  const cursorInner = document.querySelector('.cursor-inner');
  const cursorOuter = document.querySelector('.cursor-outer');
  
  if (!cursorInner || !cursorOuter) return;

  let click = false;

  window.onmousemove = (e: MouseEvent) => {
    if (!click) {
      (cursorOuter as HTMLElement).style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      (cursorInner as HTMLElement).style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
  };

  const handleMouseEnter = (e: Event) => {
    cursorInner.classList.add('cursor-hover');
    cursorOuter.classList.add('cursor-hover');
  };

  const handleMouseLeave = () => {
    cursorInner.classList.remove('cursor-hover');
    cursorOuter.classList.remove('cursor-hover');
  };

  document.body.addEventListener('mouseenter', handleMouseEnter, true);
  document.body.addEventListener('mouseleave', handleMouseLeave, true);

  // Handle links and cursor-pointer elements
  document.querySelectorAll('a, .cursor-pointer').forEach((el) => {
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
  });

  (cursorInner as HTMLElement).style.visibility = 'visible';
  (cursorOuter as HTMLElement).style.visibility = 'visible';
};

// ============================================================================
// Typewriter Effect (No jQuery)
// ============================================================================

const initializeTypewriter = () => {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const words = [' Trading Platforms', ' CRM Solutions', ' ⁠Ai Automation', ' Digital Solutions'];
  let index = 0;
  let letterIndex = 0;
  let currentWord = words[0];
  let interval: NodeJS.Timeout | null = null;

  function typeWriter() {
    if (!typingElement) return;
    const word = words[index];
    if (letterIndex < word.length) {
      typingElement.textContent = (typingElement.textContent || '') + word.charAt(letterIndex);
      letterIndex++;
    } else {
      if (interval) clearInterval(interval);
      interval = setInterval(eraseText, 150);
    }
  }

  function eraseText() {
    if (!typingElement) return;
    if (letterIndex >= 0) {
      const text = currentWord.substring(0, letterIndex);
      typingElement.textContent = text;
      letterIndex--;
    } else {
      if (interval) clearInterval(interval);
      index = (index + 1) % words.length;
      currentWord = words[index];
      interval = setInterval(typeWriter, 150);
    }
  }

  interval = setInterval(typeWriter, 150);
};

// ============================================================================
// Preloader (No jQuery)
// ============================================================================

const initializePreloader = () => {
  window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      preloader.classList.add('loaded');
      setTimeout(() => {
        (preloader as HTMLElement).style.display = 'none';
      }, 600);
    }
  });
};

// ============================================================================
// GSAP Animations (from customer-gsap-animation.js)
// ============================================================================

export const initializeGSAPAnimations = () => {
  if (typeof window === 'undefined') return;

  // Wait for GSAP to be available
  if (!gsap || !ScrollTrigger) {
    setTimeout(initializeGSAPAnimations, 100);
    return;
  }

  gsap.config({
    nullTargetWarn: false,
  });

  // Smooth Scroll (using native smooth scroll instead of premium ScrollToPlugin)
  document.querySelectorAll('.smooth a').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = (link as HTMLAnchorElement).getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const targetTop = (target as HTMLElement).offsetTop - 120;
        
        // Use native smooth scroll
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth',
        });
      }
    });
  });

  // Scroll Smoother
  const smoothWrapper = document.getElementById('smooth-wrapper');
  const smoothContent = document.getElementById('smooth-content');
  
  if (smoothWrapper && smoothContent && ScrollSmoother) {
    ScrollSmoother.create({
      wrapper: smoothWrapper,
      content: smoothContent,
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: false,
      ignoreMobileResize: true,
    });
  }

  // Character Animation (requires SplitText premium)
  if (window.SplitText) {
    const charElements = gsap.utils.toArray('.tp-char-animation');
    charElements.forEach((splitTextLine: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none',
        },
      });

      const itemSplitted = new window.SplitText(splitTextLine, { type: 'chars, words' });
      gsap.set(splitTextLine, { perspective: 300 });
      itemSplitted.split({ type: 'chars, words' });
      tl.from(itemSplitted.chars, {
        duration: 1,
        delay: 0.5,
        x: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
    });
  }

  // Reveal Animation (requires SplitText premium)
  if (window.SplitText) {
    const animReveal = document.querySelectorAll('.tp_reveal_anim');
    animReveal.forEach((areveal: any) => {
      const durationValue = parseFloat(areveal.getAttribute('data-duration') || '1.5');
      const onscrollValue = parseInt(areveal.getAttribute('data-on-scroll') || '1');
      const staggerValue = parseFloat(areveal.getAttribute('data-stagger') || '0.02');
      const dataDelay = parseFloat(areveal.getAttribute('data-delay') || '0.05');

      areveal.split = new window.SplitText(areveal, {
        type: 'lines,words,chars',
        linesClass: 'tp-reveal-line',
      });

      const animationProps: any = {
        duration: durationValue,
        delay: dataDelay,
        ease: 'circ.out',
        y: 200,
        stagger: staggerValue,
        opacity: 0,
      };

      if (onscrollValue == 1) {
        animationProps.scrollTrigger = {
          trigger: areveal,
          start: 'top 85%',
          end: 'bottom 15%',
        };
      }

      areveal.anim = gsap.from(areveal.split.chars, animationProps);
    });
  }

  // Title Animation (requires SplitText premium)
  if (window.SplitText) {
    const splitTitleLines = gsap.utils.toArray('.title-anim');
    splitTitleLines.forEach((splitTextLine: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none',
        },
      });

      const itemSplitted = new window.SplitText(splitTextLine, { type: 'words, lines' });
      gsap.set(splitTextLine, { perspective: 300 });
      itemSplitted.split({ type: 'lines' });
      tl.from(itemSplitted.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -50,
        force3D: true,
        transformOrigin: 'top center -50',
        stagger: 0.2,
      });
    });
  }

  // GSAP Parallax
  gsap.utils.toArray('.gsap__parallax').forEach((container: any) => {
    const image = container.querySelector('img');
    if (!image) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: 0.5,
      },
    });
    tl.from(image, {
      yPercent: -30,
      ease: 'none',
    }).to(image, {
      yPercent: 30,
      ease: 'none',
    });
  });

  // Full Image Wrap Pinning
  const fullImgWrap = document.querySelector('.full-img-wrap');
  if (fullImgWrap) {
    ScrollTrigger.create({
      trigger: fullImgWrap,
      start: 'top 0',
      end: 'bottom 0%',
      pin: '.full-img',
      pinSpacing: false,
    });
  }

  const fullImgWrap2 = document.querySelector('.full-img-wrap2');
  if (fullImgWrap2) {
    ScrollTrigger.create({
      trigger: fullImgWrap2,
      start: 'top 0',
      end: 'bottom 0%',
      pin: '.full-img2',
      pinSpacing: false,
    });
  }

  const fullImgWrap3 = document.querySelector('.full-img-wrap3');
  if (fullImgWrap3) {
    ScrollTrigger.create({
      trigger: fullImgWrap3,
      start: 'top 0',
      end: 'bottom 0%',
      pin: '.full-img3',
      pinSpacing: false,
    });
  }
};

// ============================================================================
// Matter.js Tags Simulation (from matter-custom.js)
// ============================================================================

export const initializeMatterSimulation = async () => {
  if (typeof window === 'undefined') return;

  const containerElement = document.querySelector('.tags-container, .tags-container2');
  if (!containerElement) return;

  // Use Intersection Observer to start only when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        initSimulation();
        observer.disconnect();
      }
    });
  });

  observer.observe(containerElement);

  async function initSimulation() {
    if (!containerElement) return;
    
    try {
      // Load Matter.js from CDN via script tag if not already loaded
      if (!window.Matter) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/matter-js@0.19.0/build/matter.min.js';
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('Failed to load Matter.js'));
          document.head.appendChild(script);
        });
      }
      
      const Matter = window.Matter;
      if (!Matter) {
        throw new Error('Matter.js not available');
      }
      
      const Engine = Matter.Engine;
      const Render = Matter.Render;
      const World = Matter.World;
      const Bodies = Matter.Bodies;
      const Events = Matter.Events;
      const Mouse = Matter.Mouse;
      const MouseConstraint = Matter.MouseConstraint;

      const containerWidth = containerElement.clientWidth;
      const containerHeight = containerElement.clientHeight;

      // Create engine and world
      const engine = Engine.create();
      const world = engine.world;

      // Create renderer
      const render = Render.create({
        element: containerElement as HTMLElement,
        engine: engine,
        options: {
          width: containerWidth,
          height: containerHeight,
          pixelRatio: 2,
          background: '',
          wireframes: false,
        },
      });

      // Boundaries
      const ground = Bodies.rectangle(containerWidth / 2, containerHeight + 80, containerWidth + 200, 160, {
        isStatic: true,
      });
      const wallLeft = Bodies.rectangle(-80, containerHeight / 2, 160, containerHeight, { isStatic: true });
      const wallRight = Bodies.rectangle(containerWidth + 80, containerHeight / 2, 160, containerHeight, {
        isStatic: true,
      });
      const roof = Bodies.rectangle(containerWidth / 2, -80, containerWidth + 200, 160, { isStatic: true });

      // Tag textures (t1.png … t19.png)
      const tagTextures = Array.from({ length: 19 }, (_, i) => `/assets/img/mattericon/t${i + 1}.png`);

      const tags = tagTextures.map((texture, i) =>
        Bodies.rectangle(containerWidth / 2 + Math.random() * 200 - 100, 300 + i * 20, 180, 56, {
          chamfer: { radius: 20 },
          render: {
            sprite: {
              texture: texture,
              xScale: 1,
              yScale: 1,
            },
          },
        })
      );

      // Add all bodies
      World.add(world, [ground, wallLeft, wallRight, roof, ...tags]);

      // Mouse control
      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: false } },
      });
      World.add(world, mouseConstraint);
      render.mouse = mouse;

      // Allow scroll on canvas
      mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
      mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

      // Detect clicks vs drags
      let click = false;
      document.addEventListener('mousedown', () => (click = true));
      document.addEventListener('mousemove', () => (click = false));

      Events.on(mouseConstraint, 'mouseup', function (event: any) {
        if (click && event.mouse.position) {
          const pos = event.mouse.position;
          for (const body of world.bodies) {
            if (Matter.Bounds.contains(body.bounds, pos) && (body as any).url) {
              window.open((body as any).url, '_blank');
            }
          }
        }
      });

      Engine.run(engine);
      Render.run(render);
    } catch (error) {
      // Only log in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to initialize Matter.js simulation:', error);
      }
    }
  }
};

// ============================================================================
// Legacy Functions (for backward compatibility)
// ============================================================================

export const initializeAnimations = () => {
  // WOW.js removed - use GSAP ScrollTrigger or Framer Motion instead
  if (typeof window === 'undefined') return;
};

export const initializeGSAP = () => {
  if (typeof window === 'undefined') return;
  // GSAP is now imported from npm and registered at module level
};
