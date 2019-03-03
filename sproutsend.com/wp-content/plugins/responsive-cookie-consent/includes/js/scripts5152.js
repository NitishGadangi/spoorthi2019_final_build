jQuery(document).ready(function() { 

	
	"use strict";
	
	jQuery('.rcc-panel').hide();

	if ( document.cookie.indexOf("rcc_accepted") === -1 ) {
		
		jQuery(".rcc-panel").prependTo('body').delay(600).slideDown(500);
		
		jQuery(".rcc-accept-btn").on('click', function(event)  {
			
			event.preventDefault();
			
			jQuery(".rcc-panel").slideUp(500);
			
			var d = new Date();
			d.setTime(d.getTime()+(365*24*60*60*1000));
			var expires = d.toGMTString();
			document.cookie = 'rcc_accepted = 1; expires=' + expires + ';' + "domain=." + document.domain + "; path=/;";
					
		});
	
	}
		
});