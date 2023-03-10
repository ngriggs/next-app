import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const feature2Data = [
  {
    icon: "/playIcon.svg",
    alt: "play icon",
    title: "Play",
    description: "Unleash your child's imagination",
    linkText: "Discover More",
    link: "",
  },
  {
    icon: "/learnIcon.svg",
    alt: "learn icon",
    title: "Learn",
    description: "Encourage curiosity and growth",
    linkText: "Discover More",
    link: "",
  },
  {
    icon: "/celebrateIcon.svg",
    alt: "celebrate icon",
    title: "Celebrate",
    description: "Connect with family and friends",
    linkText: "Discover More",
    link: "",
  },
];

const feature2 = () => {
  return (
    <div className="relative left-[calc(-50vw_+_50%)] flex w-screen flex-col bg-giggles-yellow-100">
      <div className="mx-auto p-2">
        <p className="p-2 uppercase text-giggles-yellow sm:text-center">
          ways to enjoy giggles
        </p>
        <h1 className="p-2 font-summerVibesSolid text-4xl sm:text-6xl">
          helping young minds grow and thrive
        </h1>
      </div>
      <div className="m-4 mx-auto flex max-w-7xl flex-col p-4 sm:flex-row">
        {feature2Data.map((feature) => (
          <div
            key={feature.title}
            className="m-4 mx-auto my-4 flex-1 space-y-4 p-4 sm:my-4"
          >
            <div className="mx-auto grid h-24 w-24 place-content-center rounded-full bg-white shadow-md sm:ml-0">
              <Image
                src={feature.icon}
                alt={feature.alt}
                height={50}
                width={50}
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold">{feature.title}</h4>
              <p className="text-lg">{feature.description}</p>
            </div>
            <div>
              <Link href={feature.link}>{feature.linkText}</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto my-4 flex">
        <Button
          variant={"giggles"}
          className="border-[1px] border-giggles-yellow bg-transparent text-giggles-yellow"
        >
          READ MORE
        </Button>
      </div>
    </div>
  );
};

export default feature2;
