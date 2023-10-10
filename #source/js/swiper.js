// swiper-----------------------------------------------------------------------

let mySwiperCustom = new Swiper('.swiper-custom', {
  // добавление пагинатора
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // скрол зажатой мышкой на пк
  simulateTouch: true,
  // чувствительность скрола
  touchRatio: 1.5,
  // изменение курсора при наведении
  grabCursor: true,
  // скрол клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  // бесконечный скрол
  loop: true,
  // автовысота слайдов
  autoHeight: true,
  // автопрокрутка
  autoplay: {
    // пауза между прокруткой
    delay: 3000,
    // отключить после ручного переключения
    disableOnInteraction: true,
    // закончить на последнем слайде
    stopOnLastSlide: true,
  },
  // управление колесом мыши
  // mousewheel: {
  // чувствительность колеса
  // sensitivity: 1,
  // класс объекта для скрола колесом
  // eventsTarget: ".swiper-custom"
  // },
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