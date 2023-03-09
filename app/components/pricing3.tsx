import React from "react";
import { admission } from "../config/site";

const pricing3 = () => {
  return (
    <div className="flex h-[800px] flex-col md:flex-row">
      <div className="my-auto flex-1">
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
      </div>
      <div className="my-auto flex-1 space-y-4">
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
