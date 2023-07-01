import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ json }) {
  return (
    <div className="w-full p-7 rounded-2xl bg-translucent hover:-translate-y-1 transition">
      <Link href={json.link}>
        <Image
          className="w-full w-p-5"
          width="400"
          height="400"
          src={`images/${json.image}`}
          alt={json.alt || "temp"}
        />
        <h3 className="text-2xl font-bold">{json.name}</h3>
        <p className="truncate">{json.description}</p>
      </Link>
    </div>
  );
}

export default function ProjectCarousel({ projects }) {
  return (
    <div className="container mx-auto py-4">
      <h2 className="text-3xl text-center font-bold">Recent Projects</h2>
      <div className="grid grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-1 gap-7 p-4 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} json={project} />
        ))}
      </div>
    </div>
  );
}
