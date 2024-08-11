import Image from "next/image";
import { useEffect, useState } from "react";
import projets from "../../../public/data/projects.json";

export default function ProjectsModal({
  showModal,
  setShowModal,
  currentImage,
  currentProject,
}) {
  const [fullSizeImage, setFullSizeImage] = useState(null);

  useEffect(() => {
    if (showModal && currentImage != null) {
      // Fetch the current small image path
      const minImagePath = projets[currentProject].images[currentImage];
      // Remove '/min' from the path and '-min' from the file name
      const fullImagePath = minImagePath
        .replace("/min/", "/")
        .replace("-min", "");
      setFullSizeImage(fullImagePath);
    }
  }, [showModal, currentImage, currentProject, projets]);

  return (
    <>
      <div className="relative z-50 bg-white p-4 rounded-lg max-w-lg mx-auto mt-20">
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            Close Modal
          </button>
          {fullSizeImage && (
            <Image
              src={fullSizeImage}
              alt={projets[currentProject].title}
              width={1918}
              height={1079}
              className="rounded-lg"
            />
          )}
        </div>
      </div>
    </>
  );
}
