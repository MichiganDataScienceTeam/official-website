import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Image from "next/image";
import HeadContent from "@/components/headContent";

// Function to get all projects from JSON files that have writeups
const getAllProjects = () => {
  try {
    const pastProjectsData = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'config', 'pastProjects.json'), 'utf-8'));
    const currentProjects = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'config', 'currentProjects.json'), 'utf-8'));

    // pastProjects is an object with semester keys, flatten it
    const pastProjects = Object.values(pastProjectsData).flat();

    // Only return projects that have subdirectory and innerDir (i.e., have writeups)
    const allProjects = [...pastProjects, ...currentProjects];
    return allProjects.filter(proj => proj.subdirectory && proj.innerDir);
  } catch (error) {
    console.error("Error reading or parsing JSON files:", error);
    return [];
  }
};

function ProjectPage({ content, title, images }) {
  const router = useRouter();
  const basePath = router.basePath;

  return (
    <Layout>
      <HeadContent
        title={title}
        description={`${title} is a project done with The Michigan Data Science Team - MDST, the largest data science club at the University of Michigan.`}
      />
      <Hero title={title} />
      <div className="py-16 lg:py-24 px-4 lg:px-6 max-w-screen-xl mx-auto">
        <Markdown className="markdown">{content}</Markdown>
        <div className="mt-6 lg:mt-8 flex flex-wrap gap-6 lg:gap-8">
          {images.map((img, idx) => (
            <Image key={idx} src={img} width={500} height={500} alt={title} className="rounded-lg" />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const allProjects = getAllProjects();
  const [subdirectory, innerDir] = params.slug;
  const project = allProjects.find(proj => proj.subdirectory === subdirectory && proj.innerDir === innerDir);

  if (!project) {
    return { notFound: true };
  }

  const filePath = path.join(process.cwd(), 'content', 'projects', subdirectory, innerDir, 'writeup.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const imagesDir = path.join(process.cwd(), 'public', 'images', 'projects', subdirectory, innerDir);
  const images = fs.existsSync(imagesDir) ? fs.readdirSync(imagesDir).map(img => path.join('/images/projects', subdirectory, innerDir, img)) : [];

  return {
    props: {
      content: fileContent,
      title: innerDir.split("_").join(" "),
      images,
    },
  };
}

export async function getStaticPaths() {
  const allProjects = getAllProjects();

  const paths = allProjects.map(project => ({
    params: {
      slug: [project.subdirectory, project.innerDir],
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default ProjectPage;
