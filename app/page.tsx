import Button from "./components/button";
import Carousel from "./components/carousel";
import HeroPage from "./components/hero";
import Pricing from "./components/pricing";
import Gallery2 from "./gallery/page";

export default async function HomePage() {
	return (
		<div className="max-w-7xl mx-auto">
			<Carousel />
			<div className="my-8" />
			<Pricing />
			<div className="my-8" />
			<div className="flex justify-center">
				<a
					href="https://squareup.com/appointments/book/89lmsk6jh008w1/LPJGJT0WFHK20/start"
					target="_blank"
				>
					<Button label="Book Now" />
				</a>
			</div>

			<div className="my-8" />
			{/* @ts-expect-error Server Component */}
			<Gallery2 />
		</div>
	);
}
