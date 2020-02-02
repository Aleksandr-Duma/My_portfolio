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

// ................MixItUp2...............

	$('#portfolio-wrap').mixItUp();

// ...............ValidateJs..............

	$('#contacts-form').validate({
		rules:{
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true
			}
		},
		messages: {
			name: 'Пожалуйста, введите свое имя',
			email: {
				required: 'Поле E-mail обязательное для заполнения',
				email: 'Введите пожалуйста корректный e-mail'
			},
			message: 'Пожалуйста, введите текст сообщения'
		},
		errorClass: "error",
		validClass: "valid"
	})
});