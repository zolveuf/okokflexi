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

document.getElementById("profile-toggle").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    var dropdownMenu = document.getElementById("dropdown-menu");
    
    // Toggle the 'show' class
    dropdownMenu.classList.toggle("show");
});

function toggleExpand(element) {
    const icon = element.querySelector('.icon');
    
    // Toggle the 'expanded' class to show or hide the audio
    if (element.classList.contains('expanded')) {
        element.classList.remove('expanded');
        icon.innerHTML = '&#9660;'; // Down arrow
    } else {
        element.classList.add('expanded');
        icon.innerHTML = '&#9650;'; // Up arrow
    }
}

function toggleExpand(profilElement) {
    profilElement.classList.toggle('expanded');
}