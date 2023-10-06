// header-scroll

$(function () {
	$(document).scroll(function () {
		var $header = $("header");
		var $header__container = $(".header__container");
		$header.toggleClass('scrolled', $(this).scrollTop() > $header.height());
		$header__container.toggleClass('scrolled-border', $(this).scrollTop() > $header.height());
	});
});

// swiper
// const swiper = new Swiper('.swiper-custom', {


let mySwiperCustom = new Swiper('.swiper-custom', {
	// добавление пагинатора
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	// скрол зажатой мышкой на пк
	simulateTouch: true,
	// чувствительность скрола
	touchRatio: 3,
	// изменение курсора при наведении
	grabCursor: true,
	// скрол клавиатурой
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	// управление колесом мыши
	mousewheel: {
		// чувствительность колеса
		sensitivity: 1,
		// класс объекта для скрола колесом
		eventsTarget: ".swiper-custom"
	},
	// бесконечный скрол
	loop: true,
});

let myPaginationCustom = new Swiper('.pagination-custom', {
	// добавление пагинатора
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

mySwiperCustom.controller.control = myPaginationCustom;
myPaginationCustom.controller.control = mySwiperCustom;