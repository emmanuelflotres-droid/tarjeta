// Array con los mensajes personalizados para ella
const mensajesCumple = [
    "¡Feliz cumpleaños!",
    "Mi amor ❤️",
    "Eres luz en mi vida",
    "Te amo muchísimo",
    "Mi flor favorita",
    "Siempre brillas",
    "Sonríe siempre",
    "Disfruta tu día",
    "Qué hermosa eres",
    "Un detalle para ti",
    "Te amo, mi vida",
];

// Función principal para generar los elementos en pantalla
function generarFloresYTextos() {
    const contenedor = document.getElementById('floresContainer');
    const cantidadElementos = 16; // Número de elementos flotantes

    for (let i = 0; i < cantidadElementos; i++) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('elemento-flotante');

        // Posicionamiento aleatorio en la pantalla
        const randomX = Math.random() * 85 + 15; // Porcentaje de ancho
        const randomY = Math.random() * 75 + 18; // Porcentaje de alto
        const randomDelay = Math.random() * 12;  // Retardo de animación

        wrapper.style.left = `${randomX}%`;
        wrapper.style.top = `${randomY}%`;
        wrapper.style.animationDelay = `${randomDelay}s`;

        // Seleccionar un mensaje aleatorio del array
        const textoAleatorio = mensajesCumple[Math.floor(Math.random() * mensajesCumple.length)];

        // Estructura interna del elemento (Texto + Girasol)
        wrapper.innerHTML = `
            <span>${textoAleatorio}</span>
            <div class="girasol-icon">❤️</div>
        `;

        contenedor.appendChild(wrapper);
    }
}

// Ejecutar la función cuando cargue la página
document.addEventListener('DOMContentLoaded', () => {
    generarFloresYTextos();
});

// Efecto de explosión al tocar la pantalla
document.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    for (let i = 0; i < 20; i++) {
        const particula = document.createElement('div');
        particula.classList.add('particula-explosion');
        
        particula.style.left = `${x}px`;
        particula.style.top = `${y}px`;
        
        const angulo = Math.random() * Math.PI * 2;
        const distancia = Math.random() * 100 + 50;
        const destinoX = Math.cos(angulo) * distancia;
        const destinoY = Math.sin(angulo) * distancia;
        
        particula.style.setProperty('--dx', `${destinoX}px`);
        particula.style.setProperty('--dy', `${destinoY}px`);
        
        const colores = ['#ff4081', '#ffeb3b', '#ff5722', '#e91e63'];
        particula.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        
        document.body.appendChild(particula);
        
        setTimeout(() => {
            particula.remove();
        }, 800);
    }
});