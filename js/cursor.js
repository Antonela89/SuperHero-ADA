// Nodos del DOM
const $dot = document.getElementById('cursor-dot');
const $outline = document.getElementById('cursor-outline');

if ($dot && $outline) {
    
    // Movimiento
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Punto central (instantáneo)
        $dot.style.left = `${posX}px`;
        $dot.style.top = `${posY}px`;

        // Icono seguidor (con delay suave)
        $outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" }); 
    });

    // Efecto Hover
    const interactives = document.querySelectorAll('a, button, input, select, .cursor-pointer');

    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => {
            $outline.classList.add('cursor-hover');
            $dot.classList.add('dot-hover'); 
        });

        el.addEventListener('mouseleave', () => {
            $outline.classList.remove('cursor-hover');
            $dot.classList.remove('dot-hover');
        });
    });
}