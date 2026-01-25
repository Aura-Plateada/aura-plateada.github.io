// operaciones-gallery.js - Sistema automatizado de galerías de operaciones

// Mapeo de recopilatorios con sus portadas y links
// Las operaciones se buscarán automáticamente en comicsData por los nombres de imagen
const recopilatoriosInfo = {
    'Sector Ágata Carmín': {
        portada: 'TW12.jpg',
        link: 'actual.html',
        // Cada operación puede ser:
        // - String: 'TW12.jpg' (enlace por defecto a la imagen)
        // - Objeto: { image: 'TW12.jpg', link: 'url' } (enlace personalizado)
        operaciones: [{ image: 'TW12.jpg', link: 'personajes.html' }, { image: 'TW18.jpg', link: '../Imágenes/partidas/JOYERIA-FUTURO.jpg' }, { image: 'TW34.jpg', link: 'sac.html' }, { image: 'SAC1.jpg', link: 'sac.html' }, { image: 'SAC2.jpg', link: 'sac.html' } ]
    },
    'Manual Basico': {
        portada: 'ManualBasico.jpg',
        link: '../ManualBásico.pdf',
        operaciones: [
        'S749.png',
        'IC790.png',
        'S748.png',
        'S747.png',
        'BC28.png',
        'UDM2.png',
        'S746.png',
        'IC784.png',
        'IC783.png',
        'SA29.png',
        'S717.png',
        'IC709.png',
        'IC683.png',
        'TW156.png',
        'S302.jpg',
        'S206.jpg',
        'IC27.png'
      ]
    },
    'Relatos del Centinela Volumen 2': {
        portada: 'TS2-T.jpg',
        link: '../RelatosCentinela.pdf',
        operaciones: ['TS2-1.png', 'TS2-2.png', 'TS2-3.png', 'TS2-4.png', 'TS2-5.png', 'TS2-6.png', 'TS2-7.png', 'TS2-8.png', 'TS2-9.png', 'TS2-10.png', 'TS2-11.png', 'TS2-12.png']
    },
    'Las Mejores Historias del Centinela Jamás Contadas': {
        portada: 'mejores.jpg',
        link: '../75Anivers1.pdf',
        operaciones: [
        "S321.jpg",
        "IC477.png",
        "IC628.png",
        "S637.png",
        "S654.png",
        "IC782.png",
      ]
    },
    'Dulce, Dulce Venganza': {
        portada: 'DDV.jpg',
        link: 'https://drive.google.com/open?id=16fi1yHVYrqtVVGyJdsTVA2OW9qcDBYOd&usp=drive_fs',
        operaciones: ['DDV1.jpg', 'DDV2.jpg', 'DDV3.jpg', 'DDV4.jpg', 'DDV5.jpg', 'DDV6.jpg', 'DDV7.jpg', 'DDV8.jpg', 'DDV9.jpg']
    },
    'Doble Justicia': {
        portada: 'DJ.jpg',
        link: 'https://drive.google.com/open?id=14eVoGmwctX4hdualnKJpbv8YQhewNBXn&usp=drive_fs',
        operaciones: ['DJ1.jpg', 'DJ2.jpg', 'DJ3.jpg', 'DJ4.jpg', 'DJ5.jpg', 'DJ6.jpg', 'DJ7.jpg']
    },
    'Betlam Central': {
        portada: 'BC.jpg',
        link: '../BetlamCentral-Colección1.pdf',
        operaciones: ['BC32.jpg', 'BC33.jpg', 'BC34.jpg', 'BC35.jpg', 'BC36.jpg', 'BCA12.jpg', 'SS16.jpg']
    },
    'Centinela Posterior a 2008': {
        portada: 'Post2008.jpg',
        link: '../CentinelaPosterior2008.pdf',
        operaciones: ['S755.png', 'S756.png', 'S757.jpg', 'S758.jpg', 'S759.jpg', 'S760.jpg', 'S761.jpg', 'S762.jpg', 'S763.jpg', 'S764.jpg', 'S765.jpg', 'S766.jpg', 'S767.jpg', 'S768.jpg', 'S769.jpg', 'S770.jpg', 'S771.jpg', 'S772.jpg', 'S773.jpg']
    },
    'Archivos Héctor Prieto de la Calle': {
        portada: 'HPC.jpg',
        link: '../ColecciónOperacionesVariasEtapas.pdf',
        operaciones: ['S226.jpg', 'TW95.jpg', 'TW96.jpg', 'TW97.jpg', 'TW98.jpg', 'S446.jpg', 'S447.jpg', 'S448.jpg', 'S449.jpg', 'S670.jpg']
    },
    'EL CICLO DE LA VIOLENCIA': {
        portada: 'IC628.jpg',
        operaciones: ["IC601.jpg",
    "IC628.png", 'TS2-1.png', 'TS2-2.png',
    "S637.png", 'IC683.png',]
    },
    
};

