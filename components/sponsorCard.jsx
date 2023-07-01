import Link from "next/link";
import Image from "next/image";
export default function SponsorCard({ json }) {
  return (
    <Link
      className="text-center rounded bg-grey py-4 px-8 w-full sm:w-fit hover:-translate-y-1"
      href={json.link}
    >
      <Image
        className="mx-auto mb-4 w-36 h-36 rounded-full"
        width="500"
        height="500"
        src={`images/sponsors/${json.image}`}
        alt={json.name}
      />

      <h3 className="mb-1 text-2xl font-bold tracking-tight">{json.name}</h3>
    </Link>
  );
}
