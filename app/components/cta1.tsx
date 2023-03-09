import React from "react";
import { Button } from "./ui/button";

const cta1 = () => {
  return (
    <div className="relative left-[calc(-50vw_+_50%)] flex h-[300px] w-screen flex-col bg-giggles-yellow-700 md:flex-row">
      <div className="grid flex-1 place-content-center">
        <p className="uppercase text-giggles-red">have a birthday coming up?</p>
        <h2 className="s font-summerVibesSolid text-4xl">
          let&apos;s plan it together!
        </h2>
      </div>
      <div className="grid flex-1 place-content-evenly">
        <Button variant={"giggles"}>BOOK NOW</Button>
      </div>
    </div>
  );
};

export default cta1;
