import Link from "next/link";

export default function Button({ text, link }) {
  return (
    <Link
      className="drop-shadow-lg rounded-xl text-lg p-4 hover:-translate-y-0.5 transition bg-translucent"
      href={link}
    >
      {text}
    </Link>
  );
}
