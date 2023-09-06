import Link from "next/link";
import Icon from "./icon";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="p-4 flex items-center justify-center gap-2">
      <Logo size={36} />
      <Link href="https://github.com/MichiganDataScienceTeam" aria-label="MDST GitHub">
        <Icon name="github" className="text-4xl" />
      </Link>
      <Link href="https://instagram.com/mdst_um" aria-label="MDST Instagram">
        <Icon name="instagram" className="text-4xl" />
      </Link>
      <Link href="https://www.linkedin.com/school/michigan-data-science-team/" aria-label="MDST Linkedin">
        <Icon name="linkedin" className="text-4xl" />
      </Link>
    </footer>
  );
}
