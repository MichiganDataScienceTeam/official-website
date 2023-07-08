import Layout from "@/components/layout";
import Hero from "@/components/hero";
import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";

export default function Resources({ content }) {
  return (
    <Layout>
      <Hero title="Some Helpful Resources" />
      <div className="container mx-auto px-2">
        <Markdown className="markdown">{content}</Markdown>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "config", "resources.md");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const content = fileContent;
  return { props: { content } };
}
