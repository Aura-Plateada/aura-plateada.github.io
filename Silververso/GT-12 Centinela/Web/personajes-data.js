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
    const C = epocas+"CV/";
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
      evilcorp: [
        { name: 'Capitana Noxa', image: V+A+"CapitanaNoxa.png", link: '' },
        { name: 'Géminis', image: PF+A+"Géminis.png", link: '' },
        { name: 'Equidna', image: V+S+"equidna.png", link: '' },
        { name: 'Litigio', image: V+A+".png", link: '' },
        { name: 'Alacrán', image: V+A+".png", link: '' },
      ],
      argonautasnegros: [
        { name: 'Blastmaster', image: PF+A+"Blastmaster.png", link: '' },
        { name: 'KillerCrazy', image: PF+A+"KillerCrazy.jpg", link: '' },
        { name: 'Diamond Sharp', image: V+A+"DiamondSharp.png", link: '' },
        { name: 'Nudillos', image: V+A+"Nudillos.png", link: '' },
        { name: 'Crusher', image: V+A+"Crusher-SF.png", link: '' },
      ],
      sac: [
        { name: 'Puño Ágata', image: V+D+"PuñoÁgata.png", link: 'https://e.pcloud.link/publink/show?code=kZSHFNZYka2nGwiNjyOBn99tnHNj7bKUN6V' },
        { name: 'Spade', image: V+D+"Spade.png", link: 'https://e.pcloud.link/publink/show?code=kZSHFNZYka2nGwiNjyOBn99tnHNj7bKUN6V' },
        { name: 'Jettatore', image: V+D+"Jettatore.png", link: 'https://e.pcloud.link/publink/show?code=kZSHFNZYka2nGwiNjyOBn99tnHNj7bKUN6V' },
        { name: 'S.E.U.S.', image: V+D+"SEUS.png", link: 'https://e.pcloud.link/publink/show?code=kZSHFNZYka2nGwiNjyOBn99tnHNj7bKUN6V' },
        { name: 'Wolverinox', image: V+D+"NatoroW.png", link: 'https://e.pcloud.link/publink/show?code=kZfHFNZ1p1BMm2d9Wm5sYA4GMYeqHyxgrfy' },
        { name: 'Loberinox', image: V+D+"AmandaW"+".png", link: 'https://e.pcloud.link/publink/show?code=XZBzFNZN1C5HcN5IqVuVTqVKlgPr4t94l97' },
        { name: 'Eco de la Ley', image: V+D+"ecodelaley.png", link: 'https://e.pcloud.link/publink/show?code=kZfHFNZ1p1BMm2d9Wm5sYA4GMYeqHyxgrfy' },
        { name: 'Handyman', image: V+D+"HandyMan-Oscuro.png", link: 'https://e.pcloud.link/publink/show?code=kZSzFNZjt1IqWKOCeHxvSjw7OSoQLH3AFRy' },
        { name: 'El Ladrillo', image: V+D+"ElLadrillo-RESIZE"+".png", link: 'https://e.pcloud.link/publink/show?code=XZ1zFNZM2VF1mNhDC752jgqFDyY8JW02MLX' },
      ],
      cv: [
        { name: 'Clive Burrows', image: C+P+"CliveBurrows.png", link: '' },
        { name: 'Stephen Lincoln', image: C+P+"StephenLincoln.png", link: '' },
        { name: 'Mathew Williams', image: C+P+"MathewWilliams.png", link: '' },
        { name: 'Cable', image: C+P+"Cable.png", link: '' },
        { name: 'James Goldfield', image: C+P+"JamesGoldfield.png", link: '' },
        { name: 'Ratsu', image: C+P+"Ratsu.png", link: '' },
        { name: 'Leo Szilard', image: C+P+"LeoSzilard.png", link: '' },
        { name: 'Myra Drill', image: C+P+"MyraDrill.png", link: '' },
        { name: 'Amelia Roy ', image: C+P+"AmeliaRoy.png", link: '' },
        { name: 'Emma Roy', image: C+P+"EmmaRoy.png", link: '' },
        { name: 'Allan Paul', image: C+P+"AllanPaul.png", link: '' },
      ],
    }
  };
})();
