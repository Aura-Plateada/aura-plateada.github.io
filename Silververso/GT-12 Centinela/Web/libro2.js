// libro2.js - Sistema de navegación y estilos para las páginas del libro 2 (1, 2, 3, 4, 5)

// Configuración de las secciones del libro (páginas principales)
const seccionesLibro = {
    organizacion: { archivo: 'organización.html', letra: '1', titulo: 'ORGANIZACIÓN', fondo: '01_1.jpg' },
    archivos: { archivo: 'archivos.html', letra: '2', titulo: 'ARCHIVOS', fondo: '02_1.jpg' },
    escenario: { archivo: 'escenario.html', letra: '3', titulo: 'ESCENARIO', fondo: '03_1.jpg' },
    antagonistas: { archivo: 'antagonistas.html', letra: '4', titulo: 'ANTAGONISTAS', fondo: '04_1.jpg' },
    operaciones: { archivo: 'operaciones.html', letra: '5', titulo: 'OPERACIONES', fondo: '05_1.jpg' },
};

// Mapa inverso: archivo principal -> clave de sección
const archivoASeccion = Object.fromEntries(Object.entries(seccionesLibro).map(([k, v]) => [v.archivo, k]));

// Obtener parámetro 'seccion' desde el src del script o la URL
function obtenerSeccionParametro() {
    // 1) Revisar el script que carga este archivo
    const scripts = document.getElementsByTagName('script');
    for (const s of scripts) {
        if (s.src && s.src.includes('libro2.js')) {
            try {
                const url = new URL(s.src, window.location.origin);
                const sec = url.searchParams.get('seccion');
                if (sec) return sec.toLowerCase();
            } catch {}
        }
    }
    // 2) Revisar la query de la página
    const sec = new URLSearchParams(window.location.search).get('seccion');
    return sec ? sec.toLowerCase() : null;
}

// Obtener la página actual
function getPaginaActual() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    return filename;
}

// Resolver la sección activa: si la página es principal, usarla; si es subpágina, usar parámetro 'seccion'
function resolverSeccionActiva() {
    const pagina = getPaginaActual();
    // Si es una de las páginas principales
    if (archivoASeccion[pagina]) {
        return archivoASeccion[pagina];
    }
    // Si es subpágina, intentar obtener por parámetro
    const secParam = obtenerSeccionParametro();
    if (secParam && seccionesLibro[secParam]) {
        return secParam;
    }
    // Fallback: operaciones si no se especifica
    return 'operaciones';
}

// Determina si la página actual es una página principal del libro
function esPaginaPrincipal() {
    const pagina = getPaginaActual();
    return Boolean(archivoASeccion[pagina]);
}

// Generar los estilos CSS para la página del libro
function generarEstilosLibro() {
    const seccion = resolverSeccionActiva();
    const config = seccionesLibro[seccion];
    if (!config) return '';
    const paddingTop = esPaginaPrincipal() ? '4.5cm' : '2cm';
    
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
                background-repeat: yes-repeat;
                position: relative;
                min-height: fit-content;
                margin-bottom: 0;
            }
            
            .content-wrapper {
                padding: 2cm 5% 2cm 5%;
                padding-top: ${paddingTop};
                padding-bottom: auto;
                min-height: auto;
            }
            
            h1 {
                font-size: 80pt;
                line-height: 100%;
                color: #223158;
                font-weight: bold;
                text-align: center;
                margin: 0;
            }

            h2 {
                font-size: 40pt;
                line-height: 200%;
                color: #223158;
                font-weight: bold;
                text-align: center;
                margin: 0 5% 0 5%;
            }
            
            h2a {
                font-family: "Eurostile";
                font-size: 45pt;
                line-height: 100%;
                color: #223158;
                font-weight: bold;
                text-align: left;
                margin: 0;
            }
            h3 {
                font-size: 30pt;
                color: #223158;
                font-weight: bold;
                text-align: left;
                margin: 0;
            }
            subpag {
                font-family: "Eurostile";
                font-size: 40pt;
                line-height: 150%;
                color: #223158;
                font-weight: bold;
                text-align: center;
                margin: 0 0 0 0;
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
                background-color: #d2d6df;
                color: #b3b6bd;
                text-decoration: none;
                transition: all 0.3s ease;
                border: 3px solid #d4d4d4;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            }
            
            .btn-nav-libro-small.active {
                background-color: #5f708e;
                border-color: #262626;
                color: white;
            }
            
            .btn-nav-libro-small span {
                font-size: 1.7rem;
                font-weight: bold;
                font-family: "Eurostile", "Arial Narrow", Arial, sans-serif;
            }
            
            .btn-nav-libro-small:hover {
                background-color: #5f708e;
                border-color: #262626;
                color: white;
                transform: scale(1.05);
                box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
            }
        </style>
    `;
}

// Generar los botones de navegación vertical
function generarBotonesNavegacion() {
    const seccionActiva = resolverSeccionActiva();
    let html = '<div class="nav-buttons-vertical">';
    for (const [clave, conf] of Object.entries(seccionesLibro)) {
        const isActive = clave === seccionActiva ? 'active' : '';
        html += `
        <a href="${conf.archivo}" class="btn-nav-libro-small ${isActive}">
            <span>${conf.letra}</span>
        </a>`;
    }
    
    html += '</div>';
    return html;
}

// Generar el contenedor de la página
function generarContenedorPagina(contenidoHTML) {
    const seccion = resolverSeccionActiva();
    const config = seccionesLibro[seccion];
    if (!config) return contenidoHTML;
    // Para subpáginas no mostrar el título principal (solo en páginas raíz)
    const tituloHTML = esPaginaPrincipal() && config.titulo ? `<h1>${config.titulo}</h1>` : '';
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
