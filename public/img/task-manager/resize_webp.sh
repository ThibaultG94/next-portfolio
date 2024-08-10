#!/bin/bash

# Crée le répertoire "min" s'il n'existe pas
if [ ! -d "min" ]; then
    mkdir "min"
fi

# Parcourt chaque fichier WebP dans le répertoire courant
for img in *.webp; do
    # Vérifie si le fichier est un fichier régulier
    if [ -f "$img" ]; then
        # Construit le nom du fichier de sortie avec le suffixe "-min"
        base_name=$(basename "$img" .webp)
        output="min/${base_name}-min.webp"

        # Redimensionne l'image
        convert "$img" -resize 640x360 -quality 80 "$output"

        echo "Image convertie : $output"
    fi
done

echo "Toutes les images ont été traitées avec succès !"
