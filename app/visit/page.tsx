import Head from "next/head";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { admission } from "../config/site";
import AdmissionCard from "../components/admissionCard";

const Visit = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <Head>
        <title key="title">Visit Us</title>
      </Head>
      <h1 className="mb-5 text-2xl font-bold text-[#232323]">Visit Us</h1>
      {/* Admission Hours */}
      <h2 className="mb-5 text-xl font-bold">Admission Hours</h2>
      <p className="mb-5 text-[#232323]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
        vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
        odio consectetur eu.
      </p>
      {/* Frequently Asked Questions */}
      <h2 className="mb-5 text-xl font-bold">Frequently Asked Questions</h2>
      <p className="mb-5 text-[#232323]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
        vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
        odio consectetur eu.
      </p>
      {/* Call to Action */}
      <h2 className="mb-5 text-xl font-bold">Sign a Waiver</h2>
      <p className="mb-5 text-[#232323]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
        vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
        odio consectetur eu.
      </p>
      <Link href="/waiver">
        <Button variant={"giggles"}>Sign Waiver</Button>
      </Link>{" "}
      <div className="left-[calc(-50vw_+_50%)] grid w-screen">
        {" "}
        <AdmissionCard />
      </div>
    </div>
  );
};

export default Visit;
