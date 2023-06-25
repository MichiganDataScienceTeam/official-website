import Layout from "@/components/layout";
import Button from "@/components/button";
import Factbox from "@/components/factbox";
import Wave from "@/components/wave";
import Wave180 from "@/components/wave180";
import Link from "next/link";
import fs from "fs";
import path from "path";
// import Markdown from 'markdown-to-jsx';
import Image from "next/image";
import fontbook from "@/shared/fonts";
import SponsorSection from "@/components/sponsorSection";

export default function Home({ sponsors, projects }) {
  sponsors[0].tier = "MDST is made possible by our sponsors";
  return (
    <Layout>
      <div className="md:text-left text-center hero">
        <div className="container mx-auto ">
          <div className="flex gap-8 items-center md:flex-row flex-col-reverse p-7">
            <div className="md:w-1/2 w-full">
              <div>
                <h1 className="mb-2 md:mb-5 lg:text-5xl md:text-4xl text-3xl font-bold font-sans tracking-tight">
                  U of M&apos;s Premier Data Science Club
                </h1>
                <p className="mb-10 lg:text-xl md:text-lg text-base font-light lg:tracking-wider tracking-normal">
                  We empower the next generation of data scientists at the
                  University of Michigan through education and exploration.
                </p>
              </div>
              <div className="flex md:justify-start justify-center gap-5">
                <Button link="" text="Join Us"></Button>
                <Button link="" text="Work With Us"></Button>
              </div>
            </div>
            <Image
              className="md:w-1/2 w-full"
              width="500"
              height="500"
              src="images/Dataframe_Graphic.svg"
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
        <div className="grid grid-flow-row md:grid-flow-col p-7 gap-x-16 gap-y-10">
          <Factbox
            leader="Join our community of data science enthusiasts with"
            fact="200+ Members"
            closer="across 10+ different majors in 8 different U of M Schools"
          ></Factbox>
          <Factbox
            leader="Build data science expertise by working on one of our"
            fact="8-10 Projects"
            closer="each semester in domains like finance, sports, computer vision,
            and more"
          ></Factbox>
          <Factbox
            leader="Invest in your future career through"
            fact="Tons of Events"
            closer="in career development, interview prep, education, and networking"
          ></Factbox>
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
          All UM Ann Arbor students can join for free.
        </h2>
        <div className="flex mt-4 justify-center">
          <Button link="" text="Join Us"></Button>
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
  console.log(projects);
  return { props: { sponsors, projects } };
}
