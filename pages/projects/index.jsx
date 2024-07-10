import HeadContent from "@/components/headContent";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Icon from "@/components/icon";

export default function Projects({ groupedLinks }) {
  const router = useRouter();
  const basePath = router.basePath;

  return (
    <Layout>
      <HeadContent 
        title={"Michigan Data Science Team - Projects"} 
        description={"Michigan Data Science Team - MDST is the largest data science club at the University of Michigan. Here are some of our past projects."} 
      />
      <Hero title="Our Past Projects" />
      {Object.entries(groupedLinks).map(([subdirectory, links]) => (
        <ProjectSection key={subdirectory} subdirectory={subdirectory} links={links} basePath={basePath} />
      ))}
    </Layout>
  );
}

function ProjectSection({ subdirectory, links, basePath }) {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 className="text-3xl mb-4">{subdirectory}</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {links.map((link, index) => (
          <ProjectCard key={index} basePath={basePath} project={link} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, basePath }) {
  const imagePath = `${basePath}/images/projects/${project.label.toLowerCase().split(" ").join("_")}.jpg`;
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
        <h3 className="mb-1 text-2xl font-bold tracking-tight">{project.label}</h3>
        <ul className="flex sm:justify-center mt-2 sm:mt-4 space-x-4">
          {project.type === "link" && (
            <li>
              <Link href={project.href} className="hover:text-gray" aria-label="Github Repo">
                <Icon name="github" className="text-3xl" />
              </Link>
            </li>
          )}
          {project.type === "md" && (
            <li>
              <Link href={project.href} className="hover:text-gray" aria-label="Markdown">
                <Icon name="file-text" className="text-3xl" />
              </Link>
            </li>
          )}
          {project.type === "pdf" && (
            <li>
              <Link href={project.href} className="hover:text-gray" aria-label="PDF">
                <Icon name="file-pdf" className="text-3xl" />
              </Link>
            </li>
          )}
          {project.type === "googleSlides" && (
            <li>
              <Link href={project.href} className="hover:text-gray" aria-label="Google Slides">
                <Icon name="googleSlides" className="text-3xl" />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const projectsDirectory = path.join(process.cwd(), "public", "projects");
  const subdirectories = fs.readdirSync(projectsDirectory, { withFileTypes: true }).filter(dirent => dirent.isDirectory());

  const sortedSubdirectories = subdirectories.sort((a, b) => {
    const [aSeason, aYear] = a.name.split('_');
    const [bSeason, bYear] = b.name.split('_');
    const seasonOrder = { Winter: 0, Fall: 1 };

    if (aYear === bYear) {
      return seasonOrder[aSeason] - seasonOrder[bSeason];
    } else {
      return parseInt(bYear) - parseInt(aYear);
    }
  });

  const groupedLinks = sortedSubdirectories.reduce((acc, subdirectory) => {
    const subdirectoryPath = path.join(projectsDirectory, subdirectory.name);
    const innerDirectories = fs.readdirSync(subdirectoryPath, { withFileTypes: true }).filter(dirent => dirent.isDirectory());

    const links = innerDirectories.map(innerDir => {
      const innerDirPath = path.join(subdirectoryPath, innerDir.name);
      const writeupMdPath = path.join(innerDirPath, "writeup.md");
      const writeupPdfPath = path.join(innerDirPath, "writeup.pdf");
      const linkTxtPath = path.join(innerDirPath, "link.txt");

      const label = innerDir.name.split("_").join(" ");
      let type, href;

      if (fs.existsSync(linkTxtPath)) {
        const link = fs.readFileSync(linkTxtPath, "utf-8").trim();
        if (link.toLowerCase().includes('docs.google.com/presentation')) {
          href = link;
          type = "googleSlides";
        } else {
          href = link;
          type = "link";
        }
      } else if (fs.existsSync(writeupMdPath)) {
        href = `/projects/${subdirectory.name}/${innerDir.name}`;
        type = "md";
      } else if (fs.existsSync(writeupPdfPath)) {
        href = `/projects/${subdirectory.name}/${innerDir.name}/writeup.pdf`;
        type = "pdf";
      } else {
        href = "";
        type = "none";
      }
      return { label, href, type };
    });

    if (links.length > 0) {
      acc[subdirectory.name.split("_").join(" ")] = links;
    }
    return acc;
  }, {});

  return {
    props: {
      groupedLinks,
    },
  };
}
