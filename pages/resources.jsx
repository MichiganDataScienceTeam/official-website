import Hero from "@/components/hero";
import Layout from "@/components/layout";
import loadStaticData from "@/shared/static";
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
  const content = loadStaticData("resources.md");
  return { props: { content } };
}
