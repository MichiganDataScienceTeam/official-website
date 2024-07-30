import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/icon";

export default function ProjectCard({ project, basePath }) {
  const imagePath = `${basePath}/images/projects/${project.label
    .toLowerCase()
    .split(" ")
    .join("_")}.jpg`;
  return (
    <div className="text-left sm:text-center rounded bg-grey py-2 sm:py-4 px-2 sm:px-8 w-full sm:w-60 flex sm:block gap-8">
      <Image
        className="sm:mx-auto sm:mb-4 sm:w-44 sm:h-44 w-24 h-24 my-auto rounded-full object-cover"
        width="176"
        height="176"
        src={imagePath}
        alt={project.label}
      />
      <div className="">
        <h3 className="mb-1 text-2xl font-bold tracking-tight">
          {project.label}
        </h3>
        <ul className="flex sm:justify-center mt-2 sm:mt-4 space-x-4">
          {project.github && (
            <li>
              <Link
                href={project.github}
                className="hover:text-gray"
                aria-label="Github Repo"
              >
                <Icon name="github" className="text-3xl" />
              </Link>
            </li>
          )}
          {project.googleSlides && (
            <li>
              <Link
                href={project.googleSlides}
                className="hover:text-gray"
                aria-label="Google Slides"
              >
                <Icon name="file-pdf" className="text-3xl" />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