// Mapeo de partidas sueltas (sin galería de operaciones propia, todas comparten la sección "Operaciones Sueltas")
// Formato: nombre: { portada: 'archivo.jpg', link: 'url' }
const partidasSueltasInfo = {
    'Motín en Dunwich': {
        portada: 'S460.png',
        link: 'S460.html'
    },
    'Centinela New Order (Beta)': {
        portada: 'SNW.jpg',
        link: '../SentinelNewOrderBeta.pdf'
    },
    'La Novia Roja': {
        portada: 'NR.jpg',
        link: '../LaNoviaRoja.pdf'
    },
    'The Time of The Watchers #89 y #90': {
        portada: 'TW89.jpg',
        link: '../TW89-90.pdf'
    },
    'Wayne\'s Pub': {
        portada: 'WP.jpg',
        link: '../Wayne\'s Pub.pdf'
    },
    'VOODOO NIGHT': {
        portada: 'IC746.png',
        link: '../Investigation Comics #746.pdf'
    },
    'Centinela Año 100': {
        portada: 'CA100.jpg',
        link: '../Centinela Año 100.pdf'
    },
    'Sentinel Rider': {
        portada: 'SRider.jpg',
        link: '../Sentinel Rider.pdf'
    },
    'Sentinel Rebirth': {
        portada: 'SRebirth.jpg',
        link: '../Sentinel Rebirth.pdf'
    },
    
    'La Mirada del Diablo Blind City': {
        portada: 'LMDB.jpg',
        link: '../LaMiradaDelDiabloBlindCity.pdf'
    },
    'Betlam Hora Cero': {
        portada: 'BHC.jpg',
        link: '../Betlam-Hora-Cero.pdf'
    },
    'Tales of the Lost Sentinel - Centinela CERO': {
        portada: 'TS-LS.jpg',
        link: '../Tales of the Lost Centinel_ Centinela Cero (Ismael Díaz).pdf'
    },
};

// Orden cronológico de las operaciones
// Simplemente lista los nombres de archivo de las portadas en orden cronológico
// Las imágenes se buscarán automáticamente en las carpetas de comicsData
const ordenCronologico = [
    'IC27.png',
    'NR.jpg',
    'S206.jpg',
    'S226.jpg',
    'S302.jpg',
    "S321.jpg",
    "TW12.jpg", "TW18.jpg", "TW34.jpg", 'SAC1.jpg', 'SAC2.jpg',
    'TW89.jpg',
    'TW95.jpg', 'TW96.jpg', 'TW97.jpg', 'TW98.jpg',
    "IC477.png",
    'S446.jpg', 'S447.jpg', 'S448.jpg', 'S449.jpg',
    'S460.png',
    'TW156.png',
    "IC601.jpg",
    "IC628.png", 'TS2-1.png', 'TS2-2.png',
    "S637.png",
    'IC683.png',
    "S654.png", 
    'IC709.png',
    'S670.jpg',
    'IC746.png',
    'S717.png',
    'WP.jpg',
    'SA29.png',
    "IC782.png",
    'IC783.png',
    'IC784.png',
    'S746.png',
    'UDM2.png',
    'BC28.png',
    'S747.png',
    'S748.png',
    'IC790.png',
    'S749.png',
    'SS16.jpg',
    'BC32.jpg',
    'BC33.jpg',
    'BC34.jpg',
    'BC35.jpg',
    'BC36.jpg',
    'BCA12.jpg',
    'S755.png',
    'S756.png',
    'S757.jpg',
    'S758.jpg',
    'S759.jpg',
    'S760.jpg',
    'S761.jpg',
    'S762.jpg',
    'S763.jpg',
    'S764.jpg',
    'S765.jpg',
    'S766.jpg',
    'S767.jpg',
    'S768.jpg',
    'S769.jpg',
    'S770.jpg',
    'S771.jpg',
    'S772.jpg',
    'S773.jpg'


];

