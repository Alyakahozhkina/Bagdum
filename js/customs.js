jQuery.noConflict();
jQuery(document).ready(function () {

    'use strict';

	var slid = jQuery('#carousel-main');
		
	slid.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: true,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		dots: false,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: false
			},
			479:{
				items: 1,
				mouseDrag: true
			},
			767:{
				items: 1,
				mouseDrag: true
			},
			991:{
				items: 1,
				mouseDrag: true
			},
			1099:{
				items: 1,
				mouseDrag: true
			}
		}
	});
	
	var slid = jQuery('#carousel-client');
		
	slid.owlCarousel({
		items: 4,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		smartSpeed: 1000,
		dotsSpeed: 1000,
		loop: true,
		nav: false,
		navText: ['', ''],
		dots: true,
		mouseDrag: true,
		margin: 30,
		stagePadding: 0,
		autoWidth: false,
		responsiveClass: true,
		responsive:{
			0:{
				items: 1,
				dots: true,
				nav: false,
				mouseDrag: true,
				autoplay: false
			},
			479:{
				items: 2,
				mouseDrag: true,
				dots: true
			},
			767:{
				items: 2,
				mouseDrag: true,
				dots: true
			},
			991:{
				items: 3,
				mouseDrag: true,
				dots: true
			},
			1099:{
				items: 4,
				mouseDrag: true,
				dots: true
			}
		}
	});

	});


	jQuery(document).ready(function($) {
		
		// BURGER
		$('.header__burger').click(function(){
			$('.header').toggleClass('open-menu');
			$('.header__burger').toggleClass('open-menu');
			$('.header__menu').toggleClass('open-menu');
			$('body').toggleClass('fixed-page');
		});




		// PAGE-SCROLLED
		let elem = $('.header');
		let doc = $(document);
		function scrolled() {
   		let threshold = doc.scrollTop() > 50;
   		elem.toggleClass('scrolled', threshold);
   		}
		$(window).on({ scroll: scrolled });

		

		// BUTTON-UP
		let button = $('#button-up');	
		$(window).scroll(function() {
			if ($(window).scrollTop() > 700) {
				button.addClass('show');
			} else {
				button.removeClass('show');
			}
		});	 
		button.on('click', function(){
		$('body, html').animate({
		scrollTop: 0
		}, 500);
		return false;
		});	
		
		
		//SCROLL-PAGE
		$(".menu").on("click","a", function (event) {
			event.preventDefault();
			let id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 120}, 600);
		});

	});











	