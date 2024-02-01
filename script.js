'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// querySelctorAll: this function returns all elements that match the selector.
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  console.log('Button clicked');
  // classList.remove(): this function removes a class('hidden') from an element('modal'). You shouldn't use dot notation here for class names.
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);

  // btnCloseModal.addEventListener: this function adds an event listener to the element that matches the selector.
  //   btnCloseModal.addEventListener('click', function () {
  //     modal.classList.add('hidden');
  //     overlay.classList.add('hidden');
  //   });

  //   overlay.addEventListener('click', function () {
  //     modal.classList.add('hidden');
  //     overlay.classList.add('hidden');
  //   });

  // Refactoring: 같은 코드 중복시 함수를 만들어서 사용하면 가독하기 좋다.
  const CloseModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };
  btnCloseModal.addEventListener('click', CloseModal);
  overlay.addEventListener('click', CloseModal);
}
