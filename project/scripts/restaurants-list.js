const restaurants = [
    {
        name: "San Miguel Restaurant",
        city: "Tijuana",
        image: "images/restaurants/san-miguel-restaurante.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g150776-d10393279-Reviews-San_Miguel_Restaurant-Tijuana_Baja_California.html"
    },
    {
        name: "Condimento Restaurant",
        city: "Tijuana",
        image: "images/restaurants/condimento-restaurante.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g150776-d3825175-Reviews-Condimento_Restaurant-Tijuana_Baja_California.html"
    },
    {
        name: "3",
        city: "3",
        image: "3",
        link: "3"
    },
    {
        name: "4",
        city: "4",
        image: "4",
        link: "4"
    },
    {
        name: "5",
        city: "5",
        image: "5",
        link: "5"
    },
    {
        name: "6",
        city: "6",
        image: "6",
        link: "6"
    },
    {
        name: "7",
        city: "7",
        image: "7",
        link: "7"
    },
    {
        name: "8",
        city: "8",
        image: "8",
        link: "8"
    },
    {
        name: "9",
        city: "9",
        image: "9",
        link: "9"
    },
    {
        name: "10",
        city: "10",
        image: "10",
        link: "10"
    },
    {
        name: "11",
        city: "11",
        image: "11",
        link: "11"
    },
    {
        name: "12",
        city: "12",
        image: "12",
        link: "12"
    }
];

const divGrid = document.querySelector(".grid");

restaurants.forEach(restaurant => {
    const section = document.createElement("section");
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const city = document.createElement("p");
    const link = document.createElement("a");

    section.classList.toggle("list-item");

    img.setAttribute("src", restaurant.image);
    img.setAttribute("alt", restaurant.name);
    img.setAttribute("loading", "lazy");
    section.appendChild(img);

    title.textContent = restaurant.name;
    section.appendChild(title);

    city.innerHTML = `<span>City:</span> ${restaurant.city}`;
    section.appendChild(city);

    link.textContent = "See more";
    link.setAttribute("href", restaurant.link);
    section.appendChild(link);

    divGrid.appendChild(section);
});