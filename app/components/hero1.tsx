import Link from "next/link";
import { Button } from "./ui/button";

const hero1 = () => {
	return (
		<div className="relative left-[calc(-50vw_+_50%)] w-screen bg-giggles-yellow-light py-4">
			<div className="mt-10 text-center">
				<h1 className="font-summerVibesSolid text-2xl font-normal min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
					<span className="sm:mr-[300px]">get ready to play...</span>
				</h1>
				<h1 className="font-summerVibesSolid text-2xl font-normal min-[375px]:text-3xl sm:my-2 sm:text-4xl lg:text-5xl">
					<span className="outline-title text-giggles-yellow min-[375px]:text-3xl sm:ml-[300px] sm:text-4xl lg:text-5xl ">
						giggles
					</span>{" "}
					is on the way
				</h1>
			</div>
			<div className="mx-auto max-w-[50rem] p-4">
				<p className="text-center font-medium sm:text-[1.2rem]">
					We are very excited to share that our brand of playful learning is
					coming soon to Highwood, IL. Giggles Play is supportive and
					stimulating space, designed to ignite your child&apos;s imagination,
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
			<div className="mt-4 flex place-content-center space-x-3 pb-8">
				<Link href="/giggles">
					<Button variant={"giggles"} className="bg-giggles-yellow text-lg">
						our mission
					</Button>
				</Link>
				<Link href="/team">
					<Button variant={"giggles"} className="bg-giggles-yellow text-lg">
						our story
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default hero1;
