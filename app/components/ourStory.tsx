import Image from "next/image";
import Link from "next/link";

const Content = () => {
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="grid gap-5 row-gap-8 lg:grid-cols-2">
				<div>
					<Link href="/team">
						<Image
							src="https://www.datocms-assets.com/93822/1676086278-cottonbro-studio-2.jpg"
							className="object-cover w-full h-56 sm:h-96 rounded-lg"
							alt="our story"
							height={600}
							width={400}
						/>
					</Link>
				</div>
				<div className="flex flex-col justify-center">
					<div className="max-w-xl mb-6">
						<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-none">
							<span>Our Story</span>
						</h2>
						<p className="text-base md:text-lg">
							Discover the heart and passion behind Giggles Play by reading our
							story.
						</p>
					</div>
					<div className="grid gap-5 row-gap-8 sm:grid-cols-2">
						<div className="border-l-4">
							<div className="h-full p-5 border border-l-0 rounded-r">
								<h6 className="mb-2 font-semibold leading-5 text-slate-900 ">
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
						<div className="shadow-sm border-l-4">
							<div className="h-full p-5 border border-l-0 rounded-r">
								<h6 className="mb-2 font-semibold leading-5 text-slate-900 ">
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
