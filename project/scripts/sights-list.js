const sights = [
    {
        name: "a",
        city: "a",
        image: "images/sights/",
        link: "a"
    },
    {
        name: "a",
        city: "a",
        image: "images/sights/",
        link: "a"
    },
    {
        name: "a",
        city: "a",
        image: "images/sights/",
        link: "a"
    }
];

const divGrid = document.querySelector(".grid");

sights.forEach(sight => {
    const section = document.createElement("section");
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const city = document.createElement("p");
    const link = document.createElement("p");
    const a = document.createElement("a");

    section.classList.toggle("list-item");

    img.setAttribute("src", sight.image);
    img.setAttribute("alt", sight.name);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", 1200);
    img.setAttribute("height", 800);
    section.appendChild(img);

    title.textContent = sight.name;
    section.appendChild(title);

    city.innerHTML = `<span>City:</span> ${sight.city}`;
    section.appendChild(city);

    a.textContent = "See more about this sight";
    a.setAttribute("href", sight.link);
    link.appendChild(a);
    section.appendChild(link);

    divGrid.appendChild(section);
});