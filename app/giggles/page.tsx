"use client";
import Image from "next/image";
import { Icons } from "@/app/components/icons";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Giggles Play",
  description: "Welcome to Giggles",
};

export default function Giggles() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newsletterSignup, setNewsletterSignup] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Submit form data to server
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("message:", message);
    console.log("newsletterSignup", newsletterSignup);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 pb-4">
      <Image
        src="gigglesAboutImg.svg"
        alt="giggles about image"
        width={1000}
        height={1000}
        className="rounded-b-lg top-[-16px] w-full"
      />
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="place-items-center">
            <>
              <Image
                // src="https://cdn.discordapp.com/attachments/739252351793234040/1074161499125338172/sun.png"
                src="aboutGiggles.svg"
                className="rounded-full object-scale-down max-w-[300px] sm:max-w-[400px] mx-auto"
                alt="giggles play logo"
                width={1000}
                height={1000}
              />
            </>
          </div>
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6 self-center">
              <h1 className="mb-2 font-summerVibesSolid font-normal text-4xl tracking-tight text-center sm:text-5xl sm:leading-none">
                our <span className="text-giggles-yellow">mission</span>
              </h1>
              <p className="text-base text-md font-medium text-center max-w-sm sm:text-lg">
                At Giggles Play, we believe that play and learning go
                hand-in-hand. Our mission is to provide a welcoming and
                nurturing environment where families can form meaningful
                connections through play.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="max-w-xl mb-6 self-center order-last lg:-order-1">
            <h1 className="mb-2 font-summerVibesSolid font-normal text-4xl text-center sm:text-5xl sm:leading-none">
              our <span className="text-giggles-blue">space</span>
            </h1>
            <p className="text-base text-md font-medium text-center sm:text-lg max-w-sm">
              We offer a clean and inviting facility with thoughtfully designed
              play areas, activities, and classes that foster independence,
              creativity, and confidence in children.
            </p>
          </div>
          <div className="flex flex-row">
            <Image
              // src="https://cdn.discordapp.com/attachments/739252351793234040/1074157667251138620/loft-website.png"
              src="ourPlayfulSpace.svg"
              className="rounded-full max-w-[300px] sm:max-w-[420px] mx-auto"
              alt="natural pod playloft"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="place-items-center">
            <Image
              // src="https://cdn.discordapp.com/attachments/739252351793234040/1074161499125338172/sun.png"
              src="buildingRelationships.svg"
              className="rounded-full object-scale-down max-w-[300px] sm:max-w-[400px] mx-auto"
              alt="giggles play logo"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6 self-center">
              <h1 className="mb-2 font-summerVibesSolid font-normal text-4xl tracking-tight text-center sm:text-5xl sm:leading-none">
                our <span className="text-giggles-green">vision</span>
              </h1>
              <p className="text-base mx-auto text-md font-medium text-center max-w-sm sm:text-lg">
                Our vision is to be a hub where families can build authentic
                relationships and create lifelong memories. Join us in our
                mission and let's play and learn together!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 ">
        <div className="flex relative flex-col w-full p-4 ">
          <div className="h-1/2 max-w-lg mx-auto lg:ml-10">
            <h2 className="font-summerVibesSolid font-normal text-3xl mb-2 text-center">
              lets get in touch
            </h2>
            <p className="mb-4 text-center">
              Looking to get in touch with us? We'd love to hear from you! Here
              are a few ways to reach out:
            </p>
            <div className="flex">
              <Icons.mapPin className="flex-none mx-4 w-[24px] h-[24px] my-auto" />{" "}
              <p className="mb-4">
                <Link
                  className="no-underline hover:underline"
                  href="https://www.google.com/maps/place/328+Green+Bay+Rd,+Highwood,+IL+60040/@42.2028132,-87.8108253,17z/data=!4m6!3m5!1s0x880fc1cc2a1fa805:0x1e906b9d8036e4b7!8m2!3d42.2028132!4d-87.8108253!16s%2Fg%2F11bw40qd9r"
                >
                  328 Green Bay Road, Highwood, IL
                </Link>{" "}
              </p>
            </div>
            <div className="flex">
              <Icons.email className="flex-none mx-4 my-auto fill-black w-[24px] h-[24px]" />
              <p className="mb-4">info@gigglesplay.com</p>
            </div>
          </div>
          <div className="h-1/2 ">
            {/* Embed Google map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.543972530705!2d-87.81301398426875!3d42.20281715300928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc1cc2a1fa805%3A0x1e906b9d8036e4b7!2s328%20Green%20Bay%20Rd%2C%20Highwood%2C%20IL%2060040!5e0!3m2!1sen!2sus!4v1674282554891!5m2!1sen!2sus"
              title="map"
              width="100%"
              height="450"
              className="rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="relative lg:absolute sm:flex sm:flex-col mt-4 md:mt-0 lg:top-9 lg:right-9 w-[100%] sm:w-[30%] mb-10 mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-10 rounded-lg shadow-xl "
            >
              <h2 className="font-summerVibesSolid font-normal text-3xl mb-2">
                contact us
              </h2>
              <p></p>
              {/* Full Name */}
              <label htmlFor="fullName" className="block font-bold mb-2">
                full name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="border rounded-md border-gray-400 p-2 w-full mb-5"
              />

              {/* Email */}
              <label htmlFor="email" className="block font-bold mb-2">
                email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-md border-gray-400 p-2 w-full mb-5"
                required
              />

              {/* Signature */}
              <label htmlFor="signature" className="block font-bold mb-2">
                message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-400 p-2 w-full mb-5 h-[8rem]"
                placeholder="Type your message here."
                required
              />

              {/* Submit Button */}
              <div className="flex justify-center">
                {" "}
                <Button type="submit" className="min-w-[6rem]">
                  Send
                </Button>
              </div>
              <div className="items-top mt-4 flex space-x-2">
                <Checkbox
                  id="newsletterSignup"
                  checked={newsletterSignup}
                  onCheckedChange={(_) => {
                    setNewsletterSignup(!newsletterSignup);
                  }}
                  value={newsletterSignup.toString()}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Sign up for our newsletter
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
