const btn = document.querySelector('.open-menu')
const btnClose = document.querySelector('.close-menu')
const nav = document.getElementById('menu')

// open menu
btn.addEventListener('click', () => {
  btn.classList.add('open')
  btn.classList.add('hidden')
  nav.classList.add('flex')
  nav.classList.remove('hidden')
  btnClose.classList.remove('hidden')
  console.log('object')
})

// close menu
btnClose.addEventListener('click', () => {
  nav.classList.add('hidden')
  btnClose.classList.add('hidden')
  btn.classList.remove('hidden')
})

// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // autoplay: {
  //   // delay: 5000,
  // },

  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // type: 'progressbar',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
