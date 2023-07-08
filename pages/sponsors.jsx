import Layout from "@/components/layout";
import Wave from "@/components/wave";
import Wave180 from "@/components/wave180";
import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import fs from "fs";
import path from "path";
import SponsorSection from "@/components/sponsorSection";
import { useRouter } from "next/router";

export default function Sponsors({ sponsors }) {
  const router = useRouter();
  const basePath = router.basePath;
  return (
    <Layout>
      <div className="text-center hero">
        <div className="container mx-auto ">
          <div className="flex gap-8 items-center flex-col ">
            <h1 className="mb-2 md:mb-5 lg:text-5xl md:text-3xl text-xl font-bold text-center">
              Our Wonderful Sponsors
            </h1>
          </div>
        </div>
        <Wave></Wave>
      </div>
      {sponsors.map((tier, index) => (
        <SponsorSection key={index} basePath={basePath} group={tier} />
      ))}
      <div className="bg-grey py-8">
        <div className=" container mx-auto px-2">
          <p>
            As the leading practical data science and machine learning club at
            the University of Michigan, partnering with MDST can give you or
            your company access to a large group of Michigan&apos;s most skilled
            and motivated students in this field.
          </p>
          <p>
            For more information about how MDST can help you contact:{" "}
            <Link className="underline" href="email:mdst-coms@umich.edu">
              mdst-coms@umich.edu
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "config", "sponsors.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const sponsors = JSON.parse(fileContent);
  return { props: { sponsors } };
}
