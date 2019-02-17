// Using jQuery
// Toggle 'open' classes when mobile menu is open
$("#open").click( function() {
  $("#mobile-nav").toggleClass('menu-open');
  $("body").toggleClass('mobile-menu-open');
});

// Set height of menu to the window height minus the height of the menu bar
var menuBarHeight = $('.menu-bar').outerHeight();
var mobileNavHeight = $(window).height() - menuBarHeight;
$(".mobile-menu").css("height", mobileNavHeight);
$("#mobile-nav").css("top", menuBarHeight);


$('#mobile-nav li a').on('click', function(){
    $("#mobile-nav").toggleClass('menu-open');
  $("body").toggleClass('mobile-menu-open');
});
