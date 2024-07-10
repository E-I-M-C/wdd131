// Gets and displays dates
const currentYear = document.getElementById("currentyear");
currentYear.innerHTML = new Date().getFullYear();

const dateLastModified = document.getElementById("lastModified");
dateLastModified.innerHTML = `Last Modification: ${document.lastModified}`;

// Product Array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];
const select = document.querySelector("select");

products.forEach(product => {
    const option = document.createElement("option");
    option.textContent = product.name;
    option.setAttribute("value", product.id);
    select.appendChild(option);
});