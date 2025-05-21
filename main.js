// Tunggu sampai dokumen selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi semua fungsi
    initHeaderScroll();
    initNavLinkActive();
    initHamburgerMenu();
    initScrollAnimation();
    initTypeWriter();
});

// Efek header saat scroll
function initHeaderScroll() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Ubah navigasi aktif saat scrolling
function initNavLinkActive() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Hamburger menu untuk mobile
function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Animasi elemen saat scroll
function initScrollAnimation() {
    const animItems = document.querySelectorAll('.project-card, .skill-category, .stat-item, .section-title, .about-text, .contact-form');
    
    function checkScroll() {
        animItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 100) {
                item.classList.add('animate');
            }
        });
    }
    
    // Tambahkan class CSS untuk animasi
    animItems.forEach(item => {
        item.classList.add('fade-in');
    });
    
    // Periksa scroll saat halaman dimuat
    window.addEventListener('load', checkScroll);
    
    // Periksa scroll saat user scroll
    window.addEventListener('scroll', checkScroll);
}

// Efek typing text di hero section
function initTypeWriter() {
    const textElement = document.querySelector('.hero-content .subtitle');
    if (!textElement) return;
    
    const text = textElement.textContent;
    textElement.textContent = '';
    
    let i = 0;
    const speed = 100; // milliseconds per character
    
    function type() {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    setTimeout(() => {
        type();
    }, 500);
}

// Animasi tambahan untuk background
function animateBackground() {
    const cubes = document.querySelectorAll('.cube');
    cubes.forEach(cube => {
        // Buat posisi acak
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        
        // Terapkan transformasi
        cube.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 360}deg)`;
    });
}

// Panggil animasi background saat halaman dimuat
window.addEventListener('load', animateBackground);

// Tambahkan CSS untuk animasi scroll
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    </style>
`);