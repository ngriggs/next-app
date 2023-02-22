import Link from "next/link";
import { Button } from "./ui/button";

const hero1 = () => {
	return (
		<div className="bg-giggles-yellow-light max-w-7xl m-4 pt-1 rounded-3xl">
			<div className="text-center mt-10">
				<h1 className="font-summerVibesSolid font-normal text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
					<span className="sm:mr-[300px]">get ready to play...</span>
				</h1>
				<h1 className="font-summerVibesSolid font-normal text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-5xl sm:my-2">
					<span className="text-giggles-yellow sm:ml-[300px] outline-title min-[375px]:text-3xl sm:text-4xl lg:text-5xl ">
						giggles
					</span>{" "}
					is on the way
				</h1>
			</div>
			<div className="p-4 max-w-[50rem] mx-auto">
				<p className="text-md sm:text-[1.2rem] text-center font-medium">
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
			<div className="space-x-3 flex place-content-center mt-4 pb-8">
				<Link href="/giggles">
					<Button className="rounded-3xl bg-giggles-yellow text-white font-bold text-lg hover:scale-105 hover:bg-giggles-yellow">
						our mission
					</Button>
				</Link>
				<Link href="/team">
					<Button className="rounded-3xl bg-giggles-yellow text-white font-bold text-lg hover:scale-105 hover:bg-giggles-yellow">
						our story
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default hero1;
