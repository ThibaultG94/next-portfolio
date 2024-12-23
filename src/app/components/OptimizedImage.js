"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Calcul du ratio d'aspect pour maintenir les proportions
  const aspectRatio = height ? (height / width) * 100 : 56.25; // 56.25% est le ratio 16:9 par défaut

  return (
    <div
      className={`relative overflow-hidden ${className || ""}`}
      style={{
        // Utilisation de la technique du padding pour maintenir le ratio d'aspect
        paddingTop: `${aspectRatio}%`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill={true} // Utilisation de fill au lieu de width/height spécifiques
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={90}
        priority={priority}
        style={{
          objectFit: "cover", // Assure que l'image couvre tout l'espace disponible
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        className={`
          duration-700 ease-in-out
          ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }
        `}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
