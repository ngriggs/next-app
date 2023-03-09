import Carousel from "./components/carousel";
import HeroPage from "./components/hero";
import Gallery2 from "./gallery/page";
import Hero1 from "./components/hero1";
import StayConnected from "./components/stayConnected";
import Loading from "./loading";
import AdmissionCard from "./components/admissionCard";
import Hero2 from "./components/hero2";
import About1 from "./components/about1";
import Stats1 from "./components/stats1";
import Classes from "./components/classes";
import Feature1 from "./components/feature1";
import Feature2 from "./components/feature2";
import CTA1 from "./components/cta1";
import Gallery3 from "./components/gallery3";
import Team from "./components/team";
import Testimonials from "./components/testimonials";
import Pricing3 from "./components/pricing3";

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
		<div className="mx-auto max-w-7xl text-[#333333]">
			<Hero2 />
			<About1 />
			<Stats1 />
			{/* <Classes /> */}
			<Feature1 />
			<Feature2 />
			<CTA1 />
			<Gallery3 />
			<Team />
			<Testimonials />
			<Pricing3 />
			{/* <div className="grid place-content-center lg:h-[500px] 2xl:h-[700px]">
				<Carousel images={images} />
			</div> */}
			<div className="sm:my-20" />
			{/* <HeroPage /> */}
			{/* <div className="relative left-[calc(-50vw_+_50%)] grid w-screen">
				<AdmissionCard />
			</div> */}
			{/* Need something here to break up the space perhaps the team? Maybe we need something about the different party themes */}
			{/* <Hero1 /> */}
			<StayConnected />
			<div className="sm:my-8" />
			{/* @ts-expect-error Server Component */}
			<Gallery2 slice={4} />
		</div>
	);
}
