import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SponsorSection from "@/components/sponsorSection";
import { useRouter } from "next/router";

export default function Sponsors({ sponsors }) {
  const router = useRouter();
  const basePath = router.basePath;
  return (
    <Layout>
      <Hero title="MDST Sponsors" />
      <div className="bg-grey py-8">
        <div className=" container mx-auto px-7 text-lg">
          MDST sponsors directly support our data science education efforts and
          have direct access to our top data science talent. Reach out to{" "}
          <Link className="underline" href="mailto:mdst-coms@umich.edu">
            mdst-coms@umich.edu
          </Link>{" "}
          to learn more about ways to partner with us.
        </div>
      </div>
      {sponsors.map((group, index) =>
        group.sponsors.length > 0 ? (
          <SponsorSection key={index} basePath={basePath} group={group} />
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
