const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        const aberto = menu.classList.toggle("menu-aberto");

        menuToggle.setAttribute("aria-expanded", aberto);
        menuToggle.textContent = aberto ? "✕" : "☰";
    });

    const linksMenu = document.querySelectorAll("#menu a");

    linksMenu.forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("menu-aberto");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}