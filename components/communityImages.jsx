import Image from "next/image";
import { useState } from "react";

export default function CommunityImages({ images, basePath }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col items-center mx-auto max-w-6xl">
      <div className="relative w-full">
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded"
        >
          ❮
        </button>
        <div
          style={{
            margin: "auto",
            width: "1000px",
            height: "600px",
          }}
        >
          <img
            src={
              basePath
                ? `${basePath}/images/community/${images[currentIndex].image}`
                : `/images/community/${images[currentIndex].image}`
            }
            alt={images[currentIndex].name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensure the image covers the container while maintaining aspect ratio
            }}
          />
        </div>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded"
        >
          ❯
        </button>
      </div>
      <p className="text-base mt-2">{images[currentIndex].name}</p>
    </div>
  );
}
