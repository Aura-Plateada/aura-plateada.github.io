# Generar lista de cómics (comics-data.js)

Guía rápida para ejecutar el script que genera el archivo `comics-data.js` a partir de las imágenes en `Imágenes/Comics`.

## Requisitos
- Linux / macOS con `bash`.
- Estructura de carpetas existente: `Silververso/GT-12 Centinela/Imágenes/Comics/…`.
- El script: `Silververso/GT-12 Centinela/Web/generate-comics-list.sh`.

## Ejecución rápida

Opción A — desde la carpeta del script (recomendado):

```bash
cd "Silververso/GT-12 Centinela/Web"
bash ./generate-comics-list.sh
```

Opción B — desde la raíz del repositorio (cualquier carpeta):

```bash
bash "Silververso/GT-12 Centinela/Web/generate-comics-list.sh"
```

(Opcional) Hacer el script ejecutable para usar `./`:

```bash
chmod +x "Silververso/GT-12 Centinela/Web/generate-comics-list.sh"
cd "Silververso/GT-12 Centinela/Web"
./generate-comics-list.sh
```

## Resultado esperado
- Se genera/actualiza: `Silververso/GT-12 Centinela/Web/comics-data.js`.
- Contiene una cabecera con la fecha y un objeto `comicsData` con las colecciones y nombres de imágenes.

## De dónde salen las imágenes
- El script lee desde la ruta relativa `../Imágenes/Comics` (respecto a la carpeta `Web`).
- Cada subcarpeta dentro de `Comics/` es una colección.
- Se aceptan extensiones: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp` (mayúsculas y minúsculas).
- Las imágenes se ordenan de forma “natural” por número en el nombre (`sort -V`).

## Cuándo volver a generar
- Cada vez que agregues, elimines o renombres imágenes en `Imágenes/Comics`.

## Solución de problemas
- Error `127` (command not found):
  - No uses `run ./archivo.sh`. Usa `bash ./archivo.sh` o `./archivo.sh` (con permisos de ejecución).
- Lista vacía o faltan colecciones:
  - Verifica que la ruta `Silververso/GT-12 Centinela/Imágenes/Comics` exista y tenga subcarpetas con imágenes.
  - Asegúrate de ejecutar el script desde su carpeta (`Web`) o invocarlo con la ruta completa (ver opciones arriba).
  - Confirma las extensiones de archivo compatibles.
- Problemas de permisos:
  - Ejecuta `chmod +x "Silververso/GT-12 Centinela/Web/generate-comics-list.sh"` para permitir `./generate-comics-list.sh`.

## Mejora opcional (rutas independientes)
Si quieres que el script funcione igual sin importar desde qué carpeta lo ejecutes, puedes actualizarlo para usar la ruta del propio archivo:

```bash
# Al inicio del script
declare -r SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMICS_DIR="$SCRIPT_DIR/../Imágenes/Comics"
OUTPUT_FILE="$SCRIPT_DIR/comics-data.js"
```

Con este cambio, podrás ejecutar:

```bash
bash "Silververso/GT-12 Centinela/Web/generate-comics-list.sh"
```

desde cualquier directorio y las rutas internas seguirán resolviéndose correctamente.