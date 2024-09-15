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
    <div className="items-center mx-auto">
      <div className="relative community-image-container">
        <button
          onClick={prevImage}
          className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded"
        >
          ❮
        </button>
        <h1 className="community-image-headline gradient-text">
          {images[currentIndex].name}
        </h1>
        <div
          style={{
            margin: "auto",
            width: "70%",
            aspectRatio: 16 / 9,
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
          className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
