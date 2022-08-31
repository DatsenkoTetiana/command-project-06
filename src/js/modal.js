(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
      body: document.querySelector('[data-page]'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
     refs.body.classList.toggle('no-scroll');
  }
})();


// (() => {
//   const refs = {
//     openModalBtns: document.querySelectorAll('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };
// ​
//   refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
//   refs.closeModalBtn.addEventListener('click', toggleModal);
// ​
//   function toggleModal() {
//     refs.modal.classList.toggle('backdrop--hidden');
//          refs.body.classList.toggle('no-scroll');

//   }
// })();
// Свернуть










