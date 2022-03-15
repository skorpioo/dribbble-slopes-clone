const menuToggle = document.querySelector('.toggle-btn');
const main = document.querySelector('.main');

menuToggle.addEventListener('click', () => {
	main.classList.toggle('open');
});

const slideContent = document.querySelector('.arrow');
const content = document.querySelector('.content-wrapper');

slideContent.addEventListener('click', () => {
	content.classList.toggle('slide');
});
