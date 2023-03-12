import React from "react";
import Image from "next/image";

const feature1 = () => {
	return (
		<div className="relative left-[calc(-50vw_+_50%)] flex w-screen flex-col bg-giggles-yellow-100 md:flex-row">
			<div className="basis-1/2">
				<div className="my-auto p-4">
					<div className="grid md:place-content-end ">
						<p className="p-2 text-giggles-yellow">FEATURE</p>
						<h1 className="p-2 font-summerVibesSolid text-4xl sm:text-6xl">
							section header
						</h1>
						<p className="max-w-xl p-2 text-xl">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<div className="grid grid-cols-12 grid-rows-2 p-2">
							<div className="col-span-2 h-12 w-12 place-self-center rounded-full bg-giggles-yellow-500 sm:h-20 sm:w-20"></div>
							<p className="col-span-10 max-w-sm">
								&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor...&quot;
							</p>
							<p className="col-start-3 col-end-12 my-auto p-2">
								-Rey Mibourne
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex basis-1/2 justify-end">
				<div className="my-10 grid w-[90%] place-content-center rounded-l-full bg-giggles-yellow-200 sm:max-w-[600px]">
					<Image
						src="/gigglesLogo.svg"
						alt=""
						width={414}
						height={414}
						className="p-10"
					/>
				</div>
			</div>
		</div>
	);
};

export default feature1;
