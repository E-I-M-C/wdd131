// Restaurants object array
const restaurantList = [
    {
        name: "San Miguel Restaurant",
        location: "Tijuana",
        image: "images/restaurants/san-miguel-restaurante.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g150776-d10393279-Reviews-San_Miguel_Restaurant-Tijuana_Baja_California.html"
    },
    {
        name: "Condimento Restaurant",
        location: "Tijuana",
        image: "images/restaurants/condimento-restaurante.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g150776-d3825175-Reviews-Condimento_Restaurant-Tijuana_Baja_California.html"
    },
    {
        name: "Latitud 32",
        location: "Ensenada",
        image: "images/restaurants/latitud-32.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g150770-d5598013-Reviews-Latitud_32-Ensenada_Ensenada_Municipality_Baja_California.html"
    },
    {
        name: "I-Petra",
        location: "Ensenada",
        image: "images/restaurants/i-petra.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g6755849-d23814828-Reviews-Restaurante_I_Petra-Ejido_El_Porvenir_Valle_de_Guadalupe_Ensenada_Municipality_.html"
    },
    {
        name: "Ochuna Restaurant",
        location: "Rosarito",
        image: "images/restaurants/restaurante-ochuna.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g150774-d9819559-Reviews-Ochuna_Restaurante-Rosarito_Baja_California.html"
    },
    {
        name: "El Gaucho Argentino",
        location: "Rosarito",
        image: "images/restaurants/el-gaucho.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g150774-d4605142-Reviews-El_Gaucho_Argentino-Rosarito_Baja_California.html"
    },
    {
        name: "Corazón Artesano",
        location: "Mexicali",
        image: "images/restaurants/corazon-artesano.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g154247-d26246299-Reviews-Corazon_Artesano-Mexicali_Baja_California.html"
    },
    {
        name: "Cenaduria Selecta",
        location: "Mexicali",
        image: "images/restaurants/cenaduria-selecta.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g154247-d2640436-Reviews-Cenaduria_Selecta-Mexicali_Baja_California.html"
    },
    {
        name: "El Ciclo Restaurant",
        location: "Tecate",
        image: "images/restaurants/el-ciclo-restaurante.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g499402-d15748060-Reviews-El_Ciclo_Restaurante-Tecate_Baja_California.html"
    },
    {
        name: "Meson Tkt",
        location: "Tecate",
        image: "images/restaurants/meson-tkt.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g499402-d7319132-Reviews-Meson_Tkt-Tecate_Baja_California.html"
    },
    {
        name: "Hacienda Guadalupe Restaurant",
        location: "Valle de Guadalupe",
        image: "images/restaurants/hacienda-guadalupe-restaurant.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g499403-d2700028-Reviews-Hacienda_Guadalupe_Restaurante-Valle_de_Guadalupe_Ensenada_Municipality_Baja_Cali.html"
    },
    {
        name: "Restaurant Laja",
        location: "Valle de Guadalupe",
        image: "images/restaurants/restaurante-laja.webp",
        link: "https://www.tripadvisor.com/Restaurant_Review-g499403-d1231924-Reviews-Restaurante_Laja-Valle_de_Guadalupe_Ensenada_Municipality_Baja_California.html"
    }
];

// Get div element
const divGrid = document.querySelector(".grid");

// Add oject array data to the div grid
const displayRestaurants = (restaurants) => {
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

        city.innerHTML = `<span>City:</span> ${restaurant.location}`;
        section.appendChild(city);

        a.textContent = `See more about this restaurant`;
        a.setAttribute("href", restaurant.link);
        link.appendChild(a);
        section.appendChild(link);

        divGrid.appendChild(section);
    });
}

displayRestaurants(restaurantList);