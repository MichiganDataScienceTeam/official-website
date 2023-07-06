import Layout from "@/components/layout";
import Wave from "@/components/wave";
import path from "path";
import Link from "next/link";
import fs from "fs";
import { useState } from "react";

function Accordion({ entries }) {
  const [entryStates, setEntryStates] = useState(
    entries.map((entry, index) => {
      return {
        key: index,
        heading: entry.heading,
        text: entry.text,
        expand: index == 0,
      };
    })
  );

  const expandAccordionEntry = (index) => {
    setEntryStates(
      entryStates.map((entry, currIndex) => {
        return {
          ...entry,
          expand: currIndex === index,
        };
      })
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4 rounded-lg bg-grey">
      {entryStates.map((entry, index) => (
        <div key={entry.index} className="py-4 px-4">
          <div className="flex justify-between mb-4">
            <h1 className="text-4xl font-bold">{entry.heading}</h1>
            <button onClick={() => expandAccordionEntry(index)}>
              &#xf117;
            </button>
          </div>
          {entry.expand ? <div>{entry.text}</div> : null}
        </div>
      ))}
    </div>
  );
}

export default function Join({ entries }) {
  return (
    <Layout>
      <div className="text-center hero">
        <div className="container mx-auto ">
          <div className="flex gap-8 items-center flex-col ">
            <h1 className="mb-2 md:mb-5 lg:text-5xl md:text-3xl text-xl font-bold text-center">
              Contact Us
            </h1>
          </div>
        </div>
        <Wave></Wave>
      </div>
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