// Información adicional de las colecciones
const collectionsInfo = {
    'Investigation Comics': {
        description: ''
    },
    'Sentinel': {
        description: ''
    },
    'Betlam Central': {
        description: ''
    },
    'Doble Justicia': {
        description: ''
    },
    'Tales of the Sentinel': {
        description: ''
    },
    'Dulce, Dulce Venganza': {
        description: ''
    },
    'Numeros Unicos': {
        description: ''
    }
};

// Función para buscar una imagen en todas las colecciones y retornar su ruta
function findImagePath(imageName, allCollections) {
    for (const collection of allCollections) {
        if (collection.images && collection.images.includes(imageName)) {
            const path = `../Imágenes/Comics/${collection.name}/${imageName}`;
            return path;
        }
    }
    // Si no se encuentra, intentar en la carpeta raíz de Comics
    return `../Imágenes/Comics/${imageName}`;
}

// Función para generar la sección de un recopilatorio
function generateRecopilatorioSection(nombreRecopilatorio, info, allCollections) {
    // Buscar la ruta de la portada del recopilatorio
    const portadaPath = findImagePath(info.portada, allCollections);
    
    let html = `
    <div class="recopilatorio-section mb-5">
        <h3 class="mb-4">
            <a href="${info.link}" target="_blank">
                <img src="${portadaPath}" 
                     class="img-fluid rounded shadow-sm" 
                     alt="${nombreRecopilatorio}" 
                     style="max-width: 200px; cursor: pointer;">
            </a>
            ${nombreRecopilatorio}
        </h3>
        <div class="gallery-container">
            <div class="row g-2">`;
    
    // Generar las portadas de las operaciones
    // Soporta elementos como string (nombre de imagen) o objeto { image: 'archivo.jpg', link: 'url' }
    info.operaciones.forEach(op => {
        const imageName = typeof op === 'string' ? op : op.image;
        const imagePath = findImagePath(imageName, allCollections);
        const displayName = imageName.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '');
        const href = typeof op === 'object' && op.link ? op.link : imagePath;
        html += `
                <div class="col-2">
                    <a href="${href}" target="_blank">
                        <img src="${imagePath}" class="img-fluid rounded shadow-sm gallery-image" alt="${displayName}" style="cursor: pointer; height: 100%; width: 100%;">
                    </a>
                </div>`;
    });
    
    html += `
            </div>
        </div>
    </div><hr class="my-5">`;
    
    return html;
}

// Función para generar solo la galería de operaciones (sin título ni portada del recopilatorio)
function generateRecopilatorioSectionSimple(nombreRecopilatorio, info, allCollections) {
    let html = `
    <div class="gallery-container">
        <div class="row g-2">`;
    
    // Generar las portadas de las operaciones
    info.operaciones.forEach(op => {
        const imageName = typeof op === 'string' ? op : op.image;
        const imagePath = findImagePath(imageName, allCollections);
        const displayName = imageName.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '');
        const href = typeof op === 'object' && op.link ? op.link : imagePath;
        html += `
            <div class="col-2">
                <a href="${href}" target="_blank">
                    <img src="${imagePath}" class="img-fluid rounded shadow-sm gallery-image" alt="${displayName}" style="cursor: pointer; height: 100%; width: 100%;">
                </a>
            </div>`;
    });
    
    html += `
        </div>
    </div>`;
    
    return html;
}

