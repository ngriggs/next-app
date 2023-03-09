import React from "react";

const stats1 = () => {
  return (
    <div className="flex h-[300px] max-w-7xl flex-col md:flex-row">
      <div className="my-auto flex flex-1 flex-row">
        <div className="">
          <p className="text-6xl text-giggles-red">77</p>
        </div>
        <div className="flex flex-col">
          <p>giggles and counting</p>
          <p># of visits to our play space</p>
        </div>
      </div>
      <div className="my-auto flex flex-1 flex-row">
        <div className="">
          <p className="text-6xl text-giggles-blue">07</p>
        </div>
        <div className="flex flex-col">
          <p>celebrations and counting</p>
          <p># of gatherings hosted at giggles</p>
        </div>
      </div>
      <div className="my-auto flex flex-1 flex-row">
        <div className="">
          <p className="text-6xl text-giggles-green">14</p>
        </div>
        <div className="flex flex-col">
          <p>families and counting</p>
          <p># of families who&apos;ve joined the giggles community</p>
        </div>
      </div>
    </div>
  );
};

export default stats1;
