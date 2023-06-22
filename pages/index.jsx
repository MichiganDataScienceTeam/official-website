import Layout from '@/components/layout';
import Wave from '@/components/wave';
import Wave180 from '@/components/wave180';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import Markdown from 'markdown-to-jsx';
import Image from 'next/image';

export default function Home({ content }) {
  return (
    <Layout>
      <div className="text-center hero">
        <div className="container mx-auto ">
          <div className="flex gap-8 items-center md:flex-row flex-col-reverse ">
            <div className="md:w-1/2 w-full">
              <h1 className="mb-2 md:mb-5 lg:text-5xl md:text-3xl text-xl font-bold">
                U of M&apos;s Premier Data Science Club
              </h1>
              <p className="mb-10 lg:text-2xl md:text-xl text-lg">
                We empower the next generation of data scientists at
                the University of Michigan through education and
                exploration.
              </p>
            </div>
            <Image
              className="md:w-1/2 w-full"
              width="500"
              height="500"
              src="/images/Dataframe_Graphic.svg"
              alt="Image of a dataframe"
            />
          </div>

          <div className="flex justify-center gap-5">
            <Link
              className="border-2 rounded-full p-3 hover:-translate-y-1"
              href=""
            >
              Join Us
            </Link>
            <Link
              className="border-2 rounded-full p-3 hover:-translate-y-1"
              href=""
            >
              Work With Us
            </Link>
          </div>
        </div>

        <Wave></Wave>
      </div>
      <div className="container mx-auto">
        <div className="grid bullets  items-center text-center gap-x-8 gap-y-2 grid-flow-col">
          <p className="self-end">
            Join our community of data science enthusiasts with
          </p>
          <p className="text-3xl">200+ Members</p>
          <p className="self-start">
            across 10+ different majors in 8 different U of M Schools
          </p>

          <p className="self-end">
            Build your data science expertise by working on one of our
          </p>
          <p className="text-3xl">8-10 Projects</p>
          <p className="self-start">
            each semester in domains like finance, sports, computer
            vision, and more
          </p>
          <p className="self-end mt-4 sm:mt-0">
            Invest in your future career through
          </p>
          <p className="text-3xl">Tons of Events</p>
          <p className="self-start">
            in career development, interview prep, education, and
            networking.
          </p>
        </div>
      </div>
      <div className="bg-grey">
        <Wave180 className="rotate-180"></Wave180>
        <div className="container mx-auto py-4">
          <h2 className="text-3xl text-center bold">
            Recent Projects
          </h2>
          <div className="flex gap-4 flex-col sm:flex-row p-4">
            <div className="project-card w-full">
              <Image
                className="w-full"
                width="500"
                height="500"
                src="/images/temp.png"
                alt="temp"
              />
              <h3 className="text-lg">Image Colorization</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aliquam
              </p>
            </div>
            <div className="project-card w-full">
              <Image
                className="w-full"
                width="500"
                height="500"
                src="/images/temp.png"
                alt="temp"
              />
              <h3 className="text-lg">Movie Quotes</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aliquam pariatur reiciendis
              </p>
            </div>
            <div className="project-card w-full">
              <Image
                className="w-full"
                width="500"
                height="500"
                src="/images/temp.png"
                alt="temp"
              />
              <h3 className="text-lg">Wild fires</h3>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
        </div>
        <Wave></Wave>
      </div>
      <div className="container mx-auto pb-8">
        <h2 className="text-3xl text-center">
          Interested? <br />
          All UM Ann Arbor students can join for free!
        </h2>
        <div className="flex mt-4 justify-center">
          <Link
            className="border-2 rounded-full p-3 hover:-translate-y-1"
            href=""
          >
            Join Us
          </Link>
        </div>
      </div>
      <div className="bg-grey py-8">
        <div className="container mx-auto">
          <h2 className="text-center text-xl">
            MDST is made possible by our sponsors
          </h2>
          <div className="flex mt-4 justify-center">
            <Image
              className=""
              width="200"
              height="200"
              src="/images/esg.png"
              alt="temp"
            />
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
  const filePath = path.join(
    process.cwd(),
    'markdown',
    'homepage.md'
  );
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const content = fileContent;
  return { props: { content } };
}
