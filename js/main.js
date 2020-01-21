$(document).ready(function(){
	$('.navigation-toggle').on('click', function(){
		$('.navigation-list').addClass('active');
	})

	$('.navigation-button-close').on('click', function(){
		$('.navigation-list').removeClass('active');
	})

	$('.navigation-list-item-link').on('click', function(){
		$('.navigation-list').removeClass('active');
	})
})