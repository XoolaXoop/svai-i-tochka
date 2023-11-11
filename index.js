const swiper1 = new Swiper('.swiper1', {
  direction: 'horizontal',
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: 'fraction'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  slidesPerView: parseInt(window.innerWidth) > 992 ? 2 : 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
window.onresize = () => {
  const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    slidesPerView: parseInt(window.innerWidth) > 992 ? 2 : 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

const menuBtn = document.querySelector('#nav-icon4');
const menu = document.querySelector('.menu');
const presentation = document.querySelector('.presentation');
const presentationImg = document.querySelector('.presentation__img');
const formOrder = document.querySelector('.form-order');
const formOrderButton = document.querySelector('.form-order__button');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open')
  menu.classList.toggle('menu_opened')
});

window.addEventListener('scroll', function () {
  const height = parseInt(window.getComputedStyle(presentationImg).height);
  presentation.style.marginBottom = top + 'px';
  console.log('top', top, 'pageYOffset', pageYOffset);
  console.log(pageYOffset);
  if (pageYOffset > 0 && pageYOffset < height) {
    formOrder.style.top = height - pageYOffset + 'px';
    presentation.style.marginBottom = height - pageYOffset - 20 + 'px';
  }
})

formOrderButton.addEventListener('click', function () {
  window.location.href = 'https://api.whatsapp.com/send?phone=79265593964';
})