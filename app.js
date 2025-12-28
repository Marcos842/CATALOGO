// ===== DROPDOWN DE MARCAS =====
document.addEventListener('DOMContentLoaded', function() {

    // Seleccionar el dropdown de Marcas
    const dropdownToggle = document.querySelector('.navbar-menu .dropdown > .nav-link');
    const dropdownMenu = document.querySelector('.navbar-menu .dropdown .dropdown-menu');
    const dropdown = document.querySelector('.navbar-menu .dropdown');

    if (dropdownToggle && dropdownMenu) {
        // Al hacer clic en "Marcas"
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });

        // Cerrar al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }

    // ===== MENÚ MÓVIL (HAMBURGUESA) =====
    const navToggler = document.getElementById('navToggler');
    const navMenu = document.getElementById('navMenu');

    if (navToggler && navMenu) {
        navToggler.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // ===== SCROLL SUAVE =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Cerrar menú móvil si está abierto
                    if (navMenu) {
                        navMenu.classList.remove('active');
                    }
                    // Cerrar dropdown si está abierto
                    if (dropdown) {
                        dropdown.classList.remove('active');
                    }
                }
            }
        });
    });

});

// ===== INICIALIZAR TODOS LOS SWIPERS =====
document.addEventListener('DOMContentLoaded', function() {
    const swipers = document.querySelectorAll('.swiper');

    swipers.forEach(function(swiperElement) {
        new Swiper(swiperElement, {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: 'slide',
            speed: 600,
            autoHeight: false,
        });
    });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            navbar.style.padding = '15px 0';
        }
    }
});
