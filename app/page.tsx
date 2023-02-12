import Carousel from "./components/carousel";
import HeroPage from "./components/hero";
import Gallery2 from "./gallery/page";
import OurStory from "./components/ourStory";
import Blog3 from "./components/blogSnippet1";
import Blog4 from "./components/blogSnippet2";

export default async function HomePage() {
	return (
		<div className="max-w-7xl mx-auto text-[#232323]">
			<Carousel />
			<div className="sm:my-8" />
			<HeroPage />
			<div className="sm:my-8" />
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
