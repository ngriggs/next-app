import Carousel from "./components/carousel";
import HeroPage from "./components/hero";
import Gallery2 from "./gallery/page";
import Carousel2 from "./components/carousel2";
export default async function HomePage() {
	return (
		<div className="max-w-7xl mx-auto">
			<Carousel />
			<div className="my-8" />
			<HeroPage />
			<div className="my-8" />
			<Carousel2 />
			<div className="my-8" />
			{/* @ts-expect-error Server Component */}
			<Gallery2 />
		</div>
	);
}
