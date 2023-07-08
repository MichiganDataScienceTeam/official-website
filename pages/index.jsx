import Layout from "@/components/layout";
import Wave from "@/components/wave";
import Wave180 from "@/components/wave180";
import Link from "next/link";
import fs from "fs";
import path from "path";
// import Markdown from 'markdown-to-jsx';
import Image from "next/image";
import fontbook from "@/shared/fonts";
import SponsorSection from "@/components/sponsorSection";
import { useRouter } from "next/router";

export default function Home({ sponsors, projects }) {
  sponsors[0].tier = "MDST is made possible by our sponsors";
  const router = useRouter();
  const basePath = router.basePath;
  return (
    <Layout>
      <div className="md:text-left text-center hero">
        <div className="container mx-auto ">
          <div className="flex gap-8 items-center md:flex-row flex-col-reverse">
            <div className="md:w-1/2 w-full">
              <h1
                className={`mb-2 md:mb-5 lg:text-5xl md:text-4xl text-3xl font-bold font-sans tracking-tight`}
              >
                U of M&apos;s Premier Data Science Club
              </h1>
              <p className="mb-10 lg:text-xl md:text-lg text-base font-light lg:tracking-wider tracking-normal">
                We empower the next generation of data scientists at the
                University of Michigan through education and exploration.
              </p>
            </div>
            <Image
              className="md:w-1/2 w-full"
              width="500"
              height="500"
              src={
                basePath
                  ? `${basePath}/images/Dataframe_Graphic.svg`
                  : "/images/Dataframe_Graphic.svg"
              }
              alt="Image of a dataframe"
            />
          </div>

          <div className="flex justify-center gap-5">
            <Link
              className="border-2 rounded-full p-3 hover:-translate-y-1"
              href="/join"
            >
              Join Us
            </Link>
            <Link
              className="border-2 rounded-full p-3 hover:-translate-y-1"
              href="/sponsors"
            >
              Work With Us
            </Link>
          </div>
        </div>

        <Wave></Wave>
      </div>
      <div className="container mx-auto">
        <div className="grid bullets items-center gap-x-8 gap-y-2 grid-flow-col">
          <p className="self-end">
            Join our community of data science enthusiasts with
          </p>
          <p className="text-3xl font-semibold">200+ Members</p>
          <p className="self-start">
            across 10+ different majors in 8 different U of M Schools
          </p>

          <p className="self-end">
            Build your data science expertise by working on one of our
          </p>
          <p className="text-3xl font-semibold">8-10 Projects</p>
          <p className="self-start">
            each semester in domains like finance, sports, computer vision, and
            more
          </p>
          <p className="self-end mt-4 sm:mt-0">
            Invest in your future career through
          </p>
          <p className="text-3xl font-semibold">Tons of Events</p>
          <p className="self-start">
            in career development, interview prep, education, and networking.
          </p>
        </div>
      </div>
      <div className="bg-grey">
        <Wave180 className="rotate-180"></Wave180>
        <div className="container mx-auto py-4">
          <h2 className="text-3xl text-center bold">Recent Projects</h2>
          <div className="flex gap-4 flex-col sm:flex-row p-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} json={project} />
            ))}
          </div>
        </div>
        <Wave></Wave>
      </div>
      <div className="container mx-auto">
        <h2 className="text-3xl text-center">
          Interested? <br />
          All UM Ann Arbor students can join for free!
        </h2>
        <div className="flex mt-4 justify-center">
          <Link
            className="border-2 rounded-full p-3 hover:-translate-y-1"
            href=""
          >
            Join Us
          </Link>
        </div>
      </div>

      <SponsorSection group={sponsors[0]} />

      {/* <div className='dark:bg-blue-800 p-4'>
        <Markdown className='markdown'>{content}</Markdown>
      </div> */}
    </Layout>
  );
}
function ProjectCard({ json }) {
  return (
    <Link
      href={json.link}
      className="bg-grey-light p-2 rounded-lg w-full hover:-translate-y-1"
    >
      <Image
        className="w-full rounded"
        width="500"
        height="500"
        src={`images/${json.image}`}
        alt="temp"
      />
      <h3 className="text-lg ">{json.name}</h3>
      <p>{json.description}</p>
    </Link>
  );
}
export async function getStaticProps() {
  const sponsorFilePath = path.join(process.cwd(), "config", "sponsors.json");
  const sponsorFileContent = fs.readFileSync(sponsorFilePath, "utf-8");
  const sponsors = JSON.parse(sponsorFileContent);

  const projectFilePath = path.join(process.cwd(), "config", "homepage.json");
  const projectFileContent = fs.readFileSync(projectFilePath, "utf-8");
  const projects = JSON.parse(projectFileContent);
  return { props: { sponsors, projects } };
}
