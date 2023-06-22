import Link from 'next/link';
import Image from 'next/image';
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io';

export default function Footer() {
  return (
    <footer className="p-4 flex items-center justify-center gap-2">
      <Link href="/">Logo</Link>

      <Link href="https://github.com/MichiganDataScienceTeam">
        <IoLogoGithub className="text-4xl" />
      </Link>
      <Link href="https://instagram.com/your-instagram">
        <IoLogoInstagram className="text-4xl" />
      </Link>
      <Link href="https://linkedin.com/your-linkedin">
        <IoLogoLinkedin className="text-4xl" />
      </Link>
    </footer>
  );
}
