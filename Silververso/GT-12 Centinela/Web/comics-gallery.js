// comics-gallery.js - Sistema automatizado de galerías de comics

// Orden deseado para las colecciones principales
const mainCollectionsOrder = [
    'Investigation Comics',
    'Sentinel',
    'The Time of Watchers',
    'Sector Ágata Carmín',
    'Tales of the Sentinel',
    'Betlam Central',
    'Nova Stories Reports',
    'Doble Justicia',
    'Dulce, Dulce Venganza',
];

// Configuración de información adicional de las colecciones
const collectionsInfo = {
    'Nova Stories Reports': {
        description: 'Listado de portadas de Nova Stories Reports (en colección).'
    },
    'Investigation Comics': {
        description: 'Listado de portadas de Investigation Comics (en colección).',
        info: `Planteada originalmente como una serie en la que contar historias
de detectives, de corte policíaco y género <em>pulp</em> (Hardboiled), pasa a ser la primera
cabecera del Centinela desde la primera aparición del personaje en
el número 27 de la colección (marzo de 1945). Ha sido una serie mensual de manera ininterrumpida desde entonces y cuenta con más de
veinte anuales y otros doce números especiales fuera de la numeración original.`
    },
    'Sentinel': {
        description: 'Listado de portadas de Sentinel (en colección).',
        info: `El increíble éxito del personaje del Centinela impulsa una segunda colección regular que arranca en julio de 1946. Como la anterior, se trata
de una serie mensual, que en este caso tiene más de treinta anuales
y dieciséis números especiales no incluidos en la numeración normal
de la serie.`
    },
    'The Time of Watchers': {
        description: 'Listado de portadas de The Time of Watchers (en colección).',
        info: `En marzo de 1974 aparece el número 1 de <em>The Time of Watchers</em> (La
hora de los vigilantes), una colección dedicada a presentar nuevos
héroes que actúan en la ciudad de Betlam. Durante 183 números
(más ocho anuales y cinco números especiales) la serie presenta las
aventuras de un variado grupo de justicieros.`
    },
    'Sector Ágata Carmín': {
        description: 'Listado de portadas de Sector Ágata Carmín (en colección).',
        info: `En enero de 1977 aparece el número 1 de <em>Sector Ágata Carmín</em>
        , una serie mensual dedicada a presentar al equipo de
héroes que actúan en la ciudad de Betlam. Durante x números
(más x anuales y x números especiales) la serie presenta las
misiones de un conformado grupo de justicieros para acabar con la criminalidad de Betlam.`
    },
    'El Centinela vs el Profesor Hypnos': {
        description: 'Listado de portadas de El Centinela vs el Profesor Hypnos (en colección).',
        info: `...`
    },
    'Betlam Central': {
        description: 'Listado de portadas de Betlam Central (en colección).',
        info: `En mayo de 2006 comienza una nueva colección mensual ambientada
en el Universo del Centinela: <em>Betlam Central</em>. La serie se centra en el
día a día de los policías de la ciudad y, especialmente, de los miembros
de la Unidad de Crímenes Especiales.`,
        link: `https://e.pcloud.link/publink/show?code=kZpytOZTgFx7PY7mPHciTS3kgV1Yhv3IRXy#/login?folder=18973051516`
    },
    'Doble Justicia': {
        description: 'Listado de portadas de Doble Justicia (colección completa).',
        link: 'https://drive.google.com/open?id=14eVoGmwctX4hdualnKJpbv8YQhewNBXn&usp=drive_fs'
    },
    'Tales of the Sentinel': {
        description: 'Listado de portadas de Tales of the Sentinel (en colección).',
        link: 'https://e.pcloud.link/publink/show?code=kZpytOZTgFx7PY7mPHciTS3kgV1Yhv3IRXy#/login?folder=18973051516'
    },
    'Dulce, Dulce Venganza': {
        description: 'Listado de portadas de Dulce, Dulce Venganza (colección completa).',
        link: 'https://drive.google.com/open?id=16fi1yHVYrqtVVGyJdsTVA2OW9qcDBYOd&usp=drive_fs'
    }
};

// Colecciones que son "sueltos" (aparecerán en la sección de Comics sueltos)
const sueltosCollections = [
    'Villains Comics',
    'Hypnos Legacy',
    'Under a Dark Moon',
    'Batman-Sentinel Improbable foes',
    'Brian Wayland Vampireslayer',
    'Fight Together, Die Alone',
    'NO NSR EDICIONES',
    'Sentinel 2070',
    'Sentinel by Gaslight',
    'The Eyes of the Sentinel',
    'The throne of the Sentinel'
];

