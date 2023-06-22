import Layout from '@/components/layout';
import Wave from '@/components/wave';
import Wave180 from '@/components/wave180';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';

export default function Projects({ groupedLinks }) {
  return (
    <Layout>
      <div className="text-center hero">
        <div className="container mx-auto ">
          <div className="flex gap-8 items-center flex-col ">
            <h1 className="mb-2 md:mb-5 lg:text-5xl md:text-3xl text-xl font-bold text-center">
              Our Past Projects
            </h1>
          </div>
        </div>
        <Wave></Wave>
      </div>
      <div className="container mx-auto">
        {Object.entries(groupedLinks).map(([subdirectory, links]) => (
          <div
            key={subdirectory}
            className="rounded border-grey border-2 my-2"
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
  const projectsDirectory = path.join(
    process.cwd(),
    'public',
    'projects'
  );
  const subdirectories = fs
    .readdirSync(projectsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const groupedLinks = {};
  subdirectories.forEach((subdirectory) => {
    const subdirectoryPath = path.join(
      projectsDirectory,
      subdirectory
    );
    const files = fs.readdirSync(subdirectoryPath);

    const links = [];
    files.forEach((file) => {
      if (file.endsWith('.pdf') || file.endsWith('.md')) {
        const label = file
          .replace('.pdf', '')
          .replace('.md', '')
          .split('_')
          .join(' ');
        const href = `/projects/${subdirectory}/${file.replace(
          '.md',
          ''
        )}`;

        links.push({ label, href });
      }
    });
    groupedLinks[subdirectory.split('_').join(' ')] = links;
  });
  return {
    props: {
      groupedLinks,
    },
  };
}
