import Carousel from "./components/carousel";
import Pricing from "./components/pricing";

export default function HomePage() {
	return (
		<div className="">
			<h1 className="text-3xl font-bold underline">Home Page</h1>
			<p>Some content</p>
			<Carousel />
			<Pricing />
		</div>
	);
}
