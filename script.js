function toggleMenu() {
    // Select the menu links container
    const menu = document.querySelector(".menu-links");

    // Select the hamburger icon (assuming it's a class)
    const icon = document.querySelector("hamburger-icon");

    // Toggle the "open" class on the menu links container
    menu.classList.toggle("open");

    // Toggle the "open" class on the hamburger icon
    icon.classList.toggle("open");
}
