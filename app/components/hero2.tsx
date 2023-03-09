import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const hero2 = () => {
  return (
    <div className="relative left-[calc(-50vw_+_50%)] flex w-screen flex-col bg-giggles-yellow-100 sm:flex-row">
      <div className="my-auto flex-1 flex-col justify-start">
        <div className="grid place-content-center ">
          <p className="text-giggles-yellow">GIGGLES PLAY</p>
          <h1 className="tes font-summerVibesSolid text-5xl sm:text-7xl">
            where growth <br /> and giggles <br /> go hand in hand
          </h1>
          <Button
            variant={"giggles"}
            className="mt-4 w-[170px] bg-giggles-yellow"
          >
            CALL TO ACTION
          </Button>
        </div>
      </div>
      <div className="mt-[33px] mr-[36px] flex flex-1 justify-end">
        <Image
          src="/heroImage.svg"
          alt={"Hero image"}
          width={767}
          height={767}
        />
      </div>
    </div>
  );
};

export default hero2;
