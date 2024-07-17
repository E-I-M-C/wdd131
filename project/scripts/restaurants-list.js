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
        name: "Latitud 32",
        city: "Ensenada",
        image: "images/restaurants/latitud-32.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g150770-d5598013-Reviews-Latitud_32-Ensenada_Ensenada_Municipality_Baja_California.html"
    },
    {
        name: "I-Petra",
        city: "Ensenada",
        image: "images/restaurants/i-petra.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g6755849-d23814828-Reviews-Restaurante_I_Petra-Ejido_El_Porvenir_Valle_de_Guadalupe_Ensenada_Municipality_.html"
    },
    {
        name: "Ochuna Restaurante",
        city: "Rosarito",
        image: "images/restaurants/restaurante-ochuna.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g150774-d9819559-Reviews-Ochuna_Restaurante-Rosarito_Baja_California.html"
    },
    {
        name: "El Gaucho Argentino",
        city: "Rosarito",
        image: "images/restaurants/el-gaucho.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g150774-d4605142-Reviews-El_Gaucho_Argentino-Rosarito_Baja_California.html"
    },
    {
        name: "Corazón Artesano",
        city: "Mexicali",
        image: "images/restaurants/corazon-artesano.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g154247-d26246299-Reviews-Corazon_Artesano-Mexicali_Baja_California.html"
    },
    {
        name: "Cenaduria Selecta",
        city: "Mexicali",
        image: "images/restaurants/cenaduria-selecta.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g154247-d2640436-Reviews-Cenaduria_Selecta-Mexicali_Baja_California.html"
    },
    {
        name: "9",
        city: "9",
        image: "images/restaurants/",
        link: "9"
    },
    {
        name: "10",
        city: "10",
        image: "images/restaurants/",
        link: "10"
    },
    {
        name: "11",
        city: "11",
        image: "images/restaurants/",
        link: "11"
    },
    {
        name: "12",
        city: "12",
        image: "images/restaurants/",
        link: "12"
    }
];

const divGrid = document.querySelector(".grid");

restaurants.forEach(restaurant => {
    const section = document.createElement("section");
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const city = document.createElement("p");
    const link = document.createElement("p");
    const a = document.createElement("a");

    section.classList.toggle("list-item");

    img.setAttribute("src", restaurant.image);
    img.setAttribute("alt", restaurant.name);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", 1200);
    img.setAttribute("height", 800);
    section.appendChild(img);

    title.textContent = restaurant.name;
    section.appendChild(title);

    city.innerHTML = `<span>City:</span> ${restaurant.city}`;
    section.appendChild(city);

    a.textContent = "See more about this restaurant";
    a.setAttribute("href", restaurant.link);
    link.appendChild(a);
    section.appendChild(link);

    divGrid.appendChild(section);
});