document.addEventListener('DOMContentLoaded', function () {
    // Validar que todos los botones tengan role="button"
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach(button => {
      if (button.getAttribute('role') !== 'button') {
        console.warn(`Botón sin role="button":`, button);
      }
    });
  
    // Botones de idioma (toggle aria-pressed)
    const langButtons = document.querySelectorAll('.lang-btn');
  
    langButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        langButtons.forEach(b => b.setAttribute('aria-pressed', 'false')); // Resetear todos
        this.setAttribute('aria-pressed', 'true'); // Activar el clickeado
      });
    });
  });
  