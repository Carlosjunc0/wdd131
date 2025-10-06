const hamburgerBtn = document.getElementById('hamburger-btn');
const nav = document.getElementById('nav');

hamburgerBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;