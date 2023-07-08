import Link from "next/link";
import Image from "next/image";
export default function SponsorCard({ type, json }) {
  const style = "relative " + (type === "small" ? "h-28 w-28" : "h-48 w-48");
  return (
    <Link
      className="text-center rounded bg-grey w-full sm:w-fit py-4 px-8 hover:-translate-y-1"
      href={json.link}
    >
      <div className={style}>
        <Image
          className="mx-auto mb-4"
          fill
          src={`images/sponsors/${json.image}`}
          alt={json.name}
          style={{ objectFit: "contain" }}
        />
      </div>
    </Link>
  );
}