// Función para generar la galería cronológica
function generateCronologiaSection(allCollections) {
    if (ordenCronologico.length === 0) {
        return ''; // No generar nada si no hay orden cronológico definido
    }
    
    let html = `
    <div id="cronologia">
        <div class="recopilatorio-section mb-5">
            <h3 class="mb-4">Orden Cronológico</h3>
            <p class="mb-4">Operaciones ordenadas según su cronología en el universo del Centinela.</p>
            <div class="gallery-container">
                <div class="row g-2">`;
    
    // Generar las portadas en orden cronológico
    ordenCronologico.forEach(imageName => {
        const imagePath = findImagePath(imageName, allCollections);
        const displayName = imageName.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '');
        html += `
                <div class="col-2">
                    <a href="${imagePath}" target="_blank">
                        <img src="${imagePath}" class="img-fluid rounded shadow-sm gallery-image" alt="${displayName}" style="cursor: pointer; height: 100%; width: 100%;">
                    </a>
                </div>`;
    });
    
    html += `
            </div>
        </div>
    </div><hr class="my-5">`;
    
    return html;
}

// Función para generar la galería de portadas de recopilatorios
function generateRecopilatoriosGallery(allCollections) {
    let html = `
    <div class="recopilatorios-overview mb-5">
        <p class="mb-4">Selecciona un suplemento para ver sus operaciones:</p>
        <div class="gallery-container">
            <div class="row g-4">`;
    
    // Generar una tarjeta por cada recopilatorio
    for (const [nombreRecopilatorio, info] of Object.entries(recopilatoriosInfo)) {
        const portadaPath = findImagePath(info.portada, allCollections);
        const recopId = nombreRecopilatorio.replace(/\s+/g, '-').toLowerCase();
        
        html += `
                <div class="col-md-4 col-sm-6">
                    <div class="card h-100 shadow-sm">
                        <a href="#${recopId}">
                            <img src="${portadaPath}" class="card-img-top" alt="${nombreRecopilatorio}" style="cursor: pointer; object-fit: cover; height: 400px;">
                        </a>
                        <div class="card-body text-center">
                            <h5 class="card-title">${nombreRecopilatorio}</h5>
                            <p class="text-muted">${info.operaciones.length} operaciones</p>
                            <a href="${info.link}" class="btn btn-sm btn-outline-primary" target="_blank">Ver pdf</a>
                        </div>
                    </div>
                </div>`;
    }
    
    // Generar una tarjeta por cada partida suelta (todas llevan a #operaciones-sueltas)
    for (const [nombrePartida, info] of Object.entries(partidasSueltasInfo)) {
        const portadaPath = findImagePath(info.portada, allCollections);
        
        html += `
                <div class="col-md-4 col-sm-6">
                    <div class="card h-100 shadow-sm">
                        <a href="#operaciones-sueltas">
                            <img src="${portadaPath}" class="card-img-top" alt="${nombrePartida}" style="cursor: pointer; object-fit: cover; height: 400px;">
                        </a>
                        <div class="card-body text-center">
                            <h5 class="card-title">${nombrePartida}</h5>
                            <a href="${info.link}" class="btn btn-sm btn-outline-primary" target="_blank">Ver PDF</a>
                        </div>
                    </div>
                </div>`;
    }
    
    html += `
            </div>
        </div>
    </div>
    <hr class="my-5">`;
    
    return html;
}

