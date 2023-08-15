import Layout from "@/components/layout";
import Wave from "@/components/wave";
import Wave180 from "@/components/wave180";
import Hero from "@/components/hero";
import Link from "next/link";
import Button from "@/components/button";
import Icon from "@/components/icon";
import fs from "fs";
import path from "path";
import Image from "next/image";
import SponsorSection from "@/components/sponsorSection";
import Timeline from "@/components/timeline";

import { useRouter } from "next/router";
import { useState } from "react";
export default function Home({ sponsors, projects, timeline }) {
  sponsors[0].tier = "MDST is made possible by our sponsors";
  const router = useRouter();
  const basePath = router.basePath;
  return (
    <Layout>
      <Hero>
        <div className="flex gap-8 items-center md:flex-row flex-col-reverse p-8">
          <div className="md:w-1/2 w-full">
            <h1 className="mb-2 md:mb-5 lg:text-5xl md:text-4xl text-3xl font-bold font-sans tracking-tight">
              U of M&apos;s Premier Data Science Club
            </h1>
            <p className="mb-5 xl:text-lg lg:text-base text-sm font-light tracking-normal">
              We empower the next generation of data scientists at the
              University of Michigan through education and exploration.
            </p>
            <div className="flex md:justify-start justify-center gap-5">
              <Button href="/join" text="Join Us" />
              <Button href="/sponsors" text="Work with Us" />
            </div>
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
      </Hero>
      <div
        className={`container mx-auto px-7  ${
          timeline.show_on_homepage
            ? "grid gap-8 lg:grid-cols-2 lg:grid-rows-1 grid-auto-rows flex-row-reverse"
            : "flex max-w-6xl"
        }`}
      >
        {timeline.show_on_homepage && (
          <div className="bg-grey p-4 sm:p-8 rounded-lg overflow-auto max-h-96">
            <h2 className="text-3xl font-bold mb-4">{timeline.title}</h2>
            <Timeline events={timeline.events} />
          </div>
        )}
        <div className="lg:order-none order-first">
          <div className="xl:text-xl lg:text-lg text-base font-light tracking-normal">
            <span className="font-bold">Michigan Data Science Team (MDST)</span>{" "}
            is the largest data science club at the University of Michigan,
            dedicated to cultivating the next generation of data science and
            machine learning talent.
          </div>
          <div className="xl:text-xl lg:text-lg text-base font-light tracking-normal my-2 flex">
            <p>Interested?&nbsp;</p>
            <Link
              href="/join"
              className="font-bold flex content-center hover:-translate-y-0.5 transition"
            >
              <p>Join now&nbsp;</p>
              <Icon name="arrow-stem-left" className="my-auto" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 gap-3 mt-10">
            <Factbox fact="200+" closer="community members"></Factbox>
            <Factbox
              fact="8-10"
              closer="data science projects per semester"
            ></Factbox>
            <Factbox
              fact="20+"
              closer="socials, tech talks, and other events per semester"
            ></Factbox>
          </div>
        </div>
      </div>
      <Carousel projects={projects} basePath={basePath} />
      <div className="container mx-auto mb-8 px-2">
        <h2 className="text-3xl text-center">
          Interested? <br />
          All UM Ann Arbor students can join for free!
        </h2>
        <div className="flex mt-4 justify-center">
          <Button href="/join" text="Join Us" />
        </div>
      </div>

      <div className="container mx-auto px-2">
        <h2 className="text-3xl text-center">
          MDST is proudly supported by our sponsors
        </h2>
        <SponsorSection basePath={basePath} group={sponsors[0]} />
      </div>

      {/* <div className='dark:bg-blue-800 p-4'>
        <Markdown className='markdown'>{content}</Markdown>
      </div> */}
    </Layout>
  );
}
function ProjectCard({ json, basePath }) {
  return (
    <Link
      href={json.link}
      className="bg-grey-light p-5 rounded-lg drop-shadow-sm max-w-[350px] transition hover:-translate-y-1 min-w-[200px]"
    >
      <Image
        className="w-full rounded mb-3"
        width="500"
        height="500"
        src={
          basePath
            ? `${basePath}/images/${json.image}`
            : `/images/${json.image}`
        }
        alt={json.image.split(".")[0].split("_").join(" ")}
      />
      <h3 className="text-lg font-bold">{json.name}</h3>
      <p className="line-clamp-2">{json.description}</p>
    </Link>
  );
}

function Factbox({ fact, closer }) {
  return (
    <div className="text-left self-center bg-grey p-4 rounded-lg my-3 h-full">
      <p className="text-4xl font-semibold my-2">{fact}</p>
      <p className="self-start">{closer}</p>
    </div>
  );
}

function Carousel({ projects, basePath }) {
  const [shown, setShown] = useState(0);
  let translation = "0";

  if (shown == -1) {
    translation = "calc(200px + 1rem)";
  } else if (shown == 1) {
    translation = "calc(-200px - 1rem)";
  } else {
    translation = "0";
  }
  return (
    <div className="bg-grey">
      <Wave180 className="rotate-180"></Wave180>
      <div className="container mx-auto py-4 relative overflow-hidden	">
        <h2 className="text-3xl text-center font-bold">Recent Projects</h2>
        <div
          className="flex gap-4 flex-row p-4 justify-center transition"
          style={{
            transform: `translateX(${translation})`,
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} basePath={basePath} json={project} />
          ))}
        </div>
        <button
          onClick={() => {
            if (shown > -1) {
              setShown(shown - 1);
            }
          }}
          className="sm:hidden absolute text-4xl bg-[#000000d8] left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 drop-shadow-lg cursor-pointer"
        >
          <Icon className="" name="arrow-left" />
        </button>
        <button
          onClick={() => {
            if (shown < 1) {
              setShown(shown + 1);
            }
          }}
          className="sm:hidden absolute text-4xl bg-[#000000d8] right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10 drop-shadow-lg cursor-pointer"
        >
          <Icon className="" name="arrow-right" />
        </button>
      </div>
      <Wave></Wave>
    </div>
  );
}

export async function getStaticProps() {
  const sponsorFilePath = path.join(process.cwd(), "config", "sponsors.json");
  const sponsorFileContent = fs.readFileSync(sponsorFilePath, "utf-8");
  const sponsors = JSON.parse(sponsorFileContent);

  const projectFilePath = path.join(process.cwd(), "config", "homepage.json");
  const projectFileContent = fs.readFileSync(projectFilePath, "utf-8");
  const projects = JSON.parse(projectFileContent);

  const timelineFilePath = path.join(process.cwd(), "config", "timeline.json");
  const timelineFileContent = fs.readFileSync(timelineFilePath, "utf-8");
  const timeline = JSON.parse(timelineFileContent);
  return { props: { sponsors, projects, timeline } };
}
