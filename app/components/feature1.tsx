import React from "react";
import Image from "next/image";

const feature1 = () => {
  return (
    <div className="relative left-[calc(-50vw_+_50%)] flex h-[800px] w-screen flex-col bg-giggles-yellow-100 md:flex-row">
      <div className="my-auto flex-1">
        <div className="grid place-content-center ">
          <p className="text-giggles-yellow">FEATURE</p>
          <h1 className="font-summerVibesSolid text-6xl">section header</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex ">
            <div className="h-20 w-20 rounded-full bg-giggles-yellow-500"></div>
            <div>
              <p>
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor...&quot;
              </p>
              <p className="">Rey Mibourne</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-[100px] grid w-[40%] place-content-center rounded-l-full bg-giggles-yellow-200">
        <Image
          src="/gigglesLogo.svg"
          alt=""
          width={414}
          height={414}
          className="ml-10"
        />
      </div>
    </div>
  );
};

export default feature1;
