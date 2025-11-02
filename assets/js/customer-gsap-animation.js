


(function ($) {
	"use strict";

	var windowOn = $(window);


	////////////////////////////////////////////////////
	// Smooth Scroll Js
	function smoothSctoll() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 1500);
			}
		});
	}
	smoothSctoll();



	
	if($('#smooth-wrapper').length && $('#smooth-content').length){
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
	
		gsap.config({
			nullTargetWarn: false,
		});
	
		let smoother = ScrollSmoother.create({
			smooth: 2,
			effects: true,
			smoothTouch: 0.1,
			normalizeScroll: false,
			ignoreMobileResize: true,
		});

	}
	


    if ($('.tp-char-animation').length > 0) {
		// 25. Title Animation
		let char_come = gsap.utils.toArray(".tp-char-animation");
		char_come.forEach(splitTextLine => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
			gsap.set(splitTextLine, { perspective: 300 });
			itemSplitted.split({ type: "chars, words" })
			tl.from(itemSplitted.chars,
				{
					duration: 1,
					delay: 0.5,
					x: 100,
					autoAlpha: 0,
					stagger: 0.05
				});
		});
	}
    

     //Reveal Animation 
     const anim_reveal = document.querySelectorAll(".tp_reveal_anim");
     anim_reveal.forEach(areveal => {
         const duration_value = areveal.getAttribute("data-duration") || 1.5;
         const onscroll_value = areveal.getAttribute("data-on-scroll") || 1;
         const stagger_value = areveal.getAttribute("data-stagger") || 0.02;
         const data_delay = areveal.getAttribute("data-delay") || 0.05;
         areveal.split = new SplitText(areveal, {
             type: "lines,words,chars",
             linesClass: "tp-reveal-line"
         });
         const animationProps = {
             duration: duration_value,
             delay: data_delay,
             ease: "circ.out",
             y: 200,
             stagger: stagger_value,
             opacity: 0
         };
         if (onscroll_value == 1) {
             animationProps.scrollTrigger = {
                 trigger: areveal,
                 start: 'top 85%',
                 end: 'bottom 15%',
             };
         }
         areveal.anim = gsap.from(areveal.split.chars, animationProps);
     });

	 //>> Text Animation Gsap Js Start <<//
	 if ($('.title-anim').length > 0) {
		let splitTitleLines = gsap.utils.toArray(".title-anim");
		splitTitleLines.forEach(splitTextLine => {
			const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: 'top 90%',
				end: 'bottom 60%',
				scrub: false,
				markers: false,
				toggleActions: 'play none none none'
			}
			});

			const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
			gsap.set(splitTextLine, { perspective: 300});
			itemSplitted.split({ type: "lines" })
			tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -50, force3D: true, transformOrigin: "top center -50", stagger: 0.2 });
		});	
	}



})(jQuery);

