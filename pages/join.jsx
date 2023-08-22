import Layout from "@/components/layout";
import Hero from "@/components/hero";
import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import Timeline from "@/components/timeline";
import Button from "@/components/button";
import HeadContent from "@/components/headContent";
export default function Join({ content, timeline }) {
  return (
    <Layout>
      <HeadContent title={"Michigan Data Science Team - Join Today"} description={"Are you curious about harnessing the power of data to drive insights and make informed decisions? Join our community of data enthusiasts and collaborate with like-minded students to tackle real-world challenges. Whether you're an experienced data scientist or just getting started with the fundamentals, MDST provides a supportive environment for learning, growing, and contributing to meaningful projects."} />

      <Hero title="Joining MDST" />
      <div className="container mx-auto mb-16 px-2 flex justify-center">
        <Button href="https://forms.gle/B5TyHZHL44BcoKNX6" text="Interest Form" />
      </div>
      <div className="container mx-auto px-2 sm:px-7 pb-24 justify-center grid md:grid-flow-col grid-flow-row gap-8">
        <div>
          <div className="bg-grey p-4 sm:p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">{timeline.title}</h2>
            <Timeline events={timeline.events} />
          </div>
        </div>

        <div className="container mx-auto px-2">
          <Markdown className="markdown font-light">{content}</Markdown>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "config", "join.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const content = fileContent;

  const timelineFilePath = path.join(process.cwd(), "config", "timeline.json");
  const timelineFileContent = fs.readFileSync(timelineFilePath, "utf-8");
  const timeline = JSON.parse(timelineFileContent);

  return { props: { content, timeline } };
}
