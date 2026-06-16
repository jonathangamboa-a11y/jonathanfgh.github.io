// script.js - Animaciones para la página de Partidos Políticos

// Animación de colores en el fondo (requisito obligatorio)
function animateBackground() {
    const colors = [
        '#0f0f23',
        '#1a1a2e',
        '#16213e',
        '#0f1b2e'
    ];
    let index = 0;
    
    setInterval(() => {
        document.body.style.transition = 'background 8s ease';
        document.body.style.background = colors[index];
        index = (index + 1) % colors.length;
    }, 7000);
}

// Confeti personalizado con colores de partidos políticos
function createConfetti() {
    const colors = ['#8B0000', '#FFCC00', '#003087', '#006400', '#FF6600', '#FFFFFF'];
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '9999';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 12 + 8 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.opacity = Math.random() + 0.5;
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        confettiContainer.appendChild(confetti);

        const duration = Math.random() * 4000 + 3000;
        const angle = Math.random() * 80 - 40;

        confetti.animate([
            { 
                transform: `translateY(0) rotate(0deg)`,
                opacity: 1 
            },
            { 
                transform: `translateY(${window.innerHeight + 100}px) rotate(${angle * 8}deg)`,
                opacity: 0 
            }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
        });

        setTimeout(() => confetti.remove(), duration + 500);
    }

    // Eliminar contenedor después de la animación
    setTimeout(() => confettiContainer.remove(), 8000);
}

// Ejecutar animaciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    animateBackground();
    
    // Confeti inicial
    createConfetti();
    
    // Confeti cada 8 segundos
    setInterval(() => {
        if (Math.random() > 0.4) createConfetti();
    }, 8000);

    // Efecto hover adicional en tarjetas
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'all 0.3s ease';
        });
    });
});

// Animación extra al hacer clic en el header
document.querySelector('header').addEventListener('click', () => {
    createConfetti();
});