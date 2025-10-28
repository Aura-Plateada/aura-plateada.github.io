#!/bin/bash
# generate-comics-list.sh - Script para generar lista de comics automáticamente

# Directorio base de las imágenes de comics
COMICS_DIR="../Imágenes/Comics"
OUTPUT_FILE="comics-data.js"

# Iniciar el archivo JavaScript
echo "// comics-data.js - Datos generados automáticamente" > "$OUTPUT_FILE"
echo "// Generado el: $(date)" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "const comicsData = {" >> "$OUTPUT_FILE"
echo '  "collections": [' >> "$OUTPUT_FILE"

first_collection=true

# Iterar sobre cada carpeta en Comics
for folder in "$COMICS_DIR"/*; do
    if [ -d "$folder" ]; then
        folder_name=$(basename "$folder")
        
        # Agregar coma si no es la primera colección
        if [ "$first_collection" = false ]; then
            echo "    }," >> "$OUTPUT_FILE"
        fi
        first_collection=false
        
        echo "    {" >> "$OUTPUT_FILE"
        echo "      \"name\": \"$folder_name\"," >> "$OUTPUT_FILE"
        echo "      \"images\": [" >> "$OUTPUT_FILE"
        
        first_image=true
        
        # Listar todas las imágenes en la carpeta y ordenarlas
        shopt -s nullglob
        images=()
        for image in "$folder"/*.jpg "$folder"/*.jpeg "$folder"/*.png "$folder"/*.gif "$folder"/*.webp "$folder"/*.JPG "$folder"/*.JPEG "$folder"/*.PNG "$folder"/*.GIF "$folder"/*.WEBP; do
            if [ -f "$image" ]; then
                images+=("$image")
            fi
        done
        
        # Ordenar las imágenes por número en el nombre del archivo
        IFS=$'\n' sorted_images=($(printf '%s\n' "${images[@]}" | sort -V))
        unset IFS
        
        for image in "${sorted_images[@]}"; do
            image_name=$(basename "$image")
            
            # Agregar coma si no es la primera imagen
            if [ "$first_image" = false ]; then
                echo "," >> "$OUTPUT_FILE"
            fi
            first_image=false
            
            echo -n "        \"$image_name\"" >> "$OUTPUT_FILE"
        done
        
        echo "" >> "$OUTPUT_FILE"
        echo "      ]" >> "$OUTPUT_FILE"
    fi
done

# Cerrar el último objeto y el array
echo "    }" >> "$OUTPUT_FILE"
echo "  ]" >> "$OUTPUT_FILE"
echo "};" >> "$OUTPUT_FILE"

echo "Lista de comics generada en $OUTPUT_FILE"
