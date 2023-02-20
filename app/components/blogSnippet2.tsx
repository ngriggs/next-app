import Link from "next/link";
import Button from "./button";

const HomePage = async () => {
	return (
		<div className="mx-auto py-16 lg:py-20">
			<div className="container mx-auto px-4 ">
				<div className="md:w-5/6 md:mx-auto md:max-w-2xl">
					<h1 className="text-[#232323] text-3xl text-center font-summerVibesSolid font-normal sm:text-4xl">
						insights
					</h1>
					<p className="text-center text-lg mt-2">
						Stay up to date with the latest fun and inspiration at Giggles Play
						- read our blog!
					</p>
				</div>
			</div>
			<div className="flex place-content-center my-8">
				<Link href="/news" target={"_top"}>
					<Button
						label="learn more"
						bgColor=""
						hoverColor=""
						styles="items-center font-normal"
					/>
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
