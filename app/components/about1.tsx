import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const about1 = () => {
  return (
    <div className="relative left-[calc(-50vw_+_50%)] flex w-screen flex-col sm:flex-row">
      <div className="my-10 grid w-[90%] flex-1 place-content-center rounded-r-full bg-giggles-yellow-100 sm:w-[40%]">
        <Image
          src="/gigglesLogo.svg"
          alt=""
          width={414}
          height={414}
          className="p-10"
        />
      </div>
      <div className="my-auto flex-1 p-4">
        <div className="grid place-content-center ">
          <p className="p-2 text-giggles-yellow">ABOUT</p>
          <h1 className="p-2 font-summerVibesSolid text-4xl sm:text-6xl">
            hi, we&apos;re giggles.
          </h1>
          <p className="p-2 text-xl">
            An indoor play space and gathering place coming soon to Highwood,
            IL.
          </p>
          <Button
            variant={"giggles"}
            className="mt-4 w-[170px] border-[1px] border-solid border-giggles-yellow bg-white text-giggles-yellow"
          >
            OUR MISSION
          </Button>
        </div>
      </div>
    </div>
  );
};

export default about1;
