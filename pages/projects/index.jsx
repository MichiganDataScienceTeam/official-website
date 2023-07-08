import Layout from "@/components/layout";
import Link from "next/link";
import fs from "fs";
import path from "path";
import Hero from "@/components/hero";

export default function Projects({ groupedLinks }) {
  return (
    <Layout>
      <Hero title={"Our Past Projects"} />
      <div className="container mx-auto max-w-2xl">
        {Object.entries(groupedLinks).map(([subdirectory, links]) => (
          <div
            key={subdirectory}
            className="rounded-lg border-grey border-2 my-2"
          >
            <h2 className="p-4 bg-grey">{subdirectory}</h2>
            <ul className="p-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Link className="underline" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const projectsDirectory = path.join(process.cwd(), "public", "projects");
  const subdirectories = fs
    .readdirSync(projectsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const groupedLinks = {};
  subdirectories.forEach((subdirectory) => {
    const subdirectoryPath = path.join(projectsDirectory, subdirectory);
    const files = fs.readdirSync(subdirectoryPath);

    const links = [];
    files.forEach((file) => {
      if (file.endsWith(".pdf") || file.endsWith(".md")) {
        const label = file
          .replace(".pdf", "")
          .replace(".md", "")
          .split("_")
          .join(" ");
        const href = `/projects/${subdirectory}/${file.replace(".md", "")}`;

        links.push({ label, href });
      }
    });
    groupedLinks[subdirectory.split("_").join(" ")] = links;
  });
  return {
    props: {
      groupedLinks,
    },
  };
}
