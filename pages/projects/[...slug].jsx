import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import Layout from "@/components/layout";
import Wave from "@/components/wave";
import Hero from "@/components/hero";
import Image from "next/image";
import HeadContent from "@/components/headContent";
function ProjectPage({ content, title, route }) {

  const router = useRouter();
  const basePath = router.basePath;

  const dir = basePath
    ? `${basePath}/${route}`
    : `/${route}`

  return (
    <Layout>
      <HeadContent title={title} description={title + "is a project done with The Michigan Data Science Team - MDST, the largest data science club at the University of Michigan."} />

      <Hero title={title} />
      <div className="container mx-auto px-2">
        <Markdown className="markdown" options={{
          overrides: {
            img: {
              component: renderImage,
              props: {
                dir: dir,
              },
            },
          },
        }}>{content}</Markdown> :
      </div>
    </Layout>
  );
}

const renderImage = (props) => {
  // Modify the 'src' attribute as needed
  const customSrc = props.dir + "/" + props.src;

  return <Image {...props} src={customSrc} width={500} height={500} />;
};

export async function getStaticProps({ params }) {
  const [subdirectory, innerDir] = params.slug;
  const filePath = path.join(
    process.cwd(),
    'public',
    'projects',
    subdirectory,
    innerDir,
    `writeup.md`
  );


  const fileContent = fs.readFileSync(filePath, 'utf-8');

  return {
    props: {
      content: fileContent,
      title: innerDir.split("_").join(" "),
      route: path.join('projects', subdirectory,
        innerDir),
      md: true,
    },
  };
}

export async function getStaticPaths() {
  const projectsDirectory = path.join(process.cwd(), "public", "projects");
  const subdirectories = fs
    .readdirSync(projectsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => ({
      name: dirent.name,
      createdAt: fs.statSync(path.join(projectsDirectory, dirent.name)).birthtime,
    }))
    .sort((a, b) => b.createdAt - a.createdAt)

  const paths = [];

  subdirectories.forEach((subdirectory) => {
    const subdirectoryPath = path.join(projectsDirectory, subdirectory.name);
    const innerDirectories = fs
      .readdirSync(subdirectoryPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    innerDirectories.forEach((innerDir) => {
      const innerDirPath = path.join(subdirectoryPath, innerDir);

      const writeupMdPath = path.join(innerDirPath, "writeup.md");

      if (fs.existsSync(writeupMdPath)) {
        paths.push({ params: { slug: [subdirectory.name, innerDir] } });
      }
    });
  });

  return {
    paths,
    // paths: [{ params: { slug: ["Winter_2023", "Wildfire_Spread_Prediction"] } }],
    fallback: false, // Set to false to return a 404 if the page doesn't exist
  };
}


export default ProjectPage;
