// Gets and displays dates
const currentYear = document.getElementById("currentyear");
currentYear.innerHTML = new Date().getFullYear();

const dateLastModified = document.getElementById("lastModified");
dateLastModified.innerHTML = `Last Modification: ${document.lastModified}`;

// Counts and Displays the amount of reviews
let reviewCount = localStorage.getItem("reviews") || 0;
const reviewDisplay = document.querySelector('h2');

reviewCount++
if (reviewCount == 1) {
    reviewDisplay.textContent = `You have made ${reviewCount} review.`;
} else {
    reviewDisplay.textContent = `You have made ${reviewCount} reviews.`;
}

localStorage.setItem("reviews", reviewCount);