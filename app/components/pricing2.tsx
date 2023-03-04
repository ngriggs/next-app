import { discounts } from "../config/site";
import { memberships } from "../config/site";
import { passes } from "../config/site";

import { Button } from "./ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { Icons } from "./icons";

const Pricing2 = () => {
  return (
    <Tabs defaultValue="memberships">
      <TabsList className="mx-auto my-2 flex w-[160px] flex-col justify-center space-x-2 px-2 sm:w-[325px] sm:flex-row">
        <TabsTrigger value="discounts">Discounts</TabsTrigger>
        <TabsTrigger value="memberships">Memberships</TabsTrigger>
        <TabsTrigger value="passes">Passes</TabsTrigger>
      </TabsList>
      <TabsContent value="discounts" className="max-w-[1150px]">
        <div className="-mx-6 grid grid-cols-fluid gap-6">
          {discounts.map((card, index) => (
            <div
              key={index}
              className="mx-auto grid h-fit max-w-[calc(1150px_/_3)] transform rounded-lg px-6 py-4 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
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
          ))}
        </div>
      </TabsContent>
      <TabsContent value="memberships" className="max-w-[1150px]">
        <div className="-mx-6 grid grid-cols-fluid gap-6">
          {memberships.map((card, index) => (
            <div
              key={index}
              className="mx-auto grid h-fit max-w-[calc(1150px_/_3)] transform rounded-lg px-6 py-4 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <p className="text-xs font-medium text-gray-400 dark:text-gray-100">
                {card.description}
              </p>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-100">
                {card.title}
              </p>
              <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">
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
          ))}
        </div>
      </TabsContent>
      <TabsContent value="passes">
        <div className="-mx-6 grid grid-cols-fluid gap-6">
          {passes.map((card, index) => (
            <div
              key={index}
              className={`${
                card.variant ? "bg-giggles-blue" : ""
              } mx-auto grid h-fit max-w-[calc(1150px_/_3)] transform rounded-lg px-6 py-4 transition-colors duration-200 hover:bg-giggles-blue-100 dark:hover:bg-gray-700`}
            >
              {card.variant ? (
                <div className="absolute right-4 top-4 rounded-xl bg-slate-400 px-2 py-1">
                  popular
                </div>
              ) : (
                <></>
              )}
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
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Pricing2;
