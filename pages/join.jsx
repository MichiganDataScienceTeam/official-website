import Layout from "@/components/layout";
import Hero from "@/components/hero";
import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import Timeline from "@/components/timeline";
export default function Join({ content, timeline }) {
  return (
    <Layout>
      <Hero title="Join Us Now!" />
      <div className="container mx-auto px-7 pb-16 flex justify-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            {timeline.title}
          </h2>
          <Timeline events={timeline.events} />
        </div>

      </div>
      <div className="container mx-auto px-2">
        <Markdown className="markdown">{content}</Markdown>
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
