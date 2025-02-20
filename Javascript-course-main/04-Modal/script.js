'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
let btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);
const openModal = function () {
//   console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if(e.key==='Escape'){
    if(!modal.classList.contains('hidden')){
        closeModel();
    }
  }
});
