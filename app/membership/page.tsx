"use client";
import { Button } from "../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { Carousel } from "@mantine/carousel";
import Pricing2 from "../components/pricing2";
import { Icons } from "../components/icons";
import { discounts } from "../config/site";

const Membership = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1 className="mb-5 text-2xl font-bold">Membership</h1>
      <div className="w-full">
        <Pricing2 />
      </div>

      {/* Call to Action */}
      <h2 className="mb-5 text-xl font-bold">Sign Up for Membership</h2>
      <Button variant={"giggles"} size={"lg"} className="rounded-full" disabled>
        Sign Up
      </Button>
      <Carousel
        height={600}
        loop
        align="start"
        className="mt-10 w-11/12"
        withIndicators={true}
        withControls={true}
      >
        {discounts.map((card, index) => (
          <Carousel.Slide key={index} className="">
            <div className="mx-auto grid h-fit max-w-[calc(1150px_/_3)] transform rounded-lg px-6 py-4 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700">
              <p className="text-xs font-medium text-gray-400 dark:text-gray-100">
                {card.description}
              </p>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
                {card.title}
              </p>
              <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">
                <span className="text-gray-400 line-through">
                  {card.crossedOut}
                </span>
                {card.price}{" "}
                <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                  / {card.per}
                </span>
              </h4>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                For most businesses that want to optimaize web queries.
              </p>
              <div className="mt-8 space-y-2">
                {card.features.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Icons.customCheck2 />

                    <span className="mx-4 text-gray-700 dark:text-gray-300">
                      {item.feature}
                      <br />
                      <span className="text-gray-400">{item.caveat}</span>
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant={"giggles"}
                size={"lg"}
                className="mt-10 w-full transform rounded-md px-4 py-2 font-medium capitalize tracking-wide"
              >
                Choose plan
              </Button>
            </div>
          </Carousel.Slide>
        ))}
        {/* ...other slides */}
      </Carousel>
    </div>
  );
};

export default Membership;
