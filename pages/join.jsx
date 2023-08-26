import loadStaticData from "@/shared/static";

import HeadContent from "@/components/headContent";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Timeline from "@/components/timeline";
import Markdown from "markdown-to-jsx";

export default function Join({ join_info, faq, timeline }) {
  return (
    <Layout>
      <HeadContent
        title={"Michigan Data Science Team - Join Today"}
        description={
          "Are you curious about harnessing the power of data to drive insights and make informed decisions? Join our community of data enthusiasts and collaborate with like-minded students to tackle real-world challenges. Whether you're an experienced data scientist or just getting started with the fundamentals, MDST provides a supportive environment for learning, growing, and contributing to meaningful projects."
        }
      />

      <Hero title="Joining MDST" />
      <div className="container mx-auto mb-16 px-2">
        <div className="mb-8">
          <Markdown className="markdown font-light">{join_info}</Markdown>
        </div>
      </div>
      <div className="container mx-auto px-2 sm:px-7 pb-24 justify-center grid md:grid-flow-col grid-flow-row gap-8">
        <div>
          <div className="bg-grey p-4 sm:p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">{timeline.title}</h2>
            <Timeline events={timeline.events} />
          </div>
        </div>

        <div className="container mx-auto px-2">
          <Markdown className="markdown font-light">{faq}</Markdown>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const join_info = loadStaticData("join.md");
  const faq = loadStaticData("faq.md");
  const timeline = loadStaticData("timeline.json");

  return { props: { join_info, faq, timeline } };
}
