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

	//навигация меню
	$('.menu-click').each(function() {
		var menu_count = $(this).attr('data-attr');
		$(this).on('click', function() {
			$('section[data-attr='+ menu_count +']').addClass('sec-active').siblings().removeClass('sec-active');
		});
	});

	//смена языка
	var LANGUAGE;

	$.redrawLanguage = function (lang) {
		$.ajax({
			url : 'languages/' + lang + '.json', //тянем файл с языком
			dataType : 'json',
			success : function (response) {
				LANGUAGE = response; //записываем в глобальную переменную, а вдруг пригодиться
				$('body').find("[lang]").each(function () {//ищем все элементы с атрибутом
					var lang = LANGUAGE[ $(this).attr('lang') ]; //берем нужное значение по атрибуту lng
					var tag = $(this)[0].tagName.toLowerCase();
					switch (tag) {//узнаем название тега
						case "input":
							$(this).val(lang);
							break;
						default:
							$(this).html(lang);
							break;
					}
				});
			}
		});
	};
	$('.lang-ru').on('click', function(e) {
		e.preventDefault();
		$.redrawLanguage('rus');
		$(this).addClass('btn').siblings().removeClass('btn');
	});
	$('.lang-en').on('click', function(e) {
		e.preventDefault();
		$.redrawLanguage('eng');
		$(this).addClass('btn').siblings().removeClass('btn');
	});
});

/* после загрузки страницы */
$(window).on('load', function(){
	"use strict";
	//прелоадер
	$(".preloader").delay(1000).fadeOut("slow");
});
