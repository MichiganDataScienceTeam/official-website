import Image from 'next/image';

export default function CommunityImages({ images, basePath }) {
  return (
    <div className="flex flex-col sm:flex-row items-center mx-auto max-w-6xl">
      {images.map((image, index) => (
        <div key={index} className="w-full sm:w-1/2 mx-4 mb-6 flex flex-col justify-center items-center">
          <p className="text-base mt-2">{image.name}</p>
          <Image
            width={500}
            height={500}
            src={
              basePath
                ? `${basePath}/images/community/${image.image}`
                : `/images/community/${image.image}`
            }
            alt={image.name}
          />
        </div>
      ))}
    </div>
  );
}
