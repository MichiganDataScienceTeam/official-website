import Layout from "@/components/layout";
import Wave from "@/components/wave";
import Wave180 from "@/components/wave180";
import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import fs from "fs";
import path from "path";
import SponsorSection from "@/components/sponsorSection";

export default function Sponsors({ sponsors }) {
  return (
    <Layout>
      <div className="text-center hero">
        <div className="container mx-auto ">
          <div className="flex gap-8 items-center flex-col ">
            <h1 className="mb-2 md:mb-5 lg:text-5xl md:text-3xl text-xl font-bold text-center">
              MDST Sponsors
            </h1>
          </div>
        </div>
        <Wave></Wave>
      </div>
      <div className="bg-grey py-8">
        <div className=" container mx-auto px-7 text-lg">
          MDST sponsors directly support our data science education efforts and
          have direct access to our top data science talent. Reach out to{" "}
          <Link className="underline" href="mailto:mdst-coms@umich.edu">
            mdst-coms@umich.edu
          </Link>
          to learn more about ways to partner with us.
        </div>
      </div>
      {sponsors.map((group, index) =>
        group.sponsors.length > 0 ? (
          <SponsorSection key={index} group={group} />
        ) : null
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "config", "sponsors.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const sponsors = JSON.parse(fileContent);
  return { props: { sponsors } };
}
