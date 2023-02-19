import Carousel from "./components/carousel";
import HeroPage from "./components/hero";
import Gallery2 from "./gallery/page";
import OurStory from "./components/ourStory";
import Blog4 from "./components/blogSnippet2";
import Navbar from "./components/navbar";

export default async function HomePage() {
  return (
    <div className="max-w-7xl mx-auto text-[#232323]">
      <Carousel />
      <div className="sm:my-8" />
      <HeroPage />
      <div className="sm:my-8" />
      <div className="text-center">
        <h1 className="font-summerVibesSolid font-normal text-5xl">
          <span className="mr-[75px]">get ready to play...</span>
        </h1>
        <br />
        <h1 className="font-summerVibesSolid font-normal text-5xl">
          <span className="text-[#f7ae47] ml-[75px]">giggles</span> is on the
          way
        </h1>
        <br />
        <p className="mx-auto px-4 max-w-4xl text-[1.2rem]">
          Get ready, friends! We are over the moon to share that Giggles Play
          will be bringing our brand of playful learning to the North Shore of
          Chicago! We are a locally-owned indoor playspace and event venue.
        </p>
      </div>
      <OurStory />
      <div className="sm:my-8" />
      {/* @ts-expect-error Server Component */}
      <Blog4 />
      <div className="sm:my-8" />
      {/* @ts-expect-error Server Component */}
      <Gallery2 />
    </div>
  );
}
