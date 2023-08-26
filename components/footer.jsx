import Link from "next/link";
import Icon from "./icon";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="p-4 flex items-center justify-center gap-2">
      <Logo size={36} />
      <Link href="https://github.com/MichiganDataScienceTeam">
        <Icon name="github" className="text-4xl" />
      </Link>
      <Link href="https://instagram.com/mdst_um">
        <Icon name="instagram" className="text-4xl" />
      </Link>
      <Link href="https://www.linkedin.com/school/michigan-data-science-team/">
        <Icon name="linkedin" className="text-4xl" />
      </Link>
    </footer>
  );
}
