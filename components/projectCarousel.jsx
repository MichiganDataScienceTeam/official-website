import Image from "next/image";

export function ProjectCard({
  img_src,
  img_alt,
  project_title,
  project_description,
}) {
  return (
    <div className="w-full p-7 rounded-2xl max-w-lg bg-translucent">
      <Image
        className="w-full p-5"
        width="400"
        height="400"
        src={img_src}
        alt={img_alt}
      />
      <h3 className="text-2xl font-bold">{project_title}</h3>
      <p className="truncate">{project_description}</p>
    </div>
  );
}

export default function ProjectCarousel({ project_metadata }) {
  return (
    <div className="container mx-auto py-4">
      <h2 className="text-3xl text-center font-bold">Recent Projects</h2>
      <div className="flex gap-4 flex-col sm:flex-row p-4 justify-center">
        <ProjectCard
          img_src="images/temp.png"
          img_alt="temp"
          project_title="Image Colorization"
          project_description="Leverage computer vision and ML to automatically transform images from grayscale color schemes to new, vibrant palettes, enhancing their visual appeal and creative possibilities. "
        />
        <ProjectCard
          img_src="images/temp.png"
          img_alt="temp"
          project_title="Movie Quotes Analysis"
          project_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      pariatur reiciendis"
        />
        <ProjectCard
          img_src="images/temp.png"
          img_alt="temp"
          project_title="Wildfire Spread Prediction"
          project_description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
      pariatur reiciendis"
        />
      </div>
    </div>
  );
}
