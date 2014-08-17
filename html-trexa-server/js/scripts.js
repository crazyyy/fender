// DOM Ready
$(function() {
	
	// SVG fallback
	// toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script#update
	if (!Modernizr.svg) {
		var imgs = document.getElementsByTagName('img');
		var dotSVG = /.*\.svg$/;
		for (var i = 0; i != imgs.length; ++i) {
			if(imgs[i].src.match(dotSVG)) {
				imgs[i].src = imgs[i].src.slice(0, -3) + "png";
			}
		}
	}

});
/*
 * SimpleModal Contact Form
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

jQuery(function ($) {
	/*	recall button */
	$('.recall').click(function (e) {
		$(".modal-recall").modal({onOpen: function (dialog) {
			dialog.overlay.fadeIn('slow', function () {
				dialog.data.hide();
				dialog.container.fadeIn('slow', function () {
					dialog.data.slideDown('slow');	 
				});
			});
		}});
		return false;
	});
	$.modal.defaults.closeClass = "order-now";

	/*	view more */
	$('.viewmore-1').click(function (e) {
		$('.modal-more-1').modal();
		return false;
	});
	$('.viewmore-2').click(function (e) {
		$('.modal-more-2').modal();
		return false;
	});
	$('.viewmore-3').click(function (e) {
		$('.modal-more-3').modal();
		return false;
	});
	$('.viewmore-4').click(function (e) {
		$('.modal-more-4').modal();
		return false;
	});
	$('.viewmore-5').click(function (e) {
		$('.modal-more-5').modal();
		return false;
	});
	$('.viewmore-6').click(function (e) {
		$('.modal-more-6').modal();
		return false;
	});
	$('.viewmore-7').click(function (e) {
		$('.modal-more-7').modal();
		return false;
	});
	$('.viewmore-8').click(function (e) {
		$('.modal-more-8').modal();
		return false;
	});
	$('.viewmore-9').click(function (e) {
		$('.modal-more-9').modal();
		return false;
	});
	$('.viewmore-10').click(function (e) {
		$('.modal-more-10').modal();
		return false;
	});
	$('.viewmore-11').click(function (e) {
		$('.modal-more-11').modal();
		return false;
	});
	$('.viewmore-12').click(function (e) {
		$('.modal-more-12').modal();
		return false;
	});
	/* showroom */
	$('.string h4 span').click(function (e) {
		$('.modal-room').modal();
		return false;
	});
	/* buy */
	$('.buynow').click(function (e) {
		$('.modal-buy').modal();
		return false;
	});





	$('.clicker1').click(function (e) {
		$('#clicker1-modal-content').modal();
		$( ".simplemodal-container" ).addClass( "clickerblk" );
		return false;
	});
	$('.clicker2').click(function (e) {
		$('#clicker2-modal-content').modal();
		$( ".simplemodal-container" ).addClass( "clickerblk" );
		return false;
	});
	$('.clicker3').click(function (e) {
		$('#clicker3-modal-content').modal();
		$( ".simplemodal-container" ).addClass( "clickerblk" );
		return false;
	});
});

/* form phone*/
function smallform(data)	{
	/* контактный телефон */
	if(data.phone != null && data.phone.value.length == 0)	{
	alert('поле "Телефон" пустое');
	return false;}

	if(data.email != null && data.email.value.length == 0)	{
	alert('поле "E-mail" пустое');
	return false;}

	if(data.name != null && data.name.value.length == 0)	{
	alert('поле "Имя" пустое');
	return false;}
	  
	if(data.phone != null && data.phone.value.length < 5)	{
	alert('поле "Телефон" должно содержать минимум пять символов');
	return false;}

	if(data.email != null && data.email.value.length < 5)	{
	alert('поле "E-mail" должно содержать минимум пять символов');
	return false;}
}

/* ajax form */ 
/* http://hayageek.com/examples/jquery/ajax-form-submit/index.php */
$("#modal-recall").submit(function(e) {
	if(event.preventDefault) 	{
	  event.preventDefault();
	}
	else	{
	   event.returnValue = false;
	}
	var postData = $(this).serializeArray();
	var formURL = $(this).attr("action");
	$.ajax( 	{
		url : formURL,
		type: "POST",
		data : postData,
		success:function(data, textStatus, jqXHR) 
		{
			/* replace content */
			$('#basic-modal-content').modal();
			$( ".modal-recall .form-block" ).replaceWith( $( ".formtnx-recall" ) );
			$(".formtnx-recall").css({ display: "block" });
		},
		error: function(jqXHR, textStatus, errorThrown) 
		{	}
	});
    
});
$("#modal-recall").submit();







$("#ajaxform, #ajaxform2, #ajaxform3, #ajaxform4, #ajaxform5, #ajaxform6, #ajaxform6").submit(); //SUBMIT FORM

