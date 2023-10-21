(function($)
{
	"use strict"
	var screen = $(window),
		s_width = screen.width();

	/*------------------
		Page Preloder
	--------------------*/
	screen.on('load', function() { 
		$(".loader").fadeOut(); 
		$("#preloder").delay(400).fadeOut("slow");
	});


	/*------------------
		Ajax Chimp
	--------------------*/
	$('#mc-form').ajaxChimp({
		url: 'http://webdevhomes.us12.list-manage.com/subscribe/post?u=4d62424bdf73c15d3fa0f3578&id=9c6fab69f2',//Set Your Mailchamp URL
	});


	/*------------------
		Right Model
	--------------------*/
	var right_bar = $('.right-warp');
	$('.switch').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		right_bar.toggleClass('active');
		setTimeout(function() {
			right_bar.scrollTop(0);
		}, 300);
	});
	$('#go_about').on('click', function(event) {
		event.preventDefault();
		$('.switch').addClass('active');
		right_bar.addClass('active');
	});


	/*------------------
		Magnific Popup
	--------------------*/
	$('.popup').magnificPopup({
		type:'inline',
		mainClass:'mfp-zoom-in',
		removalDelay: 400
	});


	/*------------------
		Countdown
	--------------------*/
	// For demo preview
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end
    

    // Use this for real timer date
    /*  var timerdate = "2020/01/01"; */

	$(".counter").countdown(timerdate, function(event) {
		$(this).html(event.strftime("<div class='cd-item'><span>%D</span> days </div>" + "<div class='cd-item'><span>%H</span> hour </div>" + "<div class='cd-item'><span>%M</span> min </div>" + "<div class='cd-item'><span>%S</span> sec </div>"));
	});
	if(s_width < 991) {
		$('.counter').prependTo('.intro-content');
	}


	/*------------------
		BG Slideshow
	--------------------*/
	$(".slideshow").backgroundCycle({
		imageUrls: [
			'img/slide2.jpg',
			'img/slide1.jpg'
		],
		fadeSpeed: 1000,
		duration: 4000,
		backgroundSize: SCALING_MODE_COVER
	});


	/*------------------
		Youtube BG
	--------------------*/
	$('#video-bg').YTPlayer({
		fitToBackground: true,
		videoId: 'wevJGIJXDFc'//Set Your Youtube Video ID
	});


	/*------------------
		Contact Form
	--------------------*/
	$('#contact-form').on('submit', function() {
		var send_btn = $('#send-form'),
			form = $(this),
			formdata = $(this).serialize(),
			chack = $('#form-chack');
			send_btn.text('Wait...');

		function reset_form(){
		 	$("#name").val('');
			$("#email").val('');
			$("#massage").val('');
		}

		$.ajax({
			url:  $(form).attr('action'),
			type: 'POST',
			data: formdata,
			success : function(text){
				if (text == "success"){
					send_btn.addClass('done');
					send_btn.text('Success');
					setTimeout(function() {
						reset_form();
						send_btn.removeClass('done');
						send_btn.text('Massage');
					}, 1200);
				}
				else {
					reset_form();
					send_btn.addClass('error');
					send_btn.text('Error');
					setTimeout(function() {
						send_btn.removeClass('error');
						send_btn.text('Massage');
					}, 1200);
				}
			}
		});
		return false;
	});

})(jQuery);