import Layout from "@/components/layout";
import Wave from "@/components/wave";
import Wave180 from "@/components/wave180";
import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

export default function Join({ content }) {
  return (
    <Layout>
      <div className="text-center hero">
        <div className="container mx-auto ">
          <div className="flex gap-8 items-center flex-col ">
            <h1 className="mb-2 md:mb-5 lg:text-5xl md:text-3xl text-xl font-bold text-center">
              How to contact us
            </h1>
          </div>
        </div>
        <Wave></Wave>
      </div>
    </Layout>
  );
}
