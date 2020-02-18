// JavaScript Document


$(document).ready(function() {
	"use strict";
	
	/* --- Sticky Navigation --- */
	$('.js-section-features').waypoint(function(direction) {
		
		if (direction === "down") {
			$('nav').addClass('sticky-nav');
		} else {
			$('nav').removeClass('sticky-nav');
		}
		
	}, {offset: '60px;'});
	
	/* --- Header Buttons --- */
	$('.js-scroll-to-signup').click(function() {
		$('html, body').animate({scrollTop: $('.js-section-signup').offset().top}, 1000);
	});
	
	$('.js-scroll-to-features').click(function() {
		$('html,body').animate({scrollTop: $('.js-section-features').offset().top}, 1000);
	});
	
	/* --- Section Scrolling --- */
	$('a[href*="#"]').on('click', function (e) {
		
		e.preventDefault();
		
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 600, 'linear');
		
	});
	
	/* --- Animations --- */
	$('.js-wp-1').waypoint(function(direction) {
		$('.js-wp-1').addClass('animated fadeIn');
	}, {offset: '50%'});
	
	$('.js-wp-2').waypoint(function(direction) {
		$('.js-wp-2').addClass('animated fadeInUp');
	}, {offset: '40%'});
	
	$('.js-wp-3').waypoint(function(direction) {
		$('.js-wp-3').addClass('animated fadeIn');
	}, {offset: '50%'});
	
	$('.js-wp-4').waypoint(function(direction) {
		$('.js-wp-4').addClass('animated pulse');
	}, {offset: '40%'});
	
	/* --- Mobile Navigation --- */
	$('.js-mobile-nav').click(function() {
		
		var nav = $('.js-main-nav');
		var icon = $('.js-mobile-nav i');
		
		nav.slideToggle(200);
		
		if (icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else {
			icon.removeClass('ion-close-round');
			icon.addClass('ion-navicon-round');
		}
		
	});
	
	/* --- Google Maps --- */
	var map = new GMaps({
	  div: '.map',
	  lat: 38.7222490,
	  lng: -9.01,
	  zoom: 12
	});
	
	map.addMarker({
	  lat: 38.7222490,
	  lng: -9.1393375,
	  title: 'Lisbon',
	  infoWindow: {
	  content: '<p>Our Lisbon HQ</p>'
	  }
	});

});