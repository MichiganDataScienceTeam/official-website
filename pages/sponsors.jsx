import Layout from '@/components/layout';
import Wave from '@/components/wave';
import Wave180 from '@/components/wave180';
import Link from 'next/link';
import Image from 'next/image';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import fs from 'fs';
import path from 'path';

export default function Sponsors({ sponsors }) {
  return (
    <Layout>
      <div className="text-center hero">
        <div className="container mx-auto ">
          <div className="flex gap-8 items-center flex-col ">
            <h1 className="mb-2 md:mb-5 lg:text-5xl md:text-3xl text-xl font-bold text-center">
              Our Wonderful Sponsors
            </h1>
          </div>
        </div>
        <Wave></Wave>
      </div>
      {sponsors.map((tier, index) => (
        <GroupSection key={index} group={tier} />
      ))}
      <div className="bg-grey py-8">
        <div className=" container mx-auto px-2">
          <p>
            As the leading practical data science and machine learning
            club at the University of Michigan, partnering with MDST
            can give you or your company access to a large group of
            Michigan&apos;s most skilled and motivated students in
            this field.
          </p>
          <p>
            For more information about how MDST can help you contact:{' '}
            <Link
              className="underline"
              href="email:mdst-coms@umich.edu"
            >
              mdst-coms@umich.edu
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

function GroupSection({ group }) {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm">
        <h2 className="text-3xl mb-4">{group.tier}</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {group.sponsors.map((sponsor, index) => (
          <SponsorCard key={index} json={sponsor} />
        ))}
      </div>
    </div>
  );
}

function SponsorCard({ json }) {
  return (
    <div className="text-center rounded bg-grey py-4 px-8 w-full sm:w-fit">
      <Link href={json.link}>
        <Image
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          width="500"
          height="500"
          src={`images/sponsors/${json.image}`}
          alt={json.name}
        />

        <h3 className="mb-1 text-2xl font-bold tracking-tight">
          {json.name}
        </h3>
      </Link>
    </div>
  );
}
export async function getStaticProps() {
  const filePath = path.join(
    process.cwd(),
    'config',
    'sponsors.json'
  );
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const sponsors = JSON.parse(fileContent);
  return { props: { sponsors } };
}
