import fs from "fs";
import path from "path";
import HeadContent from "@/components/headContent";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import ProjectCard from "@/components/projectCard";
import { useRouter } from "next/router";

export default function Projects({ groupedLinks }) {
  const router = useRouter();
  const basePath = router.basePath;

  return (
    <Layout>
      <HeadContent
        title={"Michigan Data Science Team - Projects"}
        description={
          "Michigan Data Science Team - MDST is the largest data science club at the University of Michigan. Here are some of our past projects."
        }
      />
      <Hero title="Our Projects" />

      <section className="current-projects py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="text-3xl mb-4">Fall 2026 Projects</h2>
          <p className="text-lg font-light text-gray-500 dark:text-gray-400">
            To be updated — please come to our Project Fair on September 13.
            We have more consulting projects than normal this semester, which
            means project spots will be more limited.
          </p>
        </div>
      </section>

      {Object.entries(groupedLinks)
        .sort((a, b) => {
          const [aSeason, aYear] = a[0].split(" ");
          const [bSeason, bYear] = b[0].split(" ");
          const seasonOrder = { Winter: 0, Fall: 1 };

          if (aYear === bYear) {
            return seasonOrder[bSeason] - seasonOrder[aSeason];
          } else {
            return parseInt(bYear) - parseInt(aYear);
          }
        })
        .map(([semester, projects]) => (
          <GroupSection
            key={semester}
            basePath={basePath}
            semester={semester}
            projects={projects}
          />
        ))}
    </Layout>
  );
}

function GroupSection({ semester, projects, basePath }) {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 className="text-3xl mb-4">{semester}</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} basePath={basePath} project={project} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const pastProjectsPath = path.join(
    process.cwd(),
    "config",
    "pastProjects.json"
  );
  const pastProjects = JSON.parse(fs.readFileSync(pastProjectsPath, "utf-8"));

  const groupedLinks = Object.entries(pastProjects).reduce(
    (acc, [semester, projects]) => {
      acc[semester] = projects.map((project) => ({
        ...project,
      }));
      return acc;
    },
    {}
  );

  return {
    props: {
      groupedLinks,
    },
  };
}
