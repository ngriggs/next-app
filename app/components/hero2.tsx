import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const hero2 = () => {
	return (
		<div className="relative left-[calc(-50vw_+_50%)] flex w-screen flex-col overflow-hidden bg-giggles-yellow-100 lg:flex-row">
			<div className="relataive absolute -right-[calc(50rem_+_10%)] -top-[calc(20rem_+_10%)] z-10 h-[1179px] w-[1179px] rounded-full bg-giggles-yellow-300 sm:-top-[calc(10rem_+_90%)] sm:-right-[calc(10rem_+_15%)] sm:h-[1571px] sm:w-[1571px]">
				<div className="absolute top-[37%] left-[-1%] z-30 h-14 w-14 rounded-full bg-giggles-blue"></div>
				<div className="absolute top-[55%] left-[-2%] z-30 h-14 w-14 rounded-full bg-giggles-navy"></div>
				<div className="absolute bottom-[20%] left-[5%] z-30 h-14 w-14 rounded-full bg-giggles-green"></div>
			</div>

			<div className="my-auto flex-1 flex-col justify-start">
				<div className="grid place-content-center p-4">
					<p className="z-20 p-2 tracking-[2px] text-giggles-yellow">
						GIGGLES PLAY
					</p>
					<h1 className="z-20 p-2 font-summerVibesSolid text-5xl lg:text-7xl">
						where growth <br /> and giggles <br /> go hand in hand
					</h1>
					<Button
						variant={"giggles"}
						className="z-20 mt-4 w-[170px] bg-giggles-yellow"
					>
						CALL TO ACTION
					</Button>
				</div>
			</div>
			<div className="flex flex-1 justify-end">
				<Image
					src="/heroImage.svg"
					alt={"Hero image"}
					width={767}
					height={767}
					className="z-20"
				/>
			</div>
		</div>
	);
};

export default hero2;
