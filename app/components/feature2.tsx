import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const feature2 = () => {
	return (
		<div className="relative left-[calc(-50vw_+_50%)] flex h-[800px] w-screen flex-col bg-giggles-yellow-100">
			<div className="mx-auto text-center">
				<p className="uppercase text-giggles-yellow">ways to enjoy giggles</p>
				<h1 className="font-summerVibesSolid text-6xl">
					helping young minds grow and thrive
				</h1>
			</div>
			<div className="mx-auto mt-24 flex max-w-7xl space-x-64">
				<div className="flex-1">
					<div className="grid h-24 w-24 place-content-center rounded-full bg-white">
						<Image src="/playIcon.svg" alt="play icon" height={50} width={50} />
					</div>
					<div>
						<h4>Play</h4>
						<p>Unleash your child’s imagination</p>
					</div>
					<div>
						<Link href="">Discover More</Link>
					</div>
				</div>
				<div className="flex-1">
					<div className="grid h-24 w-24 place-content-center rounded-full bg-white">
						<Image
							src="/learnIcon.svg"
							alt="learn icon"
							height={75}
							width={75}
						/>
					</div>
					<div>
						<h4>Learn</h4>
						<p>Encourage curiosity and growth</p>
					</div>
					<div>
						<Link href="">Discover More</Link>
					</div>
				</div>
				<div className="flex-1">
					<div className="grid h-24 w-24 place-content-center rounded-full bg-white">
						<Image
							src="/celebrateIcon.svg"
							alt="celebrate icon"
							height={50}
							width={50}
						/>
					</div>
					<div>
						<h4>Celebrate</h4>
						<p>Connect with family and friends</p>
					</div>
					<div>
						<Link href="">Discover More</Link>
					</div>
				</div>
			</div>
			<div className="mx-auto mt-24 flex">
				<Button
					variant={"giggles"}
					className="border-[1px] border-giggles-yellow bg-transparent text-giggles-yellow"
				>
					READ MORE
				</Button>
			</div>
		</div>
	);
};

export default feature2;
