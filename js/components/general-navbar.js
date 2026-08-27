// Componente reutilizable <general-navbar> (Web Component, módulo ES).
// Carga el fragmento compartido components/navbar.html y marca automáticamente
// el enlace activo según la página en la que se encuentra el usuario.
// Evita repetir el código del navbar en cada vista del sitio.
class GeneralNavbar extends HTMLElement {
  constructor() {
    super();
    // Página actual (nombre de archivo). Si no se determina, asume index.html.
    const fileName =
      (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    this.page = fileName;
  }

  connectedCallback() {
    this.loadNavbar();
  }

  async loadNavbar() {
    try {
      const src = this.getAttribute('src') || 'components/navbar.html';
      const res = await fetch(src);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} al cargar ${src}`);
      }
      const html = await res.text();
      // Light DOM (sin shadow root) para que Bootstrap CSS aplique directamente.
      this.innerHTML = html;
      this.markActivePage();
    } catch (err) {
      console.error('No se pudo cargar el navbar:', err);
      this.innerHTML =
        '<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">' +
        '<div class="container py-2"><span class="navbar-text">No se pudo cargar la navegación.</span></div></nav>';
    }
  }

  // Marca con la clase "active" el enlace que corresponde a la página actual.
  markActivePage() {
    const memberMatch = this.page.match(/^member([1-5])\.html$/);
    let activeHref;

    if (memberMatch) {
      activeHref = this.page; // p. ej. member1.html
    } else if (this.page === 'bitacora.html') {
      activeHref = 'bitacora.html';
    } else {
      activeHref = 'index.html';
    }

    const link = this.querySelector(`a[href="${activeHref}"]`);
    if (link) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }

    // En las páginas de perfil, el desplegable "Perfiles" también queda activo.
    if (memberMatch) {
      const dropdownToggle = this.querySelector('.nav-item.dropdown > .nav-link');
      if (dropdownToggle) {
        dropdownToggle.classList.add('active');
        dropdownToggle.setAttribute('aria-current', 'true');
      }
    }
  }
}

customElements.define('general-navbar', GeneralNavbar);