import HeadContent from "@/components/headContent";
import Hero from "@/components/hero";
import Icon from "@/components/icon";
import Layout from "@/components/layout";
import loadStaticData from "@/shared/static";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Team({ teamjson }) {
  const router = useRouter();
  const basePath = router.basePath;
  return (
    <Layout>
      <HeadContent
        title={"Michigan Data Science Team - Poject Leads"}
        description={
          "At the heart of The Michigan Data Science Team - MDST and our accomplishments is our exceptional team members and leaders, who bring their expertise and dedication to the forefront. United by a passion for data science, our diverse community collaborates under visionary guidance, propelling innovative ideas into impactful projects that push the boundaries of exploration."
        }
      />

      <Hero title="Our Project Leads" />
      {teamjson.map((group, index) => (
        <GroupSection key={group.groupName} basePath={basePath} group={group} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const teamjson = loadStaticData("projectleads.json");
  return { props: { teamjson } };
}

function GroupSection({ group, basePath }) {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 className="text-3xl mb-4">{group.groupName}</h2>
        <p className="font-light sm:text-xl">{group.description}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {group.members.map((memberinfo, index) => (
          <MemberCard key={index} basePath={basePath} json={memberinfo} />
        ))}
      </div>
    </div>
  );
}

function MemberCard({ json, basePath }) {
  return (
    <div className="text-left sm:text-center rounded bg-grey py-2 sm:py-4 px-2 sm:px-8 w-full sm:w-60 flex sm:block gap-8">
      <Image
        className="sm:mx-auto sm:mb-4 sm:w-44 sm:h-44 w-24 h-24 my-auto rounded-full object-cover"
        width="176"
        height="176"
        src={
          basePath
            ? `${basePath}/images/projectleads/${json.image}`
            : `/images/projectleads/${json.image}`
        }
        alt={json.image.split(".")[0].split("_").join(" ")}
      />
      <div className="">
        <h3 className="mb-1 text-2xl font-bold tracking-tight">{json.name}</h3>
        <p>{json.title}</p>
        <ul className="flex sm:justify-center mt-2 sm:mt-4 space-x-4">
          {json.linkedin ? (
            <li>
              <Link href={json.linkedin} className="hover:text-gray" aria-label="Linkedin">
                <Icon name="linkedin" className="text-3xl" />
              </Link>
            </li>
          ) : null}
          {json.github ? (
            <li>
              <Link href={json.github} className="hover:text-gray" aria-label="GitHub">
                <Icon name="github" className="text-3xl" />
              </Link>
            </li>
          ) : null}
        </ul>
      </div>

    </div>
  );
}
