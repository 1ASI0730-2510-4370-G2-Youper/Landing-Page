document.addEventListener('DOMContentLoaded', function () {
  // Validar que todos los botones tengan role="button"
  const buttons = document.querySelectorAll('button');
  
  buttons.forEach(button => {
    if (button.getAttribute('role') !== 'button') {
        console.warn(`Botón sin role="button":`, button);
    }
  });
  
  // Botones de idioma (toggle aria-pressed)
  const langButtons = document.querySelectorAll('.i18n-btn');
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const selectedLang = this.getAttribute('data-lang');

      langButtons.forEach(b => b.setAttribute('aria-pressed', 'false')); // Resetear todos
      this.setAttribute('aria-pressed', 'true'); // Activar el clickeado

      // Cargar idioma seleccionado
      loadLanguage(selectedLang);

      // Actualizar el atributo lang en la etiqueta <html>
      document.documentElement.setAttribute('lang', selectedLang);
    });
  });

  // Cargar idioma por defecto (inglés)
  loadLanguage('en');

  function loadLanguage(lang) {
    fetch(`./i18n/${lang}.json`)
      .then(res => res.json())
      .then(translations => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (translations[key]) {
            el.textContent = translations[key];
          }
        });

        // Cambiar el <title> si existe en el archivo de traducción
        if (translations.title) {
          document.title = translations.title;
        }
      })
    .catch(err => console.error(`Error cargando idioma '${lang}':`, err));
  }
});
  