import Link from "next/link";
import Image from "next/image";
import Icon from "./icon";

export default function Footer() {
  return (
    <footer className="p-4 flex items-center justify-center gap-2">
      <Link href="/">Logo</Link>

      <Link href="https://github.com/MichiganDataScienceTeam">
        <Icon name="github" className="text-4xl" />
      </Link>
      <Link href="https://instagram.com/your-instagram">
        <Icon name="instagram" className="text-4xl" />
      </Link>
      <Link href="https://linkedin.com/your-linkedin">
        <Icon name="linkedin" className="text-4xl" />
      </Link>
    </footer>
  );
}
