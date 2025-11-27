/**
 * Script para cargar la barra de navegación de forma dinámica
 * Aura Plateada - Navegación Universal
 */

// Función para determinar la profundidad de la página actual
function getDepth() {
    const path = window.location.pathname;
    const segments = path.split('/').filter(segment => segment !== '');
    
    // Si estamos en el directorio raíz o index.html
    if (segments.length <= 1 || path.endsWith('index.html')) {
        return 0;
    }
    
    // Si estamos en Silververso/GT-12 Centinela/Web/
    if (path.includes('Silververso') && path.includes('Web')) {
        return 3;
    }
    
    // Para contacto.html, proyectos.html, sobremi.html en raíz
    return 0;
}

// Función para obtener la ruta relativa correcta
function getRelativePath(depth) {
    if (depth === 0) {
        return '';
    } else if (depth === 3) {
        return '../../../';
    }
    return '';
}

// Función para determinar qué página está activa
function getActivePage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    
    if (filename === 'index.html' || filename === '') {
        return 'inicio';
    } else if (filename === 'proyectos.html') {
        return 'proyectos';
    } else if (filename === 'sobremi.html') {
        return 'sobremi';
    } else if (filename === 'contacto.html') {
        return 'contacto';
    } else if (filename === 'centinela.html') {
        return 'centinela-main';
    } else if (filename === 'actual.html') {
        return 'centinela-actual';
    } else if (filename === 'comicssentinel.html') {
        return 'centinela-comics';
    } else if (filename === 'arbolbetlam.html') {
        return 'centinela-arbol';
    } else if (filename === 'contenidos.html') {
        return 'centinela-contenidos';
    } else if (filename === 'operaciones.html') {
        return 'centinela-operaciones';
    }
    
    return '';
}

// Función para generar el HTML de la navegación
function generateNavHTML() {
    const depth = getDepth();
    const relativePath = getRelativePath(depth);
    const activePage = getActivePage();
    
    // Función auxiliar para marcar enlaces activos
    function activeClass(page) {
        return activePage === page ? 'active' : '';
    }
    
    // Determinar rutas para subpáginas de Centinela
    // Si estamos en depth 3, ya estamos EN la carpeta de Centinela, por lo que las rutas son relativas
    // Si estamos en depth 0 (raíz), necesitamos la ruta completa desde la raíz
    let centinelaPath;
    if (depth === 3) {
        // Estamos dentro de Silververso/GT-12 Centinela/Web/, las páginas están aquí mismo
        centinelaPath = 'Silververso/GT-12 Centinela/Web/';
    } else {
        // Estamos en la raíz, necesitamos la ruta completa
        centinelaPath = 'Silververso/GT-12 Centinela/Web/';
    }
    
    const navHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <img src="${relativePath}image/logo.png" alt="Logo de Aura Plateada" width="35" height="35" class="d-inline-block align-text-top">
            <a class="navbar-brand ms-2" href="${relativePath}index.html">Aura Plateada</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link ${activeClass('inicio')}" href="${relativePath}index.html">Inicio</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="subpaginasDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Centinela
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="Centinela">
                            <li><a class="dropdown-item ${activeClass('centinela-main')}" href="${relativePath}${centinelaPath}centinela.html">La Mirada del Centinela</a></li>
                            <li><a class="dropdown-item ${activeClass('centinela-actual')}" href="${relativePath}${centinelaPath}actual.html">Actual</a></li>
                            <li><a class="dropdown-item ${activeClass('centinela-comics')}" href="${relativePath}${centinelaPath}comicssentinel.html">Cómics</a></li>
                            <li><a class="dropdown-item ${activeClass('centinela-arbol')}" href="${relativePath}${centinelaPath}arbolbetlam.html">Arbol Genealógico</a></li>
                            <li><a class="dropdown-item ${activeClass('centinela-contenidos')}" href="${relativePath}${centinelaPath}contenidos.html">Contenidos</a></li>
                            <li><a class="dropdown-item ${activeClass('centinela-operaciones')}" href="${relativePath}${centinelaPath}operaciones.html">Operaciones</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link ${activeClass('proyectos')}" href="${relativePath}proyectos.html">Proyectos</a></li>
                    <li class="nav-item"><a class="nav-link ${activeClass('sobremi')}" href="${relativePath}sobremi.html">Sobre mí</a></li>
                    <li class="nav-item"><a class="nav-link ${activeClass('contacto')}" href="${relativePath}contacto.html">Contacto</a></li>
                </ul>
            </div>
        </div>
    </nav>
    `;
    
    return navHTML;
}

// Función para generar el HTML del footer
function generateFooterHTML() {
    const footerHTML = `
    <footer class="bg-dark text-white text-center py-3 mt-5">
        <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><span property="dct:title">Aura Plateada Web</span> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://linktr.ee/AuraPlateada">Aura Plateada</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""></a></p>
    </footer>
    `;
    
    return footerHTML;
}

// Cargar la navegación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Buscar el elemento donde insertar la navegación
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = generateNavHTML();
    }
    
    // Buscar el elemento donde insertar el footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = generateFooterHTML();
    }
});
