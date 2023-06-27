import Layout from "@/components/layout";
import Wave from "@/components/wave";
import Wave180 from "@/components/wave180";
import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";

export default function Join({ content }) {
  return (
    <Layout>
      <div className="text-center hero">
        <div className="container mx-auto ">
          <div className="flex gap-8 items-center flex-col ">
            <h1 className="mb-2 md:mb-5 lg:text-5xl md:text-3xl text-xl font-bold text-center">
              Join Us Now!
            </h1>
          </div>
        </div>
        <Wave></Wave>
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
  return { props: { content } };
}
