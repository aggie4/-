const toggleBth = document.querySelector('.navber__toggleBth');
const list = document.querySelector('.navber__list');

toggleBth.addEventListener('click', () => {
  list.classList.toggle('active');
});
