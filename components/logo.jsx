// Using a separate file so base64 encoding isn't annoying

import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = 40 }) {
  return (
    <Link href="/">
      <Image
        height={size}
        width={size}
        src="data:image/png;base64,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"
        alt="MDST Logo"
      />
    </Link>
  );
}
