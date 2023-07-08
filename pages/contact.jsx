import Layout from "@/components/layout";
import Wave from "@/components/wave";
import path from "path";
import Link from "next/link";
import fs from "fs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Hero from "@/components/hero";
function Accordion({ entries }) {
  const [entryStates, setEntryStates] = useState(
    entries.map((entry, index) => {
      return {
        key: index,
        heading: entry.heading,
        text: entry.text,
        expand: index == 0,
        sources: entry.sources,
      };
    })
  );

  const expandAccordionEntry = (index) => {
    setEntryStates(
      entryStates.map((entry, currIndex) => {
        return {
          ...entry,
          expand: entry.expand ? !entry.expand : currIndex === index,
        };
      })
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-8 py-2 rounded-lg bg-grey">
      {entryStates.map((entry, index) => (
        <div key={entry.index} className="transition">
          <div className={`pt-5 ${!entry.expand ? "pb-5" : "pb-2"}`}>
            <div className="flex justify-between">
              <h1 className="text-4xl font-bold">{entry.heading}</h1>
              <button onClick={() => expandAccordionEntry(index)}>
                <FontAwesomeIcon
                  icon={entry.expand ? "fa-caret-up" : "fa-caret-down"}
                  size="xl"
                />
              </button>
            </div>
            {entry.expand ? (
              <div className="mt-4">
                {entry.text}
                <div className="flex justify-center">
                  {entry.sources.map((source, index) => (
                    <Link
                      key={index}
                      href={source.link}
                      className="text-center p-4 m-2 bg-grey-light w-40 rounded-lg"
                    >
                      <FontAwesomeIcon icon={source.icon_name} size="2xl" />
                      <p className="font-bold text-lg">{source.name}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          {index !== entryStates.length - 1 ? <hr></hr> : null}
        </div>
      ))}
    </div>
  );
}

export default function Join({ entries }) {
  return (
    <Layout>
      <Hero title="Contact Us" />
      <Accordion entries={entries} />
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "config", "contact.json");
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const entries = JSON.parse(fileContent);
  return { props: { entries } };
}
