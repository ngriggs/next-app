import Carousel from "./components/carousel";
import HeroPage from "./components/hero";
import Gallery2 from "./gallery/page";
import Blog4 from "./components/blogSnippet2";
import { Button } from "./components/ui/button";

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
		<div className="max-w-7xl mx-auto">
			<Carousel images={images} />
			<div className="sm:my-8" />
			<HeroPage />
			<div className=" bg-giggles-yellow rounded-lg sm:max-w-5xl mx-auto py-5">
				<div className="sm:my-8" />
				<div className="text-center">
					<h1 className="font-summerVibesSolid font-normal text-4xl sm:text-5xl text-white">
						<span className="sm:mr-[300px]">get ready to play...</span>
					</h1>
					<br />
					<h1 className="font-summerVibesSolid font-normal text-4xl sm:text-5xl text-white">
						<span className="sm:ml-[300px]">giggles</span> is on the way
					</h1>
				</div>
				<br />
				<div>
					<p className="mt-2 mx-auto px-4 text-center max-w-[50rem] sm:text-[1.2rem] text-medium text-white">
						We are very excited to share that our brand of playful learning is
						coming soon to Highwood, IL. Giggles Play is supportive and
						stimulating space, designed to ignite your child's imagination,
						inspire creativity, and foster a love of learning that lasts a
						lifetime.
						<br />
						<br />
						Our thoughtfully designed play areas and activities will provide
						endless opportunities for exploration and discovery for children
						ages 0-6. We will offer open play sessions, classes, and private
						event rentals.
						<br />
						<br />
						We are looking forward to welcoming you and your littles ones to our
						cozy place! While you wait, we invite you to discover what makes
						Giggles such a special place by learning more about our mission and
						our story.
					</p>
				</div>
				<div className="space-x-3 flex place-content-center py-8">
					<Button className="rounded-3xl bg-white text-giggles-yellow font-bold text-lg">
						our mission
					</Button>
					<Button className="rounded-3xl bg-white text-giggles-yellow font-bold text-lg">
						our story
					</Button>
				</div>
			</div>
			<div className="my-[100px] sm:my-[100px]" />
			<div className="relative grid w-screen left-[calc(-50vw_+_50%)]">
				<div className="bg-giggles-blue py-10 -mb-1 relative w-screen left-0 clip3" />
				<div className="bg-giggles-blue py-10 w-screen relative left-0">
					<h1 className="font-summerVibesSolid font-normal text-4xl sm:text-5xl text-slate-50 text-center">
						stay connected
					</h1>
					<p className="text-slate-100 text-md px-5 mx-5 text-center sm:text-xl mt-1">
						sign-up for our email newsletters and be the first to know when we
						have news and updates
					</p>
				</div>
				<div className="bg-giggles-blue py-10 -mt-1 relative w-screen left-0 clip3 rotate-180" />
				{/* to flip: transform -scale-x-100 */}
			</div>
			<div className="my-[400px] sm:my-[400px]" />

			{/* @ts-expect-error Server Component */}
			<Blog4 />
			<div className="sm:my-8" />
			{/* @ts-expect-error Server Component */}
			<Gallery2 />
		</div>
	);
}
