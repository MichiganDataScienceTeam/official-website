import Button from "@/components/button";
import HeadContent from "@/components/headContent";
import Hero from "@/components/hero";
import Icon from "@/components/icon";
import Layout from "@/components/layout";
import SponsorSection from "@/components/sponsorSection";
import Timeline from "@/components/timeline";
import Wave from "@/components/wave";
import Wave180 from "@/components/wave180";
import CommunityImages from "@/components/communityImages";
import loadStaticData from "@/shared/static";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home({ sponsors, projects, timeline, communityImages }) {
  sponsors[0].tier = "MDST is made possible by our sponsors";
  const router = useRouter();
  const basePath = router.basePath;
  return (
    <Layout>
      <HeadContent
        title={"MDST - Michigan Data Science Team"}
        description={
          "Michigan Data Science Team - MDST is the largest data science club at U-M"
        }
      />
      <Hero>
        <div className="flex gap-8 items-center md:flex-row flex-col p-8">
          <div className="md:w-1/2 w-full">
            <h1 className="mb-2 md:mb-5 lg:text-5xl md:text-4xl text-3xl font-bold font-sans tracking-tight">
              U-M&apos;s Premier Applied Data Science Club
            </h1>
            <p className="mb-5 xl:text-lg lg:text-base text-sm font-light tracking-normal">
              MDST&apos;s semesterly projects teach U-M students how to use data
              science to solve problems, offering them the chance to learn key
              skills and work with emerging tech.
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
            alt="Dataframe of movie reviews and distribution"
            priority={true}
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
          <div className="bg-grey p-4 sm:p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">{timeline.title}</h2>
            <Timeline events={timeline.events} />
          </div>
        )}
        <div className="lg:order-none order-first">
          <div className="xl:sticky top-24">
            <div className="xl:text-xl lg:text-lg text-base font-light tracking-normal mb-2">
              <div className="mb-4">
                <span className="font-bold">
                  Michigan Data Science Team (MDST)
                </span>{" "}
                is the largest data science club at the University of Michigan,
                dedicated to equipping U-M students with the skills needed for
                future data-driven careers.
              </div>
              <div className="mb-4">
                We believe data science is for everyone. Each semester, MDST
                runs team-based projects, allowing you to learn and practice
                data science skills and their applications in a variety of
                domains.
              </div>
              <div className="mb-4">
                We also host guest talks, workshops, and socials - all
                opportunities to meet and interact with the larger data science
                community at the U-M and beyond.
              </div>
            </div>
            <div className="xl:text-xl lg:text-lg text-base font-light tracking-normal mb-8 flex">
              <p className="sm:flex block">
                All U-M students are welcome to join MDST.&nbsp;
                <Link
                  href="/join"
                  className="font-bold flex whitespace-nowrap content-center hover:underline transition"
                >
                  Join now&nbsp;
                  <Icon name="arrow-stem-left" className="my-auto font-bold" />
                </Link>
              </p>
            </div>
            <div
              className={`flex flex-col md:flex-row gap-4 ${
                timeline.show_on_homepage ? "lg:flex-col" : ""
              } xl:flex-row`}
            >
              <Factbox fact="250+" closer="community members"></Factbox>
              <Factbox fact="14+" closer="project teams"></Factbox>
              <Factbox
                fact="10+"
                closer="socials, workshops, tech talks, and more"
              ></Factbox>
            </div>
          </div>
        </div>
      </div>
      <Carousel projects={projects} basePath={basePath} />
      <CommunityImages basePath={basePath} images={communityImages} />
      <div className="container mx-auto px-2 mt-8">
        <h2 className="text-3xl text-center">
          MDST is proudly supported by our sponsors
        </h2>
        <SponsorSection basePath={basePath} group={sponsors[0]} />
      </div>
    </Layout>
  );
}
function ProjectCard({ json, basePath }) {
  return (
    <Link
      href={json.link}
      className="bg-grey-light p-5 rounded-lg drop-shadow-sm max-w-[350px] transition hover:-translate-y-1 min-w-[200px] w-full"
    >
      <Image
        className="w-full rounded mb-3 h-44 md:h-56 lg:h-72 xl:h-80 object-cover"
        width="500"
        height="500"
        src={
          basePath
            ? `${basePath}/images/${json.image}`
            : `/images/${json.image}`
        }
        alt={""}
      />
      <h3 className="text-lg font-bold">{json.name}</h3>
      {json.description && <p className="line-clamp-2">{json.description}</p>}
    </Link>
  );
}

function Factbox({ fact, closer }) {
  return (
    <div className="text-left bg-grey p-4 rounded-lg w-full">
      <h2 className="text-4xl font-semibold my-2">{fact}</h2>
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
      <div className="container mx-auto py-4 relative overflow-hidden">
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
          aria-label="Projects Left"
          onClick={() => {
            if (shown > -1) {
              setShown(shown - 1);
            }
          }}
          className="sm:hidden absolute text-4xl bg-[#000000d8] left-2 top-1/2 -translate-y-1/2 p-2 rounded-full z-10 drop-shadow-lg cursor-pointer"
        >
          <Icon className="" name="arrow-left" />
        </button>
        <button
          aria-label="Projects Right"
          onClick={() => {
            if (shown < 1) {
              setShown(shown + 1);
            }
          }}
          className="sm:hidden absolute text-4xl bg-[#000000d8] right-2 top-1/2 -translate-y-1/2 p-2 rounded-full z-10 drop-shadow-lg cursor-pointer"
        >
          <Icon className="" name="arrow-right" />
        </button>
      </div>
      <Wave></Wave>
    </div>
  );
}

export async function getStaticProps() {
  const sponsors = loadStaticData("sponsors.json");
  const projects = loadStaticData("homepage.json");
  const timeline = loadStaticData("timeline.json");
  const communityImages = loadStaticData("communityImages.json");

  return { props: { sponsors, projects, timeline, communityImages } };
}
