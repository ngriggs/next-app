import Head from "next/head";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import { Icons } from "../components/icons";

const admission = [
  {
    bgColor: "bg-giggles-blue",
    title: "Infant*",
    description: "6 months and younger",
    price: "free",
    image: (
      <Icons.infantIcon className=" h-[45px] w-[45px] fill-giggles-blue" />
    ),
  },
  {
    bgColor: "bg-giggles-yellow",
    title: "Child",
    description: "6 months and older",
    price: "$18",
    image: (
      <Icons.childIcon className="h-[45px] w-[45px] -scale-x-100 fill-giggles-yellow" />
    ),
  },
  {
    bgColor: "bg-giggles-green",
    title: "Sibling",
    description: "rate applies after one paid child",
    price: "$12",
    image: (
      <Icons.siblingIcon className="h-[50px] w-[50px] fill-giggles-green" />
    ),
  },
  {
    bgColor: "bg-giggles-red",
    title: "Adult without paid child",
    description: "13 and older",
    price: "$10",
    image: <Icons.adultIcon className="h-[45px] w-[45px] fill-giggles-red" />,
  },
];

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
      <div>
        <div className="left-[calc(50vw_+_50%)] my-10 w-screen space-y-4 bg-[#FEF7EC] py-10 px-4">
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
          {admission.map((category, index) => (
            <div
              key={index}
              className=" mx-4 flex max-w-3xl rounded-full bg-white shadow-md sm:mx-auto sm:w-10/12"
            >
              <div className="my-auto ">
                <div
                  className={`grid h-16 w-16 flex-1 place-content-center rounded-full`}
                >
                  {category.image}
                </div>
              </div>
              <div className="my-auto flex-1">
                <p className="ml-2 mt-1 text-lg font-bold leading-none">
                  {category.title}
                </p>
                <p className="ml-2 leading-none text-slate-500">
                  {category.description}
                </p>
              </div>
              <div className="flex justify-end">
                <div
                  className={`m-2 my-auto grid h-[48px] w-[64px] place-content-center rounded-full ${category.bgColor} text-white`}
                >
                  <p className="text-xl">{category.price}</p>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="flex"></div>

				<div className="flex"></div>

				<div className="flex"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Visit;
