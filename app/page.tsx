import Carousel from "./components/carousel";
import HeroPage from "./components/hero";
import Gallery2 from "./gallery/page";
import { Button } from "./components/ui/button";
import Link from "next/link";

// test changes

export default async function HomePage() {
  const images = [
    {
      id: 1,
      url: "moodboard.min.svg",
      title: "Education re-invented",
      description:
        "Teaching kids how to think for themselves and solve meaningful problems",
    },
    {
      id: 2,
      url: "card2.min.svg",
      title: "Education re-invented",
      description:
        "Teaching kids how to think for themselves and solve meaningful problems",
    },
    {
      id: 3,
      url: "card3.min.svg",
      title: "Education re-invented",
      description:
        "Teaching kids how to think for themselves and solve meaningful problems",
    },
    {
      id: 4,
      url: "card4.min.svg",
      title: "Education re-invented",
      description:
        "Teaching kids how to think for themselves and solve meaningful problems",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:h-[500px] place-content-center">
        <Carousel images={images} />
      </div>
      <div className="sm:my-8" />
      <HeroPage />
      <div className="bg-giggles-yellow-light max-w-7xl m-4 pt-1 rounded-3xl">
        <div className="text-center mt-10">
          <h1 className="font-summerVibesSolid font-normal text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
            <span className="sm:mr-[300px]">get ready to play...</span>
          </h1>
          <h1 className="font-summerVibesSolid font-normal text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-5xl sm:my-2">
            <span className="text-giggles-yellow sm:ml-[300px] outline-title min-[375px]:text-3xl sm:text-4xl lg:text-5xl ">
              giggles
            </span>{" "}
            is on the way
          </h1>
        </div>
        <div className="p-4 max-w-[50rem] mx-auto">
          <p className="text-md sm:text-[1.2rem] text-center font-medium">
            We are very excited to share that our brand of playful learning is
            coming soon to Highwood, IL. Giggles Play is supportive and
            stimulating space, designed to ignite your child's imagination,
            inspire creativity, and foster a love of learning that lasts a
            lifetime.
            <br />
            <br />
            Our thoughtfully designed play areas and activities will provide
            endless opportunities for exploration and discovery for children
            ages 0-6. We will offer open play sessions, classes, and private
            event rentals.
            <br />
            <br />
            We are looking forward to welcoming you and your littles ones to our
            cozy place! While you wait, we invite you to discover what makes
            Giggles such a special place by learning more about our mission and
            our story.
          </p>
        </div>
        <div className="space-x-3 flex place-content-center mt-4">
          <Link href="/giggles">
            <Button className="rounded-3xl bg-giggles-yellow text-white font-bold text-lg hover:scale-105 hover:bg-giggles-yellow">
              our mission
            </Button>
          </Link>
          <Link href="/team">
            <Button className="rounded-3xl bg-giggles-yellow text-white font-bold text-lg hover:scale-105 hover:bg-giggles-yellow">
              our story
            </Button>
          </Link>
        </div>
      </div>
      <div className="my-[100px] sm:my-[100px]" />
      <div className="relative grid w-screen left-[calc(-50vw_+_50%)]">
        <div className="bg-giggles-blue py-10 -mb-1 relative w-screen left-0 clip3" />
        <div className="bg-giggles-blue py-10 w-screen relative left-0">
          <h1 className="font-summerVibesSolid font-normal text-4xl sm:text-5xl text-slate-50 text-center">
            stay connected
          </h1>
          <p className="text-slate-100 text-md px-5 mx-5 text-center sm:text-xl mt-1">
            sign-up for our email newsletters and be the first to know when we
            have news and updates
          </p>
        </div>
        <div className="bg-giggles-blue py-10 -mt-1 relative w-screen left-0 clip3 rotate-180" />
        {/* to flip: transform -scale-x-100 */}
      </div>

      <div className="sm:my-8" />
      {/* @ts-expect-error Server Component */}
      <Gallery2 />
    </div>
  );
}
