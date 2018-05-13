// JavaScript Document
	    	
$(document).ready(function() {
  "use strict";
  $("#menu-icon").click(function(){
		$("#menu").slideToggle();
  });
  $("li").click(function(){
    event.stopPropagation() ;
		$(this).children("ul").slideToggle();
  });

});