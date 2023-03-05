import Carousel from "./components/carousel";
import HeroPage from "./components/hero";
import Gallery2 from "./gallery/page";
import Hero1 from "./components/hero1";
import StayConnected from "./components/stayConnected";
import Loading from "./loading";
import AdmissionCard from "./components/admissionCard";

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
    <div className="mx-auto max-w-7xl text-[#232323]">
      <div className="grid place-content-center lg:h-[500px] 2xl:h-[700px]">
        <Carousel images={images} />
      </div>
      <div className="sm:my-20" />
      {/* <HeroPage /> */}
      <div className="relative left-[calc(-50vw_+_50%)] grid w-screen">
        <AdmissionCard />
      </div>
      {/* Need something here to break up the space perhaps the team? Maybe we need something about the different party themes */}
      <Hero1 />
      <div className="my-[100px] sm:my-[100px]" />
      <StayConnected />
      <div className="sm:my-8" />
      {/* @ts-expect-error Server Component */}
      <Gallery2 slice={4} />
    </div>
  );
}
