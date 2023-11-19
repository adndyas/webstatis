document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll to section
    document.querySelectorAll('header nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active link on scroll
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }
        });
    });

    // Biar pas ngescroll smooth
        function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Menambahkan event listener untuk setiap elemen navigasi
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Menghindari aksi default dari link
            var sectionId = link.getAttribute('href').substring(1);
            scrollToSection(sectionId);
        });
    });
});