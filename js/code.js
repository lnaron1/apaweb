const menuBtn = document.querySelector(".menuBtn");
const navmenu = document.querySelector(".navmenu");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navmenu.classList.toggle("active");
});