import React from "react";
import Image from "next/image";

const feature1 = () => {
  return (
    <div className="relative left-[calc(-50vw_+_50%)] flex w-screen flex-col bg-giggles-yellow-100 md:flex-row">
      <div className="my-auto flex-1 p-4">
        <div className="grid place-content-center ">
          <p className="text-giggles-yellow">FEATURE</p>
          <h1 className="font-summerVibesSolid text-6xl">section header</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid grid-cols-12 grid-rows-2">
            <div className="col-span-2 h-12 w-12 place-self-center rounded-full bg-giggles-yellow-500 sm:h-20 sm:w-20"></div>
            <p className="col-span-10">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor...&quot;
            </p>
            <p className="col-start-3 col-end-12">Rey Mibourne</p>
          </div>
        </div>
      </div>
      <div className="my-10 ml-[10%] grid w-[90%] flex-1 place-content-center rounded-l-full bg-giggles-yellow-200 sm:w-[40%]">
        <Image
          src="/gigglesLogo.svg"
          alt=""
          width={414}
          height={414}
          className="p-10 sm:ml-10"
        />
      </div>
    </div>
  );
};

export default feature1;
