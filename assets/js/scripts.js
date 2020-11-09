$(document).ready(function(){
	$('.nav-icon').click(function(){
		$('.menu ul').slideToggle(1000);

		return false ;
	});
	$('.banner').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:true,
		autoplay:true,
	})
	$('.clients').owlCarousel({ 
		loop:true,
		nav:false,
		dots:false,
		autoplay:true,
		margin:2,
		responsive:{
        0:{
            items:1
        },
        576:{
            items:3
        },
        767:{
            items:5
        }
    }
	})
	$('.testimonials-owl').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true,
		margin:2,
	})
	$('.works-owl').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:false,
		autoplay:true, 
	})
	$('.twitter').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:false,
		autoplay:true, 
	})
	$('.works-popup').magnificPopup({
		  type: 'image',
		  gallery:{
		    enabled:true
		  }
	});

	
})