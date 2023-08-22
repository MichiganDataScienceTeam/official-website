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
                  {
                    link.type != "none" ? <Link target="_blank" className="underline" href={link.href}>
                      {link.label}
                    </Link> : link.label
                  }

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
    .map((dirent) => ({
      name: dirent.name,
    }))
    .sort((a, b) => {
      const order = ['Fall_', 'Winter_'];

      const getOrderIndex = (dirName) => {
        const prefix = order.find(prefix => dirName.startsWith(prefix));
        return prefix ? 0 : 1;
      };

      const orderComparison = getOrderIndex(a.name) - getOrderIndex(b.name);

      if (orderComparison !== 0) {
        return orderComparison;
      } else if (getOrderIndex(a.name) === 0) {
        const aNumber = parseInt(a.name.split('_')[1]);
        const bNumber = parseInt(b.name.split('_')[1]);
        return bNumber - aNumber;
      } else {
        return a.name.localeCompare(b.name)
      }

    });;

  const groupedLinks = {};
  const paths = []
  subdirectories.forEach((subdirectory) => {
    const subdirectoryPath = path.join(projectsDirectory, subdirectory.name);
    const innerDirectories = fs
      .readdirSync(subdirectoryPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    const links = [];

    innerDirectories.forEach((innerDir) => {
      const innerDirPath = path.join(subdirectoryPath, innerDir);

      const writeupMdPath = path.join(innerDirPath, "writeup.md");
      const writeupPdfPath = path.join(innerDirPath, "writeup.pdf");
      const linkTxtPath = path.join(innerDirPath, "link.txt");

      const label = innerDir.split("_")
        .join(" ");
      let type, href

      if (fs.existsSync(linkTxtPath)) {
        const link = fs.readFileSync(linkTxtPath, 'utf-8').trim();
        href = link
        type = "link"
      } else if (fs.existsSync(writeupMdPath)) {
        href = `/projects/${subdirectory.name}/${innerDir}`
        type = "md"
      }
      else if (fs.existsSync(writeupPdfPath)) {
        href = `/projects/${subdirectory.name}/${innerDir}/writeup.pdf`
        type = "pdf"
      } else {
        href = ""
        type = "none"
      }
      links.push({ label, href, type })

    });

    if (links.length > 0) {
      groupedLinks[subdirectory.name.split("_").join(" ")] = links;
    }

  });

  return {
    props: {
      groupedLinks,
    },
  };
}

