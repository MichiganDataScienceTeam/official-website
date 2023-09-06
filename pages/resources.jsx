import HeadContent from "@/components/headContent";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import loadStaticData from "@/shared/static";
import Markdown from "markdown-to-jsx";

export default function Resources({ content }) {
  return (
    <Layout>
      <HeadContent
        title={"Michigan Data Science Team - Resources"}
        description={
          "Here are some helpful rescources that the michigan data science team has put together to help you!"
        }
      />
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
