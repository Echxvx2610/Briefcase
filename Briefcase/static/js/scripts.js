function typeWriter(element, text, i = 0) {
    if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(element, text, i), 100); // Velocidad de escritura
    } else {
        // Mantener el cursor parpadeante al final
        element.style.borderRight = '2px solid #ffffff';
        element.style.animation = 'blink-caret 0.75s step-end infinite';
    }
}

function startMultiTypewriter() {
    const elements = document.querySelectorAll('.typewriter-multi');
    
    elements.forEach((element, index) => {
        const text = element.textContent; // Guardamos el texto original
        element.textContent = ''; // Limpiamos el contenido
        
        // Comenzamos a escribir cada elemento con un retraso
        setTimeout(() => {
            element.style.width = 'auto';
            typeWriter(element, text);
        }, index * 3000); // Retraso entre cada título
    });
}

// Iniciar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    startMultiTypewriter();
});