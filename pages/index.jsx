import Layout from '@/components/layout';
import Wave from '@/components/wave';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import Markdown from 'markdown-to-jsx';

export default function Home({ content }) {
  return (
    <Layout>
      <div className='text-center'>
        <h1 className='mb-5 text-7xl'>Michigan Data Science Team</h1>
        <p className='mb-10 text-2xl'>
          The premier AI club at The University of Michigan
        </p>
        <div className='flex justify-center gap-5'>
          <Link
            className='border-2 rounded-full p-4 hover:-translate-y-1'
            href=''
          >
            Join Us
          </Link>
          <Link
            className='border-2 rounded-full p-4 hover:-translate-y-1'
            href=''
          >
            Work With Us
          </Link>
        </div>
        <Wave></Wave>
      </div>
      <div className='dark:bg-blue-800 p-4'>
        <Markdown className='markdown'>{content}</Markdown>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'markdown', 'homepage.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const content = fileContent;
  return { props: { content } };
}