// Función para generar una galería de comics
function generateComicGallery(collection) {
    const info = collectionsInfo[collection.name] || {};
    
    let html = `<h2 class="mb-4">`;
    
    if (info.link) {
        html += `<a href="${info.link}" target="_blank">${collection.name}</a>`;
    } else {
        html += collection.name;
    }
    
    html += `</h2>`;

    if (info.info) {
        html += `<p>${info.info}</p>`;
    }
    
    html += `
    <div class="col-md-12">
        <div class="col-12">
            <div class="gallery-container">
                <h5 class="gallery-title">Galería de portadas</h5>
                <div class="row g-2">`;
    
    // Generar una columna por cada imagen
    collection.images.forEach(image => {
        const imageName = image.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '');
        const imagePath = `../Imágenes/Comics/${collection.name}/${image}`;
        
        html += `
                    <div class="col-3">
                        <img src="${imagePath}" class="img-fluid rounded shadow-sm gallery-image" alt="${imageName}" style="height: 100%; width: 100%;">
                    </div>`;
    });
    
    html += `
                </div>
                <p class="gallery-description mt-2">${info.description || `Portadas de ${collection.name}.`}</p>
            </div>
        </div>
    </div>`;
    
    return html;
}

// Función para inicializar las galerías automáticamente
function initComicsGalleries() {
    const container = document.getElementById('comics-galleries-container');
    if (!container) {
        console.error('No se encontró el contenedor comics-galleries-container');
        return;
    }
    
    // Verificar que comicsData está disponible
    if (typeof comicsData === 'undefined') {
        console.error('comicsData no está definido. Asegúrate de cargar comics-data.js antes de comics-gallery.js');
        container.innerHTML = '<p class="text-center text-danger">Error: Datos de comics no disponibles.</p>';
        return;
    }
    
    try {
        console.log('Comics cargados:', comicsData);
        
        if (!comicsData.collections || !Array.isArray(comicsData.collections)) {
            throw new Error('Formato de datos inválido');
        }
        
        let htmlContent = '';
        
        // Separar colecciones principales y sueltos
        const allCollections = comicsData.collections.filter(c => c.images.length > 0);
        const mainCollections = [];
        const sueltosOnly = [];
        
        // Organizar colecciones según el orden definido
        for (const name of mainCollectionsOrder) {
            const collection = allCollections.find(c => c.name === name);
            if (collection) {
                mainCollections.push(collection);
            }
        }
        
        // Las colecciones que están en sueltosCollections van a sueltos
        for (const collection of allCollections) {
            if (sueltosCollections.includes(collection.name)) {
                sueltosOnly.push(collection);
            }
        }
        
        console.log('Colecciones principales:', mainCollections.length);
        console.log('Colecciones sueltos:', sueltosOnly.length);
        
        // Procesar colecciones principales en el orden especificado
        for (const collection of mainCollections) {
            htmlContent += generateComicGallery(collection);
        }
        
        // Procesar comics sueltos
        if (sueltosOnly.length > 0) {
            htmlContent += `<h1 class="mb-4">Comics sueltos</h1>
            <p>Aquí están algunos comics de los solo tenemos pocos números</p>`;
            
            for (const collection of sueltosOnly) {
                htmlContent += `<h3 class="mt-4">${collection.name}</h3>
                <div class="col-md-12">
                    <div class="col-12">
                        <div class="gallery-container">
                            <div class="row g-2">`;
                
                collection.images.forEach(image => {
                    const imageName = image.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '');
                    const imagePath = `../Imágenes/Comics/${collection.name}/${image}`;
                    
                    htmlContent += `
                        <div class="col-3">
                            <img src="${imagePath}" class="img-fluid rounded shadow-sm gallery-image" alt="${imageName}" style="height: 100%; width: 100%;">
                        </div>`;
                });
                
                htmlContent += `
                            </div>
                        </div>
                    </div>
                </div>`;
            }
        }
        
        if (htmlContent) {
            container.innerHTML = htmlContent;
        } else {
            container.innerHTML = '<p class="text-center">No se encontraron comics para mostrar.</p>';
        }
        
    } catch (error) {
        console.error('Error al cargar la lista de comics:', error);
        container.innerHTML = `<p class="text-center text-danger">Error al cargar las galerías de comics: ${error.message}</p>`;
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initComicsGalleries);

