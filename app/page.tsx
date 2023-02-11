import Carousel from "./components/carousel";
import HeroPage from "./components/hero";
import Gallery2 from "./gallery/page";
import OurStory from "./components/ourStory";
import Blog3 from "./components/blogSnippet1";

export default async function HomePage() {
	return (
		<div className="max-w-7xl mx-auto">
			<Carousel />
			<div className="my-8" />
			<HeroPage />
			<div className="my-8" />
			{/* @ts-expect-error Server Component */}
			<Gallery2 />
			<div className="my-8" />
			<OurStory />
			<div className="my-8" />
			{/* @ts-expect-error Server Component */}
			<Blog3 />
		</div>
	);
}
