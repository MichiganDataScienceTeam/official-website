import Link from "next/link";
import Icon from "./icon";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="p-4 flex items-center justify-center gap-2">
      <Logo size={36} />
      <div className="pr-7 leading-tight font-semibold text-sm">
        Michigan Data <br />
        Science Team
      </div>
      <Link href="https://github.com/MichiganDataScienceTeam">
        <Icon name="github" className="text-4xl" />
      </Link>
      <Link href="https://instagram.com/michigandatascienceteam">
        <Icon name="instagram" className="text-4xl" />
      </Link>
      <Link href="https://linkedin.com/your-linkedin">
        <Icon name="linkedin" className="text-4xl" />
      </Link>
    </footer>
  );
}
