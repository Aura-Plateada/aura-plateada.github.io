// libro.js - Sistema de navegación y estilos para las páginas del libro (A, B, C, D)

// Configuración de las páginas del libro
const paginasLibro = {
    'creditos.html': { letra: 'A', titulo: '', fondo: 'A.jpg' }, // Título vacío porque está en la imagen de fondo
    'prologo.html': { letra: 'B', titulo: '', fondo: 'B.jpg' },
    'contenidos.html': { letra: 'C', titulo: '', fondo: 'C1.jpg' },
    'apendice.html': { letra: 'D', titulo: '', fondo: 'portadaD.jpg' },
    // Subpáginas del apéndice
    'comicssentinel.html': { letra: 'D', titulo: '', fondo: 'D_Comics.jpg', esSubpagina: true },
    'glosario.html': { letra: 'D', titulo: '', fondo: 'D_Glosario.jpg', esSubpagina: true },
    'opengamelicense.html': { letra: 'D', titulo: '', fondo: 'D_OpenGameLicense.jpg', esSubpagina: true }
};

// Obtener la página actual
function getPaginaActual() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    return filename;
}

// Generar los estilos CSS para la página del libro
function generarEstilosLibro() {
    const paginaActual = getPaginaActual();
    const config = paginasLibro[paginaActual];
    
    if (!config) return '';
    
    return `
        <style>
            body {
                background-color: #f5f5f5;
                padding: 0;
                margin: 0;
            }
            
            .page-container {
                max-width: 100%;
                width: 100%;
                margin: 0;
                padding: 0;
                background-image: url('../Imágenes/fondos/${config.fondo}');
                background-size: 100% auto;
                background-position: top center;
                background-repeat: no-repeat;
                position: relative;
                min-height: fit-content;
                margin-bottom: 0;
            }
            
            .content-wrapper {
                padding: 2cm 5% 2cm 5%;
                padding-top: 4.5cm;
                padding-bottom: 50%;
                min-height: auto;
            }
            
            h1 {
                font-size: 40pt;
                line-height: 200%;
                color: #0e5430;
                font-weight: bold;
                text-align: center;
                margin: 0 5% 0 5%;
            }
            
            .content-section {
                margin: 2rem 10%;
                text-align: justify;
            }
            
            .content-text {
                font-size: 20pt;
                line-height: 150%;
                color: #000;
                margin: 1rem 0;
            }
            
            /* Botones de navegación del libro en vertical */
            .nav-buttons-vertical {
                position: fixed;
                left: 2%;
                top: 50%;
                transform: translateY(-50%);
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
                z-index: 100;
            }
            
            .btn-nav-libro-small {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #bdcbb9;
                color: #9ca899;
                text-decoration: none;
                transition: all 0.3s ease;
                border: 3px solid #d3d2d2;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            }
            
            .btn-nav-libro-small.active {
                background-color: #416e4d;
                border-color: #000000;
                color: white;
            }
            
            .btn-nav-libro-small span {
                font-size: 1.7rem;
                font-weight: bold;
                font-family: "Eurostile", "Arial Narrow", Arial, sans-serif;
            }
            
            .btn-nav-libro-small:hover {
                background-color: #416e4d;
                border-color: #000000;
                color: white;
                transform: scale(1.05);
                box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
            }
        </style>
    `;
}

// Generar los botones de navegación vertical
function generarBotonesNavegacion() {
    const paginaActual = getPaginaActual();
    const config = paginasLibro[paginaActual];
    
    let html = '<div class="nav-buttons-vertical">';
    
    for (const [archivo, configItem] of Object.entries(paginasLibro)) {
        // Solo mostrar páginas principales (no subpáginas)
        if (configItem.esSubpagina) continue;
        
        const isActive = archivo === paginaActual ? 'active' : '';
        html += `
        <a href="${archivo}" class="btn-nav-libro-small ${isActive}">
            <span>${configItem.letra}</span>
        </a>`;
    }
    
    html += '</div>';
    return html;
}

// Generar el contenedor de la página
function generarContenedorPagina(contenidoHTML) {
    const paginaActual = getPaginaActual();
    const config = paginasLibro[paginaActual];
    
    if (!config) return contenidoHTML;
    
    // Si no hay título, solo devolver el contenido sin el h1
    const tituloHTML = config.titulo ? `<h1>${config.titulo}</h1>` : '';
    
    return `
        <div class="page-container">
            <div class="content-wrapper">
                ${tituloHTML}
                <div class="content-section">
                    ${contenidoHTML}
                </div>
            </div>
        </div>
    `;
}

// Inicializar la página del libro cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Insertar estilos en el head
    const head = document.querySelector('head');
    head.insertAdjacentHTML('beforeend', generarEstilosLibro());
    
    // Insertar botones de navegación vertical
    const navPlaceholder = document.getElementById('nav-buttons-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = generarBotonesNavegacion();
    }
    
    // Si existe un placeholder para el contenedor, generarlo
    const containerPlaceholder = document.getElementById('page-container-placeholder');
    if (containerPlaceholder) {
        const contenido = containerPlaceholder.innerHTML;
        containerPlaceholder.outerHTML = generarContenedorPagina(contenido);
    }
});
