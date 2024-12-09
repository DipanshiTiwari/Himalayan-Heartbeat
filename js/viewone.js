// Function to toggle the visibility of content
function toggleContent(buttonId, contentId) {
    const toggleButton = document.getElementById(buttonId);
    const packageContent = document.getElementById(contentId);

    toggleButton.addEventListener('click', function() {
        // Toggle between showing and hiding the full content
        if (packageContent.classList.contains('collapsed')) {
            packageContent.classList.remove('collapsed');
            packageContent.classList.add('expanded');
            toggleButton.innerText = 'Read Less';
        } else {
            packageContent.classList.remove('expanded');
            packageContent.classList.add('collapsed');
            toggleButton.innerText = 'Read More';
        }
    });
}

// Initialize toggle functionality for both sections
toggleContent('toggleButton1', 'packageContent1');
toggleContent('toggleButton2', 'packageContent2');


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}