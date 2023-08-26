import HeadContent from "@/components/headContent";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import SponsorSection from "@/components/sponsorSection";
import loadStaticData from "@/shared/static";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Sponsors({ sponsors }) {
  const router = useRouter();
  const basePath = router.basePath;
  return (
    <Layout>
      <HeadContent
        title={"Michigan Data Science Team - Our Sponsors"}
        description={
          "The Michigan Data Science Team - MDST has collaborated with numerous esteemed sponsors to cultivate an enriching learning environment at the University of Michigan. Our club is dedicated to partnering with the finest sponsors to ensure an exceptional atmosphere for our members."
        }
      />

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
  const sponsors = loadStaticData("sponsors.json");
  return { props: { sponsors } };
}
