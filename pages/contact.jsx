import Layout from "@/components/layout";
import path from "path";
import Link from "next/link";
import fs from "fs";
import Icon from "@/components/icon";
import Hero from "@/components/hero";
import HeadContent from "@/components/headContent";

export default function Join({ data }) {
    return (
        <Layout>
            <HeadContent title={"Michigan Data Science Team - Contact Us"} description={"Interested in learning more about the Michigan Data Science Team - MDST, the premier data science team at the University of Michigan? Here are some helpful links that will allow you to get in touch with us. Whether you have questions, concerns, or are looking to collaborate with us, feel free to follow the links below."} />

            <Hero title="Contact Us" />
            <div className="container mx-auto flex flex-row flex-wrap sm:flex-row gap-4 justify-evenly px-2 mb-16 text-center">
                {
                    data.sources.map((source) => (
                        <div
                            key={source.name}
                            className="w-56"
                        >
                            <div className=" p-4 bg-grey rounded-lg w-fit mx-auto mb-2">
                                <Link href={source.link}>
                                    <Icon name={source.icon_name} className="text-4xl" />
                                </Link>
                            </div>

                            <h2 className="font-bold text-lg">{source.name}:</h2>
                            <Link href={source.link}
                                className="underline">{source.link_text}
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className="container mx-auto flex flex-col md:flex-row gap-4 justify-stretch px-2">
                {
                    data.entries.map((entry, index) => (
                        <div key={index} className="bg-grey p-4 rounded-lg w-full">
                            <h2 className="text-3xl font-bold mb-4">{entry.heading}</h2>
                            <p>{entry.text}</p>
                        </div>
                    ))
                }

            </div>

        </Layout>
    );
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "config", "contact.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent);
    return { props: { data } };
}
