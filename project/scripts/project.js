// Adds year to footer
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();
// Adds date of when the page was last modified to footer
const dateLastModified = document.querySelector("#lastModified");
dateLastModified.textContent = `Last Modification: ${document.lastModified}`;

// Code for dropdown menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const title = document.querySelector('h1');

hamButton.addEventListener('click', () => {
    title.classList.toggle('hidden');
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});