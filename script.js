'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// querySelctorAll: this function returns all elements that match the selector.
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  // console.log('Button clicked');
  // classList.remove(): this function removes a class('hidden') from an element('modal'). You shouldn't use dot notation here for class names.
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}
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

// eventListener('keydown', function (e)): parameter e is the event object.
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // CloseModal();
    // 중요: hidden(display: 'none') 상태 이라면 모달을 닫을 필요가 없기 때문. 모달이 열리지 않았는데 굳이 CloseModal()을 호출하여 메모리 낭비를 할 필요 없음. 실제로 유저가 느끼지는 못하지만 나중에 코드가 길어지면 속도에 문제가 생길 수 있다.
    CloseModal();
  }
});
