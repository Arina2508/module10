document.querySelector('.arrow_btn').addEventListener('click', function(e) {
  e.target.closest('.arrow_btn').classList.toggle('arrow_btn--toggle');
})