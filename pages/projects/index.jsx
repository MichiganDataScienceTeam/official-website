import fs from "fs";
import path from "path";
import HeadContent from "@/components/headContent";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import CurrentProjectCard from "@/components/currentProjectCard";
import ProjectCard from "@/components/projectCard";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
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

      <section className="py-16 lg:py-24 px-4 lg:px-6 mx-auto max-w-screen-xl text-center">
        <div className="mx-auto mb-6 lg:mb-8 max-w-screen-sm">
          <FadeIn>
            <h2 className="text-3xl mb-4">Current Projects 2025 Fall</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h3>
              More project details are on our{" "}
              <a
                href="https://mdst-club.notion.site/Fall-2025-Project-Directory-25dc107f9e9580f9beb0f7c64595ef1d"
                style={{
                  color: "#C8BAF3",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Notion Page
              </a>
            </h3>
          </FadeIn>
        </div>
        <StaggerContainer
          staggerDelay={0.1}
          className="flex flex-wrap justify-center gap-6 lg:gap-8"
        >
          {currentProjects.map((project, index) => (
            <CurrentProjectCard
              key={index}
              project={project}
              basePath={basePath}
            />
          ))}
        </StaggerContainer>
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
    <div className="py-16 lg:py-24 px-4 lg:px-6 mx-auto max-w-screen-xl text-center">
      <div className="mx-auto mb-6 lg:mb-8 max-w-screen-sm">
        <FadeIn>
          <h2 className="text-3xl mb-4">{semester}</h2>
        </FadeIn>
      </div>
      <StaggerContainer
        staggerDelay={0.1}
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} basePath={basePath} project={project} />
        ))}
      </StaggerContainer>
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
