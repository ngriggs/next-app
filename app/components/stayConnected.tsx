"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRef } from "react";

const stayConnected = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const subscribeUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // this is where your mailchimp request is made

    const res = await fetch("/api/subscribeUser", {
      body: JSON.stringify({
        email: inputRef.current?.value || "",
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });
  };
  return (
    <div className="relative left-[calc(-50vw_+_50%)] grid w-screen">
      <div className="clip3 relative left-0 -mb-1 w-screen bg-giggles-blue py-10" />
      <div className="relative left-0 w-screen bg-giggles-blue py-10 text-center">
        <h1 className="font-summerVibesSolid text-4xl text-slate-50 sm:text-6xl">
          stay connected
        </h1>
        <p className="mx-5 mt-1 px-5 text-slate-100 sm:text-xl">
          sign-up for our email newsletters and be the first to know when we
          have news and updates
        </p>
        <form onSubmit={subscribeUser}>
          <div className="mx-auto mt-4 flex max-w-xs flex-row">
            {/* <Icons.email className="absolute fill-[#232323] w-[24px] h-[24px] my-auto" /> */}
            <Input
              type="email"
              placeholder="Email"
              className="rounded-l-full bg-white"
              required
            />
            <Button type="submit" className="rounded-r-full bg-giggles-navy">
              →
            </Button>
          </div>
        </form>
      </div>
      <div className="clip3 relative left-0 -mt-1 w-screen rotate-180 bg-giggles-blue py-10" />
      {/* to flip: transform -scale-x-100 */}
    </div>
  );
};

export default stayConnected;
