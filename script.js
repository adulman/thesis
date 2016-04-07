( function( $ ) {
$( document ).ready(function() {
$('#cssmenu').prepend('<div id="menu-button">DOES THIS CHURCH HAVE WIFI?</div>');
	$('#cssmenu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
});
} )( jQuery );