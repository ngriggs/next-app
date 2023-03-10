import React from "react";
import { admission } from "../config/site";

const pricing3 = () => {
  return (
    <div className="my-8 flex flex-col md:flex-row">
      <div className="my-auto p-2 sm:flex-1">
        <p className="p-2 uppercase text-giggles-yellow">admission</p>
        <h2 className="p-2 font-summerVibesSolid text-4xl font-normal sm:text-6xl">
          basic admission
        </h2>
        <p className="p-2 text-gray-600 sm:text-xl">
          Adult supervision is required at all times. Please read about our
          rules and policies.
        </p>
      </div>
      <div className="my-4" />
      <div className="my-auto mx-auto space-y-4 sm:flex-1">
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
      </div>
    </div>
  );
};

export default pricing3;
