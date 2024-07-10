import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Image from "next/image";
import HeadContent from "@/components/headContent";

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
      <div className="container mx-auto px-2">
        <Markdown className="markdown">{content}</Markdown>
        {images.map((img, idx) => (
          <Image key={idx} src={img} width={500} height={500} alt={title} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const [subdirectory, innerDir] = params.slug;
  const filePath = path.join(process.cwd(), 'public', 'projects', subdirectory, innerDir, 'writeup.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  const imagesDir = path.join(process.cwd(), 'public', 'projects', subdirectory, innerDir, 'images');
  const images = fs.existsSync(imagesDir) ? fs.readdirSync(imagesDir).map(img => path.join('/projects', subdirectory, innerDir, 'images', img)) : [];

  return {
    props: {
      content: fileContent,
      title: innerDir.split("_").join(" "),
      images,
    },
  };
}

export async function getStaticPaths() {
  const projectsDirectory = path.join(process.cwd(), "public", "projects");
  const subdirectories = fs.readdirSync(projectsDirectory, { withFileTypes: true }).filter(dirent => dirent.isDirectory());

  const paths = subdirectories.flatMap(subdirectory => {
    const innerDirectories = fs.readdirSync(path.join(projectsDirectory, subdirectory.name), { withFileTypes: true }).filter(dirent => dirent.isDirectory());
    return innerDirectories.map(innerDir => ({ params: { slug: [subdirectory.name, innerDir.name] } }));
  });

  return {
    paths,
    fallback: false,
  };
}

export default ProjectPage;
