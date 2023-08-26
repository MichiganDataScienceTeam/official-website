import loadStaticData from "@/shared/static";

import HeadContent from "@/components/headContent";
import Icon from "@/components/icon";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Links({ linksjson }) {
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();
  const basePath = router.basePath;
  return (
    <div>
      <HeadContent title={"Michigan Data Science Team - Links"} />
      <Image
        className="mx-auto"
        width={100}
        height={100}
        alt="MDST - Michigan Data Science Team Links Logo"
        src={
          basePath ? `${basePath}/images/favicon.png` : "/images/favicon.png"
        }
      />
      <h1 className=" lg:text-3xl text-2xl font-bold text-center">
        MDST - Michigan Data Science Team Links
      </h1>
      <div
        className={`fixed top-4 ${
          showToast ? "" : "-translate-y-40"
        } duration-75	transition-transform left-1/2 transform -translate-x-1/2 p-2 bg-green-600 rounded text-white `}
      >
        Copied!
      </div>

      <div className="py-8 px-2 flex flex-col justify-center items-center gap-4">
        {linksjson.map((link) => (
          <LinkElement
            key={link.name}
            link={link}
            toast={() => {
              setShowToast(true);
              setTimeout(() => {
                setShowToast(false);
              }, 2000);
            }}
          />
        ))}
      </div>
    </div>
  );
}

function LinkElement({ link, toast }) {
  return (
    <Link
      key={link.name}
      href={link.href}
      target="_blank"
      className={`p-4 ${
        link?.color === "primary" ? "bg-primary" : "bg-grey"
      } rounded-lg grid w-72 items-center gap-6 link hover:-translate-y-1 `}
    >
      <Icon name={link.icon_name} className="text-4xl" />
      <h2 className="font-bold text-lg">{link.name}</h2>
      <ShareButton link={link} toast={toast} />
    </Link>
  );
}

function ShareButton({ link, toast }) {
  const sharePage = (e) => {
    e.preventDefault();
    if (navigator.share) {
      navigator
        .share({
          title: "MDST " + link.name,
          url: link.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Web Share API not supported");
      navigator.clipboard.writeText(link.href);
      toast();
    }
  };
  return (
    <button onClick={sharePage}>
      <Icon name="copy" className="text-2xl self-end" />
    </button>
  );
}

export async function getStaticProps() {
  const linksjson = loadStaticData("links.json");
  return { props: { linksjson } };
}
