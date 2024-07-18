import fs from "fs";
import path from "path";
import HeadContent from "@/components/headContent";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import ProjectCard from "@/components/ProjectCard";
import CurrentProjectCard from "@/components/CurrentProjectCard";
import { useRouter } from "next/router";

export default function Projects({ groupedLinks, currentProjects }) {
  const router = useRouter();
  const basePath = router.basePath;

  return (
    <Layout>
      <HeadContent 
        title={"Michigan Data Science Team - Projects"} 
        description={"Michigan Data Science Team - MDST is the largest data science club at the University of Michigan. Here are some of our past projects."} 
      />
      <Hero title="Our Projects" />
      
      <section className="current-projects py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="text-3xl mb-4">Current Projects</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {currentProjects.map((project, index) => (
            <CurrentProjectCard key={index} project={project} basePath={basePath} />
          ))}
        </div>
      </section>

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

  const currentProjectsPath = path.join(process.cwd(), "config", "currentProjects.json");
  const currentProjects = JSON.parse(fs.readFileSync(currentProjectsPath, "utf-8"));

  return {
    props: {
      groupedLinks,
      currentProjects,
    },
  };
}
