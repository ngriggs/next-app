import React from "react";
import { Button } from "./ui/button";

const gallery3 = () => {
	return (
		<div className="relative left-[calc(-50vw_+_50%)] flex w-screen flex-col bg-giggles-yellow-100 pt-10">
			<div className="mx-auto my-auto grid flex-1 place-content-center text-center">
				<p className="uppercase text-giggles-yellow">gallery</p>
				<h2 className="font-summerVibesSolid text-6xl">pictures</h2>
			</div>
			<div className="m-auto grid w-full max-w-7xl flex-1 grid-cols-12 gap-4">
				<img
					src="https://source.unsplash.com/random/253x176/"
					alt="Image 1"
					className="bottom-0 col-span-6 row-span-3 place-self-end"
				/>
				<img
					src="https://source.unsplash.com/random/370x256/"
					alt="Image 2"
					className="col-span-6 row-span-3"
				/>
				<img
					src="https://source.unsplash.com/random/684x464/"
					alt="Image 3"
					className="col-span-7 row-span-6 justify-self-end"
				/>
				<img
					src="https://source.unsplash.com/random/370x256/"
					alt="Image 4"
					className="col-span-4 row-span-4"
				/>
				<img
					src="https://source.unsplash.com/random/264x176/"
					alt="Image 5"
					className="col-span-3 row-span-2"
				/>
				<img
					src="https://source.unsplash.com/random/370x256/"
					alt="Image 5"
					className="col-span-6 row-span-3 justify-self-end"
				/>
				<img
					src="https://source.unsplash.com/random/224x160/"
					alt="Image 5"
					className="col-span-6 row-span-3"
				/>
			</div>
			<div className="my-10 grid flex-1 place-content-center">
				<Button
					variant={"giggles"}
					className="border-[1px] border-giggles-yellow bg-transparent text-giggles-yellow"
				>
					EXPLORE ALL
				</Button>
			</div>
		</div>
	);
};

export default gallery3;
