'use strict';

console.log((2 + 20 + 42 + 16 + 11 + 5 + 18 + 19 + 15) % 60);
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//BTN Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//Page navigation

// document.querySelectorAll('.nav__link').forEach(link =>
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = link.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// );

//Event delegation
//1. Add event listener to common parent element
//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// const alertH1 = function (e) {
//   alert('onmousemove: Great!');
//   h1.removeEventListener('mouseenter', alertH1);
// };
// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', alertH1);

// const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;

// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   e.stopPropagation();
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   e.stopPropagation();
// });

// const h1 = document.querySelector('h1');

// //Going downwards : child

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);

// //Going upwards : parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// console.log(h1.closest('.header'));

// //siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.parentElement.children);
