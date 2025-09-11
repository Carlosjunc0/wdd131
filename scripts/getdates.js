document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("currentyear");
  const lastModified = document.getElementById("lastModified");

  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  lastModified.textContent = `Last Modification: ${document.lastModified}`;
});
