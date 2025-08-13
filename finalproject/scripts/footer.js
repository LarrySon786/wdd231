// Menu Display:

let hamburgerButton = document.querySelector(".hamburger");
const navigation = document.querySelector("#navigation");

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('show');
    navigation.classList.toggle('show');
})

// Footer display message

const footer = document.querySelector('#date-modified');

footer.innerHTML = `©2025 | Brandon Richards | Date Last Modified: ${document.lastModified}`

