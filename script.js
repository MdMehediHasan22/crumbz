document.addEventListener('DOMContentLoaded', function () {
    // Navbar Toggle for Mobile
    const toggleButton = document.querySelector('.navbar_mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar_mobile-menu-items');

    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
        });
    }

    // Scrolling Navbar Effect
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 0) {
                navbar.classList.add('navbar--scroll');
            } else {
                navbar.classList.remove('navbar--scroll');
            }
        }
    });

    // Carousel Functionality
    function setupCarousel(carousel) {
        let index = 0;
        const slides = carousel.querySelectorAll('.carousel_item');
        const totalSlides = slides.length;
        const inner = carousel.querySelector('.carousel_inner');

        if (totalSlides <= 1) return; // If there's only one image, don't animate

        function showNextSlide() {
            index = (index + 1) % totalSlides;
            inner.style.transform = `translateX(-${index * 100}%)`;
        }

        setInterval(showNextSlide, 3000); // Change slide every 3 seconds
    }

    // Apply carousel functionality to all carousels on the page
    document.querySelectorAll('.carousel').forEach(setupCarousel);
});
