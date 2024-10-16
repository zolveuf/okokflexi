const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 60);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

/* DROPDOWN MENU */
const profileToggle = document.getElementById("profile-toggle");
const dropdownMenu = profileToggle.nextElementSibling;

// Function to toggle the dropdown in mobile
function toggleDropdown(e) {
    e.preventDefault(); // Prevent the default anchor behavior
    dropdownMenu.classList.toggle("open"); // Toggle the open class
}

// Function to check screen size and adjust behavior
function setupDropdown() {
    if (window.innerWidth <= 768) {
        // For mobile: Attach click event to toggle the dropdown only once
        profileToggle.addEventListener("click", toggleDropdown);
    } else {
        // Remove the click event in desktop view if it was previously added
        profileToggle.removeEventListener("click", toggleDropdown);
        // Ensure dropdown is hidden in desktop view until hover
        dropdownMenu.classList.remove("open");
    }
}

// Call setupDropdown initially and on window resize
setupDropdown();
window.addEventListener("resize", setupDropdown);
