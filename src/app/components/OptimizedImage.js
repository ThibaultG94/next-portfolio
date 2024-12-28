"use client";

import { useState } from "react";
import Image from "next/image";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  isModal = false,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Calcul du ratio d'aspect pour maintenir les proportions
  const aspectRatio = height ? (height / width) * 100 : 56.25; // 56.25% est le ratio 16:9 par défaut

  const imageSizes = isModal
    ? "100vw" // En modal, l'image peut prendre toute la largeur
    : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

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
        fill="none"
        sizes={imageSizes}
        quality={90}
        priority={priority}
        style={{
          objectFit: "contain",
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
