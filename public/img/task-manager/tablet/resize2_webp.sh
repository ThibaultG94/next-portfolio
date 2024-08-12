#!/bin/bash

# Parcourt chaque fichier PNG dans le répertoire courant
for img in *.png; do
    # Vérifie si le fichier est un fichier régulier
    if [ -f "$img" ]; then
        # Construit le nom du fichier de sortie en remplaçant l'extension
        output="${img%.png}.webp"

        # Convertit l'image en format WebP, redimensionne à 768x1024
        convert "$img" -resize 768x1024 -quality 90 "$output"

        echo "Image convertie et redimensionnée : $output"
    fi
done

echo "Toutes les images ont été traitées avec succès !"
