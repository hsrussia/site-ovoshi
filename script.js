// ===== DOM Elements =====
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');
const backToTopBtn = document.getElementById('backToTop');
const navbar = document.getElementById('navbar');
const productCards = document.querySelectorAll('.product-card');

// ===== MODAL =====
function openModal(category, imgSrc) {
    modalTitle.textContent = category;
    
    if (imgSrc) {
        modalImage.src = imgSrc;
        modalImage.alt = category;
        modalImage.style.display = 'block';
    } else {
        modalImage.style.display = 'none';
    }
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Открытие модалки по клику на карточку товара
productCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        const img = card.querySelector('img');
        const imgSrc = img ? img.src : null;
        
        openModal(category, imgSrc);
    });
});

// Закрытие по кнопке
modalClose.addEventListener('click', closeModal);

// Закрытие по клику на оверлей
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Закрытие по Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// ===== BACK TO TOP =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const offset = navbar.offsetHeight + 20;
            const elementPosition = target.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== CONSOLE GREETING =====
console.log('🥬 Свежий Урожай — сайт загружен! Добро пожаловать, брат!');
console.log('🍎 Фрукты | 🥕 Овощи | 🥬 Зелень | 🍄 Грибы | 🍓 Ягоды');  