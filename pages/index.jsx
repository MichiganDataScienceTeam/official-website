import Layout from "@/components/layout";
import Button from "@/components/button";
import Factbox from "@/components/factbox";
import Wave from "@/components/wave";
import Wave180 from "@/components/wave180";
import fs from "fs";
import path from "path";
// import Markdown from 'markdown-to-jsx';
import Image from "next/image";
import fontbook from "@/shared/fonts";
import SponsorSection from "@/components/sponsorSection";
import ProjectCarousel from "@/components/projectCarousel";

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
                <Button link="/join/" text="Join Us"></Button>
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
          <ProjectCarousel projects={projects}></ProjectCarousel>
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

      <SponsorSection group={sponsors[sponsors.length - 1]} />

      {/* <div className='dark:bg-blue-800 p-4'>
        <Markdown className='markdown'>{content}</Markdown>
      </div> */}
    </Layout>
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
