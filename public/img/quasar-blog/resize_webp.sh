#!/bin/bash

# Crée le répertoire "min" s'il n'existe pas
if [ ! -d "min" ]; then
    mkdir "min"
fi

# Parcourt chaque fichier PNG dans le répertoire courant
for img in *.png; do
    # Vérifie si le fichier est un fichier régulier
    if [ -f "$img" ]; then
        # Construit le nom du fichier de sortie avec le suffixe "-min"
        base_name=$(basename "$img" .png)
        output="min/${base_name}-min.webp"

        # Convertit et redimensionne l'image en WebP
        convert "$img" -resize 405x540 -quality 90 "$output"

        echo "Image convertie : $output"
    fi
done

echo "Toutes les images ont été traitées avec succès !"
