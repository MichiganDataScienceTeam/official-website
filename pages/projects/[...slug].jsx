import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import Layout from "@/components/layout";
import Wave from "@/components/wave";
import Hero from "@/components/hero";
function ProjectPage({ content }) {
  const router = useRouter();
  const { slug } = router.query;
  const [subdirectory, ...rest] = slug;
  const fileName = rest.join("/");
  const isPdf = fileName.endsWith(".pdf");

  if (isPdf) {
    const pdfPath = `/projects/${subdirectory}/${fileName}`;
    window.location.href = pdfPath;
    return null;
  }
  return (
    <Layout>
      <Hero title={fileName.split("_").join(" ")} />
      <div className="container mx-auto px-2">
        <Markdown className="markdown">{content}</Markdown>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  // Extract the slug from params
  const [subdirectory, ...rest] = params.slug;
  const fileName = rest.join("/"); // Combine the remaining parts of the slug to form the file name

  // Fetch the necessary data for the project page using the subdirectory and fileName
  //   if (!fileName.endsWith('.md')) {
  //     return {
  //       props: {
  //         content: None,
  //       },
  //     };
  //   }
  const filePath = path.join(
    process.cwd(),
    "public",
    "projects",
    subdirectory,
    `${fileName}.md`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return {
    props: {
      content: fileContent,
    },
  };
}

export async function getStaticPaths() {
  // Generate paths for all the project pages
  const projectsDirectory = path.join(process.cwd(), "public", "projects");
  const subdirectories = fs
    .readdirSync(projectsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const paths = [];
  subdirectories.forEach((subdirectory) => {
    const subdirectoryPath = path.join(projectsDirectory, subdirectory);
    const files = fs.readdirSync(subdirectoryPath);

    files.forEach((file) => {
      const isMd = file.endsWith(".md");
      if (isMd) {
        const fileName = file.replace(".md", "");
        paths.push({ params: { slug: [subdirectory, fileName] } });
      }
    });
  });

  return {
    paths,
    fallback: false, // Set to true if you want to enable fallback behavior for undefined pages
  };
}

export default ProjectPage;
