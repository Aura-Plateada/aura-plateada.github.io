# Sistema de Navegación Generalizada

Este proyecto ahora utiliza un sistema de navegación centralizado mediante JavaScript para mantener consistencia en todas las páginas HTML.

## Cómo funciona

### Archivos principales

- **`nav.js`**: Contiene el código JavaScript que genera dinámicamente la barra de navegación y el footer.
- Cada página HTML incluye placeholders (`<div id="nav-placeholder"></div>` y `<div id="footer-placeholder"></div>`) donde se inyecta el contenido.

### Estructura de las páginas

Todas las páginas HTML deben incluir:

1. **En el `<body>`**, donde normalmente iría la navegación:
```html
<div id="nav-placeholder"></div>
```

2. **Antes del cierre de `</body>`**, donde normalmente iría el footer:
```html
<div id="footer-placeholder"></div>

<!-- Scripts de Bootstrap -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="ruta/relativa/a/nav.js"></script>
```

### Rutas relativas

El script `nav.js` detecta automáticamente la profundidad de la página actual y ajusta las rutas:

- **Páginas en la raíz** (`index.html`, `contacto.html`, etc.): `<script src="nav.js"></script>`
- **Páginas en subdirectorios** (como `Silververso/GT-12 Centinela/Web/`): `<script src="../../../nav.js"></script>`

### Páginas activas

El sistema detecta automáticamente qué página está activa y marca el enlace correspondiente con la clase `active`.

## Ventajas de este sistema

1. **Mantenimiento centralizado**: Solo necesitas editar `nav.js` para cambiar la navegación en todas las páginas.
2. **Consistencia**: Todas las páginas tienen la misma navegación y footer.
3. **Fácil actualización**: Agregar nuevos enlaces o cambiar el diseño es mucho más simple.
4. **Gestión inteligente de rutas**: El script ajusta automáticamente las rutas según la ubicación de la página.

## Cómo agregar una nueva página

1. Crea tu archivo HTML
2. Agrega los placeholders para navegación y footer
3. Incluye el script `nav.js` con la ruta relativa correcta
4. Si necesitas marcar esta página como activa, edita la función `getActivePage()` en `nav.js`

## Páginas actualizadas

✅ index.html
✅ contacto.html
✅ proyectos.html
✅ sobremi.html
✅ nav.html
✅ Silververso/GT-12 Centinela/Web/centinela.html
✅ Silververso/GT-12 Centinela/Web/actual.html
✅ Silververso/GT-12 Centinela/Web/blog.html
✅ Silververso/GT-12 Centinela/Web/comics.html

**Nota**: `arbolbetlam.html` no se actualizó porque es un archivo generado por Family Echo con un formato HTML completamente diferente.

## Personalización

Para personalizar la navegación o el footer, edita las funciones en `nav.js`:

- `generateNavHTML()`: Genera el HTML de la barra de navegación
- `generateFooterHTML()`: Genera el HTML del footer
- `getActivePage()`: Determina qué página está activa
- `getDepth()`: Calcula la profundidad del directorio para ajustar rutas

---

*Creado el 28/10/2025 - Aura Plateada*
