import './style.css';

const h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
  h1.textContent = 'Your project is done!';
});