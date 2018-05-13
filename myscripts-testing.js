// JavaScript Document
	    	
$(document).ready(function() {
	"use strict";
	
	var menuIcon = $(".menu-icon");
	var menuHasChildren = $(".menu-item-has-children");
	var menuHasChildren2 = 	$(".menu-item-has-children2");
	var menuHasChildren3 =	$(".menu-item-has-children3");
	
	function checkWidth() {	
		var screenWidth = $(window).width();
		if (screenWidth <= 600) {		
	    //Menu toggle-button	
			removeHoverListeners();
			
			menuIcon.on("click", function() {
				$(".main-nav .menu").toggleClass("showing");
				$(".sub-menu").css("display", "none");
				$(".sub-menu2").css("display", "none");
				$(".sub-menu3").css("display", "none");			
			});

			menuHasChildren.on("click", function(e) {
				$(".sub-menu").slideToggle();
				$(".sub-menu2").css("display", "none");
				$(".sub-menu3").css("display", "none");
				e.stopPropagation();
			});

			menuHasChildren2.on("click", function(e) {
				$(".sub-menu3").slideUp();
				$(".sub-menu2").slideToggle();
				e.stopPropagation();
			});

			menuHasChildren3.on("click", function(e) {
				$(".sub-menu2").slideUp();
				$(".sub-menu3").slideToggle();
				e.stopPropagation();
			});
	    } else {
//			var isSubMenu2Hovering = false;
//			
//			menuIcon.unbind();
//			menuHasChildren.unbind().on("mouseover", function(e){
//				$(".sub-menu").slideDown();
//				$(".sub-menu2").hide();
//			});
//			
//			$(".sub-menu").on("mouseleave", function(e){
//				isSubMenu2Hovering = false;
//				$(".sub-menu").slideUp();
//			});
//			$(".sub-menu2").on("mouseover", function(e){
//				isSubMenu2Hovering = true;
//			});
//			
//			menuHasChildren2.unbind().on("mouseover", function(e){
//				$(".sub-menu2").slideDown();
//			}).on("mouseleave", function(e){
//				console.log("menu childen mouseleave")
//				setTimeout(function(e){
//					if(isSubMenu2Hovering == false){
//						$(".sub-menu2").slideUp();
//					}
//				}, 50);
//			});
//			
//			$(".sub-menu2").on("mouseleave", function(e){
//				$(".sub-menu2").slideUp();
//			});
//			
//			
//			
//			
//			menuHasChildren3.unbind();
		}
    }
	
	//Close the whole menu when click on either list	
    $(".menu").on("click", "li", function(){
		$(".menu-icon").click();
	});
	
	//Close sub-menu when click elsewhere		
	$(document).click( function(){
        $('.sub-menu').hide();
    });
	
	//Excute onload
	checkWidth();
	//Bind event listener
	$(window).resize(checkWidth);
	
	function removeHoverListeners(){
		menuHasChildren.unbind();
		$(".sub-menu").unbind();
		menuHasChildren2.unbind();		
		$(".sub-menu2").unbind();			
	}
	
});		




(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        cssmenu.find('li ul').parent().addClass('has-sub');

        multiTg = function() {
          //cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }
            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 768) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 768) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

$("#cssmenu").menumaker({
   title: "Menu",
   format: "multitoggle"
});

});
})(jQuery);

