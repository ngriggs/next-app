import Image from "next/image";
import Link from "next/link";

const Content = () => {
	return (
		<div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
			<div className="grid gap-5 lg:grid-cols-2">
				<div>
					<Link href="/giggles" target={"_top"}>
						<Image
							src="https://www.datocms-assets.com/93822/1676086278-cottonbro-studio-2.jpg"
							className="h-56 w-full rounded-lg object-cover sm:h-96"
							alt="our story"
							placeholder={"empty"}
							height={600}
							width={400}
						/>
					</Link>
				</div>
				<div className="flex flex-col justify-center">
					<div className="mx-auto mb-6 max-w-xl">
						<h2 className="text-center font-summerVibesSolid text-3xl font-normal text-[#232323] sm:text-4xl sm:leading-none">
							our story
						</h2>
						<p className="mt-[8px] text-center text-base md:text-lg">
							Discover the heart and passion behind Giggles.
						</p>
					</div>
					<div className="grid gap-5 sm:grid-cols-2">
						<div className="rounded-lg border-l-4 shadow-sm">
							<div className="h-full rounded-lg border border-l-0 p-5">
								<h6 className="mb-2 font-semibold leading-5 text-[#232323]">
									Our Vision
								</h6>
								<p className="text-sm font-medium">
									Learn about our mission to create a safe and fun environment
									for children and families to play and make memories together.
									Discover the values that drive us to provide the best possible
									experience for our customers.
								</p>
							</div>
						</div>
						<div className="rounded-lg border-l-4 shadow-sm">
							<div className="h-full rounded-lg border border-l-0 p-5">
								<h6 className="mb-2 font-semibold leading-5 text-[#232323]">
									Our Journey
								</h6>
								<p className="text-sm font-medium">
									Discover the history of Giggles Play, from its humble
									beginnings to becoming the leading indoor playspace. Learn
									about the challenges and triumphs we faced along the way and
									how we continue to innovate and evolve to provide the best
									possible experience for our customers.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Content;
