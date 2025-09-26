const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Santa Cruz Bolivia",
        location: "Santa Cruz, Bolivia",
        dedicated: "2024, June, 24",
        area: 29000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/santa-cruz-bolivia-temple/santa-cruz-bolivia-temple-48551-main.jpg"
    },
    {
        templeName: "Chicago Illinois",
        location: "Chicago, Illinois, United States",
        dedicated: "1985, August, 9",
        area: 37062,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/chicago-illinois-temple/chicago-illinois-temple-58403-main.jpg"
    },
    {
        templeName: "Santiago Chile",
        location: "Santiago, Chile",
        dedicated: "1983, August, 24",
        area: 20831,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg"
    },
    {
        templeName: "Salta Argentina",
        location: "Salta, Argentina",
        dedicated: "2024, June, 16",
        area: 27000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48241-main.jpg"
    },
];

// Elements
const container = document.getElementById("temple-cards");
const title = document.getElementById("page-title");

// Function to create cards
function displayTemples(filteredTemples) {
    container.innerHTML = ""; // clear
    filteredTemples.forEach(t => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${t.templeName}</h3>
            <p><strong>Location:</strong> ${t.location}</p>
            <p><strong>Dedicated:</strong> ${t.dedicated}</p>
            <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
            <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
        `;

        container.appendChild(card);
    });
}

// Filters
function filterTemples(filter) {
    let filtered = [];
    switch (filter) {
        case "old":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
            break;
        case "new":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;
        default:
            filtered = temples;
    }
    title.textContent = filter.charAt(0).toUpperCase() + filter.slice(1);
    displayTemples(filtered);
}

// Event listeners for menu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = link.dataset.filter;
        filterTemples(filter);
    });
});

// Initial display
displayTemples(temples);

// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("show");
    menuToggle.textContent = isOpen ? "✖" : "☰";
    navMenu.setAttribute("aria-hidden", !isOpen);
});
