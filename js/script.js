/*globals jQuery, document */
$(function() {
    "use strict";
    $(".button-collapse").sideNav();
    //левое меню для телефонов
    $('.button-collapse').sideNav({
      menuWidth: 200, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff*/ }, // A function to be called when sideNav is closed
    });
});

/* после загрузки страницы */
$(window).on('load', function(){
    "use strict";
    //прелоадер
    $(".preloader").delay(500).fadeOut("slow");
});
