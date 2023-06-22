import fs from 'fs';
import path from 'path';
import Markdown from 'markdown-to-jsx';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const projectsDirectory = path.join(
    process.cwd(),
    'public',
    'projects'
  );
  const filenames = fs.readdirSync(projectsDirectory);

  const paths = filenames
    .filter((filename) => !filename.endsWith('.pdf'))
    .map((filename) => ({
      params: { title: filename.replace('.md', '') },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { title } = params;

  const filePath = path.join(
    process.cwd(),
    'public',
    'projects',
    `${title}.md`
  );
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  return {
    props: {
      content: fileContent,
    },
  };
}

function ProjectPage({ content }) {
  const router = useRouter();
  const { title } = router.query;

  const isPdf = title.endsWith('.pdf');

  if (isPdf) {
    const pdfPath = `/projects/${title}`;
    window.location.href = pdfPath;
    return null;
  }
  return <Markdown className="markdown">{content}</Markdown>;
}

export default ProjectPage;
