$(document).ready(function() {    
    // jQuery animations on page scroll    
    /*
    $('#element-to-animate-left').css('opacity', 0); // Have the element start out invisible 
    */
    
    // ABOUT
    $("#element-to-animate-about-left").waypoint(function() 
    {                
        $('#element-to-animate-about-left').addClass('fadeInLeft');                        
    }, {offset: '100%'});
    
    $("#element-to-animate-about-right").waypoint(function() 
    {                      
        $('#element-to-animate-about-right').addClass('fadeInRight');              
    }, {offset: '100%'});
    
    $("#element-to-animate-about-up").waypoint(function() 
    {                                             
        $('#element-to-animate-about-up').addClass('fadeInUp');                       
    }, {offset: '100%'});
    
    $("#element-to-animate-about-up-2").waypoint(function() 
    {                                             
        $('#element-to-animate-about-up-2').addClass('fadeInUp');                       
    }, {offset: '100%'});
    
    // SERVICES
    $("#element-to-animate-services-up-1").waypoint(function() 
    {                                             
        $('#element-to-animate-services-up-1').addClass('fadeInUp');                       
    }, {offset: '100%'});
    
    $("#element-to-animate-services-up-2").waypoint(function() 
    {                                             
        $('#element-to-animate-services-up-2').addClass('fadeInUp');                       
    }, {offset: '100%'});
    
    $("#element-to-animate-services-up-3").waypoint(function() 
    {                                             
        $('#element-to-animate-services-up-3').addClass('fadeInUp');                       
    }, {offset: '100%'});

    // DOCTORS
    $("#element-to-animate-doctors-up-1").waypoint(function() 
    {                                             
        $('#element-to-animate-doctors-up-1').addClass('fadeInUp');                       
    }, {offset: '100%'});

    $("#element-to-animate-doctors-up-2").waypoint(function() 
    {                                             
        $('#element-to-animate-doctors-up-2').addClass('fadeInUp');                       
    }, {offset: '100%'});
    
    $("#element-to-animate-doctors-up-3").waypoint(function() 
    {                                             
        $('#element-to-animate-doctors-up-3').addClass('fadeInUp');                       
    }, {offset: '100%'});

    $("#element-to-animate-doctors-up").waypoint(function() 
    {                                             
        $('#element-to-animate-doctors-up').addClass('fadeInUp');                       
    }, {offset: '100%'});
    
    
    // Header Scroll
    /*
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});
    */

	// Fancybox
	$('.work-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

    
	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

    // get the total height of the header
    var total_height_of_header = $('#top-header').height() + $('#bottom-header').height(); 
    
    // function for adding active class to link in header/menu bar 
    function activate_nav() {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - total_height_of_header - 60 // must be set to (height of header-top + a bit more for safety)
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}   
        });
    }
    
    // set active link on scroll
    $(window).on('scroll', activate_nav)

    // set active link on page load 
    $(window).load(activate_nav)
    
    // scroll animation
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	   id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - total_height_of_header  
		}, 500);
	  return false;
	});
    
	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
        nav.toggleClass('open');
		$(this).toggleClass('close-nav');        
		return false;
	});	
    // when a link is clicked, close nav bar 
	nav.find('a').on('click', function() {
        // only do this if we are in mobile mode (the nav menu is in place...)
        if($('nav.navigation').hasClass('open')) 
        {
            console.log('stuff');
            nav.toggleClass('open');   
            $('.nav-toggle').toggleClass('close-nav');            
        }
	});
    
});