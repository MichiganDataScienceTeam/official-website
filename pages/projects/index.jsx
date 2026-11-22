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

      <section className="current-projects px-4 mx-auto max-w-screen-xl text-center lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="text-3xl mb-4">Fall 2026</h2>
          <p className="text-2xl font-light text-gray-500 dark:text-gray-400">
            We have more consulting projects than normal this semester, which
            means project spots will be more limited. Projects can be found on 
            our new website: <br /> <br />
          </p>
          <a
            href="https://mdst-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold uppercase tracking-widest text-white shadow-lg shadow-primary/30 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary-dark/50 active:translate-y-0 active:scale-95 active:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-light/60"
          >
            FALL 2026 PROJECTS
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              &rarr;  
            </span>
          </a>
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
