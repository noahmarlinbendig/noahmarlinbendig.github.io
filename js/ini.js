//Ändert die Nav Leiste von unterm Header zu Oben fixiert
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");

  if(!header == null){
    const headerHeight = header.offsetHeight;
  } else{
    const headerHeight = 0;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY >= headerHeight) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("nav-placeholder");

  fetch("/nav.html")
    .then((response) => response.text())
    .then((data) => {
      placeholder.innerHTML = data;
    })
    .catch((error) =>
      console.error("Fehler beim Laden der Navigation:", error)
    );
});

document.getElementById("year").innerHTML = new Date().getFullYear();