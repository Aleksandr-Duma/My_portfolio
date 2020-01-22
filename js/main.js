$(document).ready(function(){
	var navButton = $('.navigation-toggle');
	var navButtonClose = $('.navigation-button-close');
	var navList = $('.navigation-list');
	var navListLink = $('.navigation-list-item-link');

	navButton.on('click', function(e){
		e.preventDefault();
		navList.addClass('active');
	})

	navButtonClose.on('click', function(){
		navList.removeClass('active');
	})

	navListLink.on('click', function(){
		navList.removeClass('active');
	})

// ................Scroll................	

	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		},800);
	});
});