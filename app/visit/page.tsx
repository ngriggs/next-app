import Head from "next/head";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import { Icons } from "../components/icons";

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
      <br />
      <div className="w-screen bg-[#FEF7EC] py-10">
        <p className="text-center">
          <span className="font-summerVibesSolid text-5xl font-normal">
            basic admission
          </span>
          <br />
          <span className="text-gray-600">
            Adult supervision is required at all times. Please read about our
            rules and policies.
          </span>
        </p>
        <div className="m-4 mx-auto flex h-16 w-10/12 max-w-3xl grid-cols-3 rounded-full bg-white shadow-md">
          <div className="h-16 w-16 rounded-full bg-giggles-blue">
            <Icons.infantIcon className="mx-auto my-auto mt-2.5 h-10 w-10 fill-white object-[24px]" />
          </div>
          <div className="mt-2 leading-3">
            <p>
              <span className="ml-2 mt-1 text-lg font-bold">Infant</span> <br />
              <span className="ml-2 text-slate-500">6 months and younger</span>
            </p>
          </div>
          <div className="mx-auto my-auto h-12 w-16 justify-end rounded-3xl bg-giggles-blue pt-2 text-center text-xl text-white">
            free
          </div>
          <br />
        </div>
        <div className="m-4 mx-auto flex w-10/12 max-w-3xl grid-cols-3 rounded-full bg-white shadow-md sm:h-16">
          <div className="h-16 w-16 rounded-full bg-giggles-blue">
            <Icons.infantIcon className="mx-auto my-auto mt-2.5 h-10 w-10 fill-white object-[24px]" />
          </div>
          <div className="mt-2 leading-3">
            <p>
              <span className="ml-2 mt-1 text-lg font-bold">Child</span> <br />
              <span className="ml-2 text-slate-500">6 months and older</span>
            </p>
          </div>
        </div>
        <div className="m-4 mx-auto flex h-16 w-10/12 max-w-3xl grid-cols-3 rounded-full bg-white shadow-md">
          <div className="h-16 w-16 rounded-full bg-giggles-blue">
            <Icons.infantIcon className="mx-auto my-auto mt-2.5 h-10 w-10 fill-white object-[24px]" />
          </div>
          <div className="mt-2 leading-3">
            <p>
              <span className="ml-2 mt-1 text-lg font-bold">Sibling</span>{" "}
              <br />
              <span className="ml-2 text-slate-500">
                rate applies after one paid child
              </span>
            </p>
          </div>
        </div>
        <div className="m-4 mx-auto flex h-16 w-10/12 max-w-3xl grid-cols-3 rounded-full bg-white shadow-md">
          <div className="h-16 w-16 rounded-full bg-giggles-blue">
            <Icons.infantIcon className="mx-auto my-auto mt-2.5 h-10 w-10 fill-white object-[24px]" />
          </div>
          <div className="mt-2 leading-3">
            <p>
              {" "}
              <span className="ml-2 mt-1 text-lg font-bold">
                Adult without a paid child
              </span>{" "}
              <br />
              <span className="ml-2 text-slate-500">age 13 and older</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visit;
