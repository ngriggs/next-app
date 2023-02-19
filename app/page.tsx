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
        <h1 className="font-summerVibesSolid font-normal text-4xl sm:text-5xl">
          <span className="sm:mr-[300px]">get ready to play...</span>
        </h1>
        <br />
        <h1 className="font-summerVibesSolid font-normal text-4xl sm:text-5xl">
          <span className="text-[#f7ae47] sm:ml-[300px]">giggles</span> is on
          the way
        </h1>
      </div>
      <br />
      <div>
        <p className="mt-2 mx-auto px-4 text-center max-w-[50rem] sm:text-[1.2rem]">
          Attention North Shore families!
          <br />
          <br />
          We are very excited to share that our brand of playful learning is
          coming soon to Highwood, IL. Giggles Play is supportive and
          stimulating space, designed to ignite your child's imagination,
          inspire creativity, and foster a love of learning that lasts a
          lifetime.
          <br />
          <br />
          Our thoughtfully designed play areas and activities will provide
          endless opportunities for exploration and discovery for children ages
          0-6. We will offer open play sessions, classes, and private event
          rentals.
          <br />
          <br />
          We are looking forward to welcoming you and your littles ones to our
          cozy place! While you wait, we invite you to discover what makes
          Giggles such a special place by learning more about our mission and
          our story.
        </p>
      </div>
      <div className="my-4 sm:my-8" />
      <div className="bg-giggles-blue py-10 w-screen absolute left-0 clip5">
        <h1 className="font-summerVibesSolid font-normal text-4xl sm:text-5xl text-slate-50 text-center">
          stay connected
        </h1>
        <p className="text-slate-100 text-md px-5 mx-5 text-center sm:text-xl mt-1">
          sign-up for our email newsletters and be the first to know when we
          have news and updates
        </p>
      </div>
      <div className="my-40 sm:my-40" />
      {/* @ts-expect-error Server Component */}
      <Blog4 />
      <div className="sm:my-8" />
      {/* @ts-expect-error Server Component */}
      <Gallery2 />
    </div>
  );
}
