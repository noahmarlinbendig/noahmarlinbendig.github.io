document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const placeholder = document.getElementById("nav-placeholder");
  const yearElement = document.getElementById("year");

  let headerHeight = 20;
  if (header !== null) {
    headerHeight = header.offsetHeight;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY >= headerHeight) {
      nav?.classList.add("fixed");
    } else {
      nav?.classList.remove("fixed");
    }
  });

  if (placeholder) {
    fetch("/nav.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        placeholder.innerHTML = data;
      })
      .catch((error) => {
        console.error("Fehler beim Laden der Navigation:", error);
      });
  }

  if (yearElement) {
    yearElement.innerHTML = new Date().getFullYear();
  }
});
