import Carousel from "./components/carousel";
import Pricing from "./components/pricing";

export default function HomePage() {
	return (
		<div className="max-w-7xl mx-auto">
			<Carousel />
			<Pricing />
		</div>
	);
}
