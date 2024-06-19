const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

const dateLastModified = document.querySelector("#lastModified");
dateLastModified.textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const title = document.querySelector('h1');

hamButton.addEventListener('click', () => {
    title.classList.toggle('hidden');
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});