// Función para inicializar las galerías de operaciones
function initOperacionesGalleries() {
    const container = document.getElementById('operaciones-galleries-container');
    if (!container) {
        console.error('No se encontró el contenedor operaciones-galleries-container');
        return;
    }
    
    // Verificar que comicsData está disponible
    if (typeof comicsData === 'undefined') {
        console.error('comicsData no está definido. Asegúrate de cargar comics-data.js antes de operaciones-gallery.js');
        container.innerHTML = '<p class="text-center text-danger">Error: Datos de operaciones no disponibles.</p>';
        return;
    }
    
    try {
        if (!comicsData.collections || !Array.isArray(comicsData.collections)) {
            throw new Error('Formato de datos inválido');
        }
        
        const allCollections = comicsData.collections;
        
        // Generar galería de portadas de recopilatorios
        let htmlContent = generateRecopilatoriosGallery(allCollections);
        
        // Generar galería cronológica (si existe)
        htmlContent += generateCronologiaSection(allCollections);
        
        // Generar sección detallada para cada recopilatorio
        for (const [nombreRecopilatorio, info] of Object.entries(recopilatoriosInfo)) {
            const recopId = nombreRecopilatorio.replace(/\s+/g, '-').toLowerCase();
            htmlContent += `<div id="${recopId}">`;
            htmlContent += generateRecopilatorioSection(nombreRecopilatorio, info, allCollections);
            htmlContent += `</div>`;
        }
        
        // Generar sección "Operaciones Sueltas" si hay partidas sueltas
        if (Object.keys(partidasSueltasInfo).length > 0) {
            htmlContent += `
            <div id="operaciones-sueltas">
                <div class="recopilatorio-section mb-5">
                    <h3 class="mb-4">Operaciones Sueltas</h3>
                    <p class="mb-4">Partidas individuales sin recopilatorio asociado.</p>
                    <div class="gallery-container">
                        <div class="row g-2">`;
            
            // Generar las portadas de las partidas sueltas
            for (const [nombrePartida, info] of Object.entries(partidasSueltasInfo)) {
                const portadaPath = findImagePath(info.portada, allCollections);
                const displayName = nombrePartida;
                
                htmlContent += `
                            <div class="col-2">
                                <a href="${info.link}" target="_blank">
                                    <img src="${portadaPath}" class="img-fluid rounded shadow-sm gallery-image" alt="${displayName}" style="cursor: pointer; height: 100%; width: 100%;">
                                </a>
                            </div>`;
            }
            
            htmlContent += `
                        </div>
                    </div>
                </div>
            </div>
            <hr class="my-5">`;
        }
        
        if (htmlContent) {
            container.innerHTML = htmlContent;
        } else {
            container.innerHTML = '<p class="text-center">No se encontraron operaciones para mostrar.</p>';
        }
        
    } catch (error) {
        console.error('Error al cargar la lista de operaciones:', error);
        container.innerHTML = `<p class="text-center text-danger">Error al cargar las galerías de operaciones: ${error.message}</p>`;
    }
}

// Función para renderizar un solo recopilatorio en un contenedor específico
function renderSingleRecopilatorio(containerId, nombreRecopilatorio, simple = false) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`No se encontró el contenedor ${containerId}`);
        return;
    }
    
    // Verificar que comicsData está disponible
    if (typeof comicsData === 'undefined') {
        console.error('comicsData no está definido. Asegúrate de cargar comics-data.js antes de operaciones-gallery.js');
        container.innerHTML = '<p class="text-center text-danger">Error: Datos de operaciones no disponibles.</p>';
        return;
    }
    
    try {
        if (!comicsData.collections || !Array.isArray(comicsData.collections)) {
            throw new Error('Formato de datos inválido');
        }
        
        const allCollections = comicsData.collections;
        
        // Verificar si el recopilatorio existe
        const info = recopilatoriosInfo[nombreRecopilatorio];
        if (!info) {
            container.innerHTML = `<p class="text-center text-warning">No se encontró el recopilatorio "${nombreRecopilatorio}".</p>`;
            return;
        }
        
        // Generar la sección del recopilatorio (con o sin título)
        const htmlContent = simple 
            ? generateRecopilatorioSectionSimple(nombreRecopilatorio, info, allCollections)
            : generateRecopilatorioSection(nombreRecopilatorio, info, allCollections);
        container.innerHTML = htmlContent;
        
    } catch (error) {
        console.error('Error al cargar el recopilatorio:', error);
        container.innerHTML = `<p class="text-center text-danger">Error al cargar el recopilatorio: ${error.message}</p>`;
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initOperacionesGalleries);

