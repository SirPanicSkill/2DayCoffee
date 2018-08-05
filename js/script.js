/* JqvaScript code */
document.addEventListener('DOMContentLoaded', function() {
	//sideNav init
	var sideNavElems = document.querySelectorAll('.sidenav');
	M.Sidenav.init(sideNavElems, {edge: 'right'});
	//tabs init
	var tabsElems = document.querySelector('.tabs');
	M.Tabs.init(tabsElems, {});
});

/*globals jQuery, document */
$(function() {
	"use strict";
	//навигация меню
	$('.menu-click').each(function(e) {
		var menu_count = $(this).attr('data-attr');
		$(this).on('click', function(e) {
			e.preventDefault();
			$('section[data-attr='+ menu_count +']').addClass('sec-active').siblings().removeClass('sec-active');
			$('.tabs').find('.indicator').css('opacity', '1');
		});
	});
	//переход по лого на главную
	$('.logo-link').on('click', function(e) {
		e.preventDefault();
		$('section[data-attr]').removeClass('sec-active').siblings().removeClass('sec-active');
		$('section.section-main').addClass('sec-active');
		$('.tabs').find('.indicator').css('opacity', '0');
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
					var lang = LANGUAGE[ $(this).attr('lang') ]; //берем нужное значение по атрибуту lang
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
		let tabsElems = document.querySelector('.tabs');
		setTimeout(M.Tabs.init(tabsElems, {}).updateTabIndicator(), 1000);
		;
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
