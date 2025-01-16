import fs from "fs";
import path from "path";
import HeadContent from "@/components/headContent";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import CurrentProjectCard from "@/components/currentProjectCard";
import ProjectCard from "@/components/projectCard";
import { useRouter } from "next/router";

export default function Projects({ groupedLinks, currentProjects }) {
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
          <h2 className="text-3xl mb-4">Current Projects 2024 Fall</h2>
          <h3>
            You can find specific details about the projects on our{" "}
            <a
              href="https://mdst-club.notion.site/Fall-2024-Project-Directory-734d91c7dd6f4991b98eef461504a1eb"
              style={{
                color: "#C8BAF3",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Notion Page
            </a>
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {currentProjects.map((project, index) => (
            <CurrentProjectCard
              key={index}
              project={project}
              basePath={basePath}
            />
          ))}
        </div>
      </section>

      {Object.entries(groupedLinks)
        .sort((a, b) => {
          const [aSeason, aYear] = a[0].split(" ");
          const [bSeason, bYear] = b[0].split(" ");
          const seasonOrder = { Winter: 0, Fall: 1 };

          if (aYear === bYear) {
            return seasonOrder[aSeason] - seasonOrder[bSeason];
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

  const currentProjectsPath = path.join(
    process.cwd(),
    "config",
    "currentProjects.json"
  );
  const currentProjects = JSON.parse(
    fs.readFileSync(currentProjectsPath, "utf-8")
  );

  return {
    props: {
      groupedLinks,
      currentProjects,
    },
  };
}
