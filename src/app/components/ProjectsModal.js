import Image from "next/image";
import { useEffect, useState } from "react";
import projets from "../../../public/data/projects.json";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ProjectsModal({
  showModal,
  setShowModal,
  currentImage,
  currentProject,
  nextImage,
  prevImage,
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
    <div className="relative z-50">
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
        <button
          onClick={() => setShowModal(false)}
          className="absolute right-8 top-2 bg-white p-1 rounded-full shadow-lg text-gray-800 hover:text-gray-600"
          style={{ zIndex: 51 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.293 2.293a1 1 0 0 1 1.414 0L8 6.586l4.293-4.293a1 1 0 0 1 1.414 1.414L9.414 8l4.293 4.293a1 1 0 0 1-1.414 1.414L8 9.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L6.586 8 2.293 3.707a1 1 0 0 1 0-1.414z" />
          </svg>
        </button>
        {fullSizeImage && (
          <div
            style={{
              maxWidth: "80vw",
              maxHeight: "80vh",
              width: "auto",
              height: "auto",
            }}
            className="flex items-center justify-center my-auto"
          >
            <button
              onClick={prevImage}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 text-2xl text-gray-200 hover:text-gray-800 transition duration-300 z-10"
            >
              <FaArrowLeft />
            </button>
            <Image
              src={fullSizeImage}
              alt={projets[currentProject].title}
              layout="responsive"
              width={1918}
              height={1079}
              className="rounded-lg mt-0"
            />
            <button
              onClick={nextImage}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 text-2xl text-gray-200 hover:text-gray-800 transition duration-300 z-10"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
