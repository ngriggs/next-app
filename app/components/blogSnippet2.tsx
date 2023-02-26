import Link from "next/link";
import { Button } from "@/app/components/ui/button";

const HomePage = async () => {
	return (
		<div className="mx-auto py-16 lg:py-20">
			<div className="container mx-auto px-4 ">
				<div className="md:mx-auto md:w-5/6 md:max-w-2xl">
					<h1 className="text-center font-summerVibesSolid text-3xl font-normal text-[#232323] sm:text-4xl">
						insights
					</h1>
					<p className="mt-2 text-center text-lg">
						Stay up to date with the latest fun and inspiration at Giggles Play
						- read our blog!
					</p>
				</div>
			</div>
			<div className="my-8 flex place-content-center">
				<Link href="/news" target={"_top"}>
					<Button>Learn More</Button>
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
