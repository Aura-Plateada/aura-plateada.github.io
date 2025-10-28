#!/bin/bash

# Script para subir cambios automáticamente a GitHub
# Uso: ./subir.sh

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Estado del repositorio ===${NC}"
git status

echo -e "\n${BLUE}=== Añadiendo cambios ===${NC}"
git add .

# Obtener fecha y hora actual en formato DD/MM/AAAA HH:MM
FECHA=$(date +"%d/%m/%Y %H:%M")

echo -e "\n${BLUE}=== Creando commit ===${NC}"
git commit -m "$FECHA"

echo -e "\n${BLUE}=== Subiendo a GitHub ===${NC}"
git push origin main

echo -e "\n${GREEN}✓ Cambios subidos correctamente${NC}"
