"use client";
import { useEffect, useState } from "react";

const useViewportType = () => {
  const [viewportType, setViewportType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setViewportType("desktop");
      } else if (window.innerWidth >= 768) {
        setViewportType("tablet");
      } else {
        setViewportType("mobile");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewportType;
};

export default useViewportType;
