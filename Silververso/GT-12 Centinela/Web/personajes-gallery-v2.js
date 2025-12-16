// personajes-gallery-v2.js - Sistema de galería para personajes por categoría
(function () {
  if (typeof window === 'undefined') return;

  function slugify(text) {
    return String(text)
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function normalizeCategorias(categorias) {
    const data = window.personajesData && window.personajesData.categorias ? window.personajesData.categorias : {};
    if (!categorias || categorias.length === 0) return Object.keys(data);
    return categorias.map((c) => String(c).toLowerCase());
  }

  function cardHtml(item) {
    const name = item.name || '';
    const image = item.image || '';
    const link = item.link || '#';
    const alt = name ? name : 'Personaje';
    return `
      <div class="col-6 col-sm-4 col-md-3 col-lg-2">
        <a href="${link}" target="_blank" class="text-decoration-none">
          <div class="card h-100 shadow-sm">
            <img src="${image}" class="card-img-top gallery-image" alt="${alt}" style="object-fit: cover; height: auto; width: auto">
            <div class="card-body p-2 text-center">
              <div class="small fw-semibold text-dark">${name}</div>
            </div>
          </div>
        </a>
      </div>`;
  }

  function renderPersonajesGallery(containerId, categorias) {
    const container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
    if (!container) {
      console.error('No se encontró el contenedor de la galería de personajes');
      return;
    }

    if (!window.personajesData || !window.personajesData.categorias) {
      container.innerHTML = '<p class="text-center text-danger">Error: Datos de personajes no disponibles.</p>';
      console.error('personajesData no está definido. Asegúrate de cargar personajes-data.js antes de personajes-gallery-v2.js');
      return;
    }

    const cats = normalizeCategorias(categorias);
    let html = '';

    cats.forEach((key) => {
      const list = window.personajesData.categorias[key] || [];
      const section = `
        <div class="recopilatorio-section mb-5">
          <h3 class="mb-3 text-capitalize">${key}</h3>
          <div class="gallery-container">
            <div class="row g-3">
              ${list.length ? list.map(cardHtml).join('') : '<div class="col-12 text-muted">No hay personajes en esta categoría.</div>'}
            </div>
          </div>
        </div>`;
      html += section;
    });

    container.innerHTML = html || '<p class="text-center">No hay personajes para mostrar.</p>';
  }

  function getSelfScriptElement() {
    const scripts = document.getElementsByTagName('script');
    for (let i = scripts.length - 1; i >= 0; i--) {
      const src = scripts[i].getAttribute('src') || '';
      if (src.indexOf('personajes-gallery-v2.js') !== -1) return scripts[i];
    }
    return null;
  }

  function parseCategoriasFromQuery(src) {
    try {
      const url = new URL(src, window.location.origin);
      const cats = url.searchParams.get('categorias');
      if (!cats) return [];
      return cats.split(',').map((s) => s.trim()).filter(Boolean);
    } catch (e) {
      return [];
    }
  }

  // Exponer API global
  window.renderPersonajesGallery = renderPersonajesGallery;

  // Auto-init: si el script incluye ?categorias=... y data-container="..."
  document.addEventListener('DOMContentLoaded', function () {
    const self = getSelfScriptElement();
    if (!self) return;
    const cats = parseCategoriasFromQuery(self.getAttribute('src') || '');
    const targetId = self.getAttribute('data-container') || 'personajes-galeria';
    if (cats.length) {
      renderPersonajesGallery(targetId, cats);
    }
  });
})();
