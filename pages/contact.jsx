import Layout from "@/components/layout";
import Wave from "@/components/wave";
import Wave180 from "@/components/wave180";
import Link from "next/link";
import Image from "next/image";
import { IoLogoSlack, IoLogoLinkedin } from "react-icons/io";

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
      <div className="max-w-lg mx-auto p-4 rounded-lg bg-grey">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">For Students</h3>
          <p className="text-gray-700">
            Email:{" "}
            <Link className="underline" href="mailto:students@example.com">
              students@example.com
            </Link>
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">For Sponsors</h3>
          <p className="">
            Email:{" "}
            <Link className="underline" href="mailto:sponsors@example.com">
              sponsors@example.com
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
