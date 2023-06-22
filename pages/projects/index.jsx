import Layout from '@/components/layout';
import Wave from '@/components/wave';
import Wave180 from '@/components/wave180';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';

export default function Projects({ pdfFiles, markdownFiles }) {
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
      {/* <div className='dark:bg-blue-800 p-4'>
        <Markdown className='markdown'>{content}</Markdown>
      </div> */}
      <div>
        <div>
          {pdfFiles.map((link, index) => (
            <Link href={link.href} key={index}>
              {link.label}
            </Link>
          ))}
          {markdownFiles.map((link, index) => (
            <Link href={link.href} key={index}>
              {link.label}
            </Link>
          ))}
        </div>
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
  const files = fs.readdirSync(projectsDirectory);

  const pdfFiles = files
    .filter((file) => file.endsWith('.pdf'))
    .map((pdfFile) => ({
      href: `/projects/${pdfFile}`,
      label: pdfFile,
    }));

  const markdownFiles = files
    .filter((file) => file.endsWith('.md'))
    .map((mdFile) => ({
      href: `/projects/${mdFile.replace('.md', '')}`,
      label: mdFile.replace('.md', ''),
    }));

  return {
    props: {
      pdfFiles,
      markdownFiles,
    },
  };
}
