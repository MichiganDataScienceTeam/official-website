import HeadContent from "@/components/headContent";
import Hero from "@/components/hero";
import Icon from "@/components/icon";
import Layout from "@/components/layout";
import loadStaticData from "@/shared/static";
import Link from "next/link";

export default function Contact({ data }) {
  return (
    <Layout>
      <HeadContent
        title={"Michigan Data Science Team - Contact Us"}
        description={
          "Interested in learning more about the Michigan Data Science Team - MDST, the premier data science team at the University of Michigan? Here are some helpful links that will allow you to get in touch with us. Whether you have questions, concerns, or are looking to collaborate with us, feel free to follow the links below."
        }
      />

      <Hero title="Contact Us" />
      <section className="py-16 lg:py-24 px-4 lg:px-6 max-w-screen-xl mx-auto">
        <div className="flex flex-row flex-wrap sm:flex-row gap-6 lg:gap-8 justify-evenly text-center mb-16">
          {data.sources.map((source) => (
            <Link href={source.link} key={source.name} className="w-56 transition hover:scale-105">
              <div className="p-4 bg-grey rounded-lg w-fit mx-auto mb-2">
                <Icon name={source.icon_name} aria-label={source.name} className="text-4xl" />
              </div>

              <h2 className="font-bold text-lg">{source.name}:</h2>
              <p className="underline">{source.link_text}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 justify-stretch">
          {data.entries.map((entry, index) => (
            <div key={index} className="bg-grey p-4 rounded-lg w-full">
              <h2 className="text-3xl font-bold mb-4">{entry.heading}</h2>
              <p>{entry.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = loadStaticData("contact.json");
  return { props: { data } };
}
