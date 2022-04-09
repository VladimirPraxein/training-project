const page = document.querySelector('.page');
const headerBurger = page.querySelector('.header__burger');
const headerList = page.querySelector('.header__menu');
headerBurger.addEventListener('click', () => {
  page.classList.toggle('page_scroll-hidden');
  headerBurger.classList.toggle('header__burger_active');
  headerList.classList.toggle('header__menu_active');
});
headerList.addEventListener('click', (evt) => {
  if (evt.target.closest('.header__list')) {
    page.classList.remove('page_scroll-hidden');
    headerBurger.classList.remove('header__burger_active');
    headerList.classList.remove('header__menu_active');
  }
});

const sliderRoads = new Swiper('.road-types__slider', {
  slideClass: 'road-types__slide',
  slideActiveClass: 'road-types__slide_active',
  wrapperClass: 'road-types__wrapper',
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2 - 20 / 650,
      spaceBetween: 40,
    }
  },
});
const sliderCards = new Swiper('.bikes__slider', {
  slideClass: 'cards__item',
  wrapperClass: 'cards',
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: '.cards__pagination',
    clickable: true,
  }
});
function resetStyles(array, className, count) {
  array.forEach(item => {
    item.classList.remove(className);
  });
  array[count].classList.add(className);
}
const slidersListDesktop = Array.from(document.querySelectorAll('.bikes__slider-desktop'));
const slidersListMobile = Array.from(document.querySelectorAll('.bikes__slider'));
const elemNavigation = Array.from(document.querySelectorAll('.bikes__item'));
for (let i = 0; i < elemNavigation.length; i++) {
  elemNavigation[i].addEventListener('click', () => {
    resetStyles(elemNavigation, 'bikes__item_active', i);
    resetStyles(slidersListDesktop, 'bikes__slider-desktop_active', i);
    resetStyles(slidersListMobile, 'bikes__slider_active', i);
    document.querySelector('.bikes__menu-title').textContent = elemNavigation[i].textContent;
  });
}
document.querySelector('.bikes__menu').addEventListener('click', (evt) => {
  document.querySelector('.bikes__list').classList.toggle('bikes__list_active');
  document.querySelector('.bikes__menu-title').classList.toggle('bikes__menu-title_active')
});

const confirm = document.querySelector('.footer__confirm');
const formField = document.querySelector('.footer__field');
confirm.addEventListener('click', () => {
  formField.value = 'Круто!';
  confirm.classList.remove('footer__confirm_active');
  formField.bloor;
});
formField.oninput = () => {
  confirm.classList.add('footer__confirm_active');
};
formField.addEventListener('focusin', () => {
  if (formField.value != 'Круто!' && formField.value) {
    confirm.classList.add('footer__confirm_active');
  }
  else {
    confirm.classList.remove('footer__confirm_active');
  }
});
const switchTheme = document.querySelectorAll('.switch__button');
switchTheme.forEach((elem) => {
  elem.addEventListener('click', () => {
    switchTheme.forEach((elem) => {
      elem.classList.toggle('switch__button_active');
    });
    document.documentElement.classList.toggle('theme-dark');
  })
});

