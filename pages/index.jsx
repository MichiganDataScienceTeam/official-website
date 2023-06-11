import Layout from '@/components/layout';
import Wave from '@/components/wave';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';

export default function Home({ content }) {
  return (
    <Layout>
      <div className='text-center hero'>
        <div className="container mx-auto ">
          <div className='flex gap-8 items-center'>
            <div className='w-1/2'>
            <h1 className='mb-5 text-5xl font-bold'>U of M&apos;s Premier Data Science Club</h1>
          <p className='mb-10 text-2xl'>
          We empower the next generation of data scientists at the University of Michigan through education and exploration.
          </p>
            </div>
            <Image className='w-1/2' width='500' height='500' src="/images/Dataframe_Graphic.svg" alt="Image of a dataframe" />
          </div>
          
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
        </div>
        
        <Wave></Wave>
      </div>
    <div className="container mx-auto">
    <div className="flex items-center text-center gap-8">
      <div className='w-1/3'>
      <p>Join our community of data science
enthusiasts with</p>
      <p className='text-3xl'>200+ Members</p>
      <p> across 10+ different majors in 8
different U of M Schools </p>
      </div>
      <div className='w-1/3'>
      <p>Build your data science expertise 
by working on one of our</p>
      <p className='text-3xl'>8-10 Projects</p>
      <p>
 each semester in domains like 
finance, sports, computer vision, and more</p>
      </div><div className='w-1/3'>
      <p>Invest in your future career through</p>
      <p className='text-3xl'>Tons of Events</p>
      <p>in career development, interview prep,
education, and networking. </p>
      </div>
</div>
    </div>
      
      {/* <div className='dark:bg-blue-800 p-4'>
        <Markdown className='markdown'>{content}</Markdown>
      </div> */}
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'markdown', 'homepage.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const content = fileContent;
  return { props: { content } };
}
