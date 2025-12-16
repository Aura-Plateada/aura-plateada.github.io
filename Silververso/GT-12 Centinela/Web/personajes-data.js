(function () {
  // personajes-data.js - Datos para la galería de personajes
  // Estructura esperada:
  // window.personajesData = {
  //   categorias: {
  //     vigilantes: [ { name: 'Nombre', image: 'ruta/imagen.jpg', link: 'url' }, ... ],
  //     villanos:   [ ... ],
  //     centinela:  [ ... ],
  //   }
  // }

  if (typeof window === 'undefined') return;

  // Marcador visual (imagen existente en el repo) hasta que completes con retratos reales
  const marcador = '../Imágenes/TallerdePersonajesFINAL.png';
    const epocas = "../Imágenes/Personajes/EPOCAS/";
    const V = epocas+"5-LA ERA DE LOS VIGILANTES/";
    const PF = epocas+"4-LA PRIMERA FORMACIÓN/";
    const D = "Deuteragonistas/";
    const S = "Secundarios/";
    const A = "Antagonistas/";
    const P = "Protagonistas/";
    


  window.personajesData = {
    categorias: {
      vigilantes: [
        { name: 'Polecat', image: V+D+"Polecat.png", link: 'https://e.pcloud.link/publink/show?code=kZfHFNZ1p1BMm2d9Wm5sYA4GMYeqHyxgrfy' },
        { name: 'Sentencia', image: V+D+"Sentencia.png", link: 'https://e.pcloud.link/publink/show?code=kZfHFNZ1p1BMm2d9Wm5sYA4GMYeqHyxgrfy' },
        { name: 'Horus', image: V+D+"Horus.png", link: 'https://e.pcloud.link/publink/show?code=kZfHFNZ1p1BMm2d9Wm5sYA4GMYeqHyxgrfy' },
        { name: 'Iris', image: V+D+"Iris.png", link: 'https://e.pcloud.link/publink/show?code=kZfHFNZ1p1BMm2d9Wm5sYA4GMYeqHyxgrfy' },
        { name: 'Adalid', image: V+D+"Adalid.png", link: 'https://e.pcloud.link/publink/show?code=kZfHFNZ1p1BMm2d9Wm5sYA4GMYeqHyxgrfy' },
        { name: 'Deux Irae', image: V+D+"DeuxIrae.png", link: 'https://e.pcloud.link/publink/show?code=kZfHFNZ1p1BMm2d9Wm5sYA4GMYeqHyxgrfy' },
        { name: 'The Lurker', image: V+D+"AlvaWingfield"+".jpg", link: 'https://e.pcloud.link/publink/show?code=XZzQFNZUBX8UD8qSJYI4r4hysYQqVNevxbX' },
        { name: 'El Centinela', image: "../Imágenes/Personajes/EPOCAS/5-LA ERA DE LOS VIGILANTES/Protagonistas/MKIII.png", link: 'https://e.pcloud.link/publink/show?code=kZfHFNZ1p1BMm2d9Wm5sYA4GMYeqHyxgrfy' },
        { name: 'Poison Dart', image: V+A+"PoisonDart.png", link: 'https://e.pcloud.link/publink/show?code=XZIQFNZxGX5IyPreTzulRjR9t7EA0w3gjkV' },
        { name: 'Puño Ágata', image: V+D+"PuñoÁgata.png", link: 'https://e.pcloud.link/publink/show?code=kZSHFNZYka2nGwiNjyOBn99tnHNj7bKUN6V' }, // ORGANIZACIÓN/SECTOR ÁGATA CARMÍN
        { name: 'Spade', image: V+D+"Spade.png", link: 'https://e.pcloud.link/publink/show?code=kZSHFNZYka2nGwiNjyOBn99tnHNj7bKUN6V' },
        { name: 'Jettatore', image: V+D+"Jettatore.png", link: 'https://e.pcloud.link/publink/show?code=kZSHFNZYka2nGwiNjyOBn99tnHNj7bKUN6V' },
        { name: 'S.E.U.S.', image: V+D+"SEUS.png", link: 'https://e.pcloud.link/publink/show?code=kZSHFNZYka2nGwiNjyOBn99tnHNj7bKUN6V' },
        // ARCHIVOS/04. LA ERA DE LOS VIGILANTES
        { name: 'Escudera', image: PF+S+"Auxiliar.png", link: 'https://e.pcloud.link/publink/show?code=kZfHFNZ1p1BMm2d9Wm5sYA4GMYeqHyxgrfy' },
        { name: 'Wolverinox', image: V+D+"NatoroW.png", link: 'https://e.pcloud.link/publink/show?code=kZfHFNZ1p1BMm2d9Wm5sYA4GMYeqHyxgrfy' },
        { name: 'Loberinox', image: V+D+"AmandaW"+".png", link: 'https://e.pcloud.link/publink/show?code=XZBzFNZN1C5HcN5IqVuVTqVKlgPr4t94l97' },

        
       // { name: 'Bothero', image: V+D+"bothero.png", link: 'https://e.pcloud.link/publink/show?code=kZfHFNZ1p1BMm2d9Wm5sYA4GMYeqHyxgrfy' },
        { name: 'Eco de la Ley', image: V+D+"ecodelaley.png", link: 'https://e.pcloud.link/publink/show?code=kZfHFNZ1p1BMm2d9Wm5sYA4GMYeqHyxgrfy' },
        { name: 'El Péndulo', image: V+S+"ElPéndulo.png", link: 'https://e.pcloud.link/publink/show?code=XZMzFNZprQvbEEKGbkUDCWgl2o1PfM4TCnk' }, // ESPECIFICOS AL PDF (RELATIVOS A ESCENARIO/..)
        { name: 'Sir Capa', image: V+S+"sircapa-resize"+".png", link: 'https://e.pcloud.link/publink/show?code=XZszFNZu02xUGTfD7RUY1DiCQ6RWmF0SkpX' },
        { name: 'Handyman', image: V+D+"HandyMan-Oscuro.png", link: 'https://e.pcloud.link/publink/show?code=kZSzFNZjt1IqWKOCeHxvSjw7OSoQLH3AFRy' },
        { name: 'El Ladrillo', image: V+D+"ElLadrillo-RESIZE"+".png", link: 'https://e.pcloud.link/publink/show?code=XZ1zFNZM2VF1mNhDC752jgqFDyY8JW02MLX' },
        // ESCENARIO/Ley y Orden
        { name: 'La Detective', image: PF+D+"LaDetective.png", link: 'https://e.pcloud.link/publink/show?code=kZSzFNZjt1IqWKOCeHxvSjw7OSoQLH3AFRy' },
        { name: 'RedRoy', image: V+S+"RedRoy.png", link: 'https://e.pcloud.link/publink/show?code=kZSzFNZjt1IqWKOCeHxvSjw7OSoQLH3AFRy' },
        
      ],
      villanos: [
        { name: 'Capitana Noxa', image: V+D+"PuñoÁgata.png", link: 'antagonistas.html#capitana-noxa' }
      ],
      centinela: [
        { name: 'El Centinela', image: V+D+"PuñoÁgata.png", link: 'centinela.html' }
      ]
    }
  };
})();
