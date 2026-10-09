/* ============================================
   CAFÉ EMERALDITA - main.js
   Interactividad del sitio (Fase 4)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    /* ============================================
       1. MENÚ HAMBURGUESA RESPONSIVE
       ============================================ */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Cerrar el menú al hacer clic en un enlace
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    /* ============================================
       2. NAVEGACIÓN SUAVE (SMOOTH SCROLL)
       ============================================ */
    // El CSS ya tiene scroll-behavior: smooth, pero añadimos
    // soporte para navegadores antiguos y para cerrar el menú.
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    smoothLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navbarEl = document.querySelector('.navbar');
                const headerOffset = navbarEl ? navbarEl.offsetHeight : 0;
                const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ============================================
       3. BARRA DE NAVEGACIÓN AL HACER SCROLL (STICKY)
       ============================================ */
    const navbar = document.getElementById('navbar');

    const handleNavbarScroll = () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    };

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Ejecutar al cargar

    /* ============================================
       4. ANIMACIONES DE APARICIÓN AL HACER SCROLL
       ============================================ */
    const revealElements = document.querySelectorAll('.feature-card, .product-showcase, .origen-grid, .mujeres-grid, .timeline-item, .testimonio-card, .contacto-grid, .section-header');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => {
            el.classList.add('reveal');
            revealObserver.observe(el);
        });
    } else {
        // Fallback: mostrar todo si no hay soporte
        revealElements.forEach(el => el.classList.add('visible'));
    }

    /* ============================================
       5. CARRUSEL / SLIDER DE LA GALERÍA
       ============================================ */
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (carouselTrack && prevBtn && nextBtn) {
        let currentIndex = 0;
        const slides = carouselTrack.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;
        const dotsContainer = document.getElementById('carouselDots');

        // Crear indicadores (dots)
        if (dotsContainer) {
            slides.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.className = 'carousel-dot';
                dot.setAttribute('aria-label', `Ir a la imagen ${index + 1}`);
                dot.setAttribute('role', 'tab');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateCarousel();
                });
                dotsContainer.appendChild(dot);
            });
        }

        const updateDots = () => {
            if (dotsContainer) {
                const dots = dotsContainer.querySelectorAll('.carousel-dot');
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
        };

        const updateCarousel = () => {
            const slideWidth = carouselTrack.clientWidth;
            carouselTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            updateDots();
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        };

        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Autoplay del carrusel
        let autoplayInterval = setInterval(nextSlide, 5000);

        // Pausar autoplay al pasar el mouse
        const carousel = document.getElementById('carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
            carousel.addEventListener('mouseleave', () => {
                autoplayInterval = setInterval(nextSlide, 5000);
            });
        }

        // Recalcular al redimensionar la ventana
        window.addEventListener('resize', updateCarousel);

        // Inicializar
        updateCarousel();
    }

    /* ============================================
       6. CONTADOR ANIMADO DE ESTADÍSTICAS
       ============================================ */
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'), 10);
        const duration = 2000; // ms
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Easing: easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(eased * target);
            element.textContent = currentValue;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        requestAnimationFrame(updateCounter);
    };

    if ('IntersectionObserver' in window && statNumbers.length > 0) {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        statNumbers.forEach(stat => statsObserver.observe(stat));
    }

    /* ============================================
       7. VALIDACIÓN DEL FORMULARIO DE CONTACTO
       ============================================ */
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const telefono = document.getElementById('telefono');
        const mensaje = document.getElementById('mensaje');
        const formSuccess = document.getElementById('formSuccess');

        const setError = (input, errorElement, message) => {
            input.classList.add('error');
            errorElement.textContent = message;
        };

        const clearError = (input, errorElement) => {
            input.classList.remove('error');
            errorElement.textContent = '';
        };

        // Validar nombre
        const validateNombre = () => {
            const errorEl = document.getElementById('error-nombre');
            if (nombre.value.trim().length < 3) {
                setError(nombre, errorEl, 'Por favor ingresa tu nombre completo (mínimo 3 caracteres).');
                return false;
            }
            clearError(nombre, errorEl);
            return true;
        };

        // Validar email
        const validateEmail = () => {
            const errorEl = document.getElementById('error-email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                setError(email, errorEl, 'Por favor ingresa un correo electrónico válido.');
                return false;
            }
            clearError(email, errorEl);
            return true;
        };

        // Validar teléfono (opcional, pero si se llena debe ser válido)
        const validateTelefono = () => {
            const errorEl = document.getElementById('error-telefono');
            if (telefono.value.trim() !== '') {
                const phoneRegex = /^[+\d\s()-]{7,15}$/;
                if (!phoneRegex.test(telefono.value.trim())) {
                    setError(telefono, errorEl, 'Ingresa un teléfono válido (ej. +57 300 000 0000).');
                    return false;
                }
            }
            clearError(telefono, errorEl);
            return true;
        };

        // Validar mensaje
        const validateMensaje = () => {
            const errorEl = document.getElementById('error-mensaje');
            if (mensaje.value.trim().length < 10) {
                setError(mensaje, errorEl, 'Por favor escribe un mensaje de al menos 10 caracteres.');
                return false;
            }
            clearError(mensaje, errorEl);
            return true;
        };

        // Validación en tiempo real
        nombre.addEventListener('blur', validateNombre);
        email.addEventListener('blur', validateEmail);
        telefono.addEventListener('blur', validateTelefono);
        mensaje.addEventListener('blur', validateMensaje);

        // Validación al enviar
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const isNombreValid = validateNombre();
            const isEmailValid = validateEmail();
            const isTelefonoValid = validateTelefono();
            const isMensajeValid = validateMensaje();

            if (isNombreValid && isEmailValid && isTelefonoValid && isMensajeValid) {
                // Mostrar mensaje de éxito
                if (formSuccess) {
                    formSuccess.hidden = false;
                }
                contactForm.reset();

                // Ocultar el mensaje después de unos segundos
                setTimeout(() => {
                    if (formSuccess) {
                        formSuccess.hidden = true;
                    }
                }, 5000);
            }
        });
    }
});
