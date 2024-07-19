// Sights object array
const sights = [
    {
        name: "Tres Valles Vitivinicola",
        location: "Ensenada",
        image: "images/sights/tres-valles-vitivinicola.webp",
        link: "https://www.tripadvisor.com/Attraction_Review-g150770-d3267417-Reviews-Tres_Valles_Vitivinicola-Ensenada_Ensenada_Municipality_Baja_California.html"
    },
    {
        name: "La Bufadora",
        location: "Ensenada",
        image: "images/sights/la-bufadora.webp",
        link: "https://www.tripadvisor.com/Attraction_Review-g150770-d153903-Reviews-La_Bufadora-Ensenada_Ensenada_Municipality_Baja_California.html"
    },
    {
        name: "Wild Canyon Adventures",
        location: "Cabo San Lucas",
        image: "images/sights/wild-adventure.webp",
        link: "https://www.tripadvisor.com/Attraction_Review-g152515-d1070811-Reviews-Wild_Canyon_Adventures-Cabo_San_Lucas_Los_Cabos_Baja_California.html"
    },
    {
        name: "Santa Maria Beach",
        location: "Cabo San Lucas",
        image: "images/sights/santa-maria-beach.webp",
        link: "https://www.tripadvisor.com/Attraction_Review-g152515-d186119-Reviews-Santa_Maria_Beach-Cabo_San_Lucas_Los_Cabos_Baja_California.html"
    },
    {
        name: "Malecon",
        location: "La Paz",
        image: "images/sights/malecon.webp",
        link: "https://www.tripadvisor.com/Attraction_Review-g150771-d152679-Reviews-Malecon-La_Paz_Baja_California.html"
    },
    {
        name: "Baja California Gallery",
        location: "La Paz",
        image: "images/sights/bc-gallery.webp",
        link: "https://www.tripadvisor.com/Attraction_Review-g150771-d22916968-Reviews-Baja_California_Gallery-La_Paz_Baja_California.html"
    },
    {
        name: "Tijuana Cultural Center",
        location: "Tijuana",
        image: "images/sights/centro-cultural-de-tijuana.webp",
        link: "https://www.tripadvisor.com/Attraction_Review-g150776-d152723-Reviews-Tijuana_Cultural_Center_CECUT-Tijuana_Baja_California.html"
    },
    {
        name: "Museo El Trompo",
        location: "Tijuana",
        image: "images/sights/museo-el-trompo.webp",
        link: "https://www.tripadvisor.com/Attraction_Review-g150776-d4697903-Reviews-Museo_El_Trompo-Tijuana_Baja_California.html"
    },
    {
        name: "Marine Preserve",
        location: "Cabo Pulmo",
        image: "images/sights/cabo-pulmo-marine-preserve.webp",
        link: "https://www.tripadvisor.com/Attraction_Review-g735523-d151798-Reviews-Cabo_Pulmo_Marine_Preserve-Cabo_Pulmo_Los_Cabos_Baja_California.html"
    },
    {
        name: "Dive House",
        location: "Cabo Pulmo",
        image: "images/sights/cabo-pulmo-dive-house.webp",
        link: "https://www.tripadvisor.com/Attraction_Review-g735523-d23965938-Reviews-Cabo_Pulmo_Dive_House-Cabo_Pulmo_Los_Cabos_Baja_California.html"
    },
    {
        name: "Decantos Vinicola",
        location: "Valle de Guadalupe",
        image: "images/sights/decantos-vinicola.webp",
        link: "https://www.tripadvisor.com/Attraction_Review-g499403-d8843059-Reviews-Decantos_Vinicola-Valle_de_Guadalupe_Ensenada_Municipality_Baja_California.html"
    },
    {
        name: "Monte Xanic",
        location: "Valle de Guadalupe",
        image: "images/sights/monte-xanic.webp",
        link: "https://www.tripadvisor.com/Attraction_Review-g499403-d3367525-Reviews-Monte_Xanic-Valle_de_Guadalupe_Ensenada_Municipality_Baja_California.html"
    }
];

// Get div element
const divGrid = document.querySelector(".grid");

// Add oject array data to the div grid
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

    city.innerHTML = `<span>Location:</span> ${sight.location}`;
    section.appendChild(city);

    a.textContent = "See more about this sight";
    a.setAttribute("href", sight.link);
    link.appendChild(a);
    section.appendChild(link);

    divGrid.appendChild(section);
});