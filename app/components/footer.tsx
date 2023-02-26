import React from "react";
import Link from "next/link";
import Image from "next/image";

const socialMedia = [
	{
		id: "social-media-1",
		icon: "/instagram.svg",
		link: "https://www.instagram.com/giggles.play/?fbclid=IwAR0-NhgItCvF9QTFJVUSnTPRaCS12Bv5HfOzghQa2SemmTWXGQpM_EwuGls",
	},
	{
		id: "social-media-2",
		icon: "/facebook.svg",
		link: "https://www.facebook.com/profile.php?id=100089486487628",
	},
];
const links = [
	{
		name: "admission",
		description:
			"Book an upcoming party or check availability on your event date",
		href: "/booking",
	},
	{
		name: "hours",
		description: "Send us any feedback or inquiries",
		href: "/contact",
	},
	{
		name: "waiver",
		description: "Sign a waiver for your children in advance",
		href: "/waiver",
	},
	{
		name: "gallery",
		description: "Learn more about the team.",
		href: "/gallery",
	},
];

const Footer = () => {
	return (
		<footer className="clip5 sm:clip4 bg-[#FAF5F1] p-4 pt-8 md:p-8 lg:p-10">
			<div className="mx-auto text-center">
				<nav>
					<Link href="/" className="flex max-h-20 items-center justify-center">
						<Image
							className="hover:scale-105"
							width={144}
							height={144}
							alt="logo"
							src="/giggles.svg"
							priority={false}
						/>
					</Link>
				</nav>

				<p className="mt-2 mb-6 text-gray-500">
					a place where{" "}
					<span className="font-extrabold text-giggles-green">growth</span> and{" "}
					<span className="font-extrabold text-giggles-yellow">giggles</span> go
					hand in hand
				</p>
				<nav>
					<ul className="mb-6 flex flex-wrap items-center justify-center text-gray-500">
						<li>
							<Link href="/about" className="mr-4 hover:underline md:mr-6 ">
								About
							</Link>
						</li>
						<li>
							<Link
								href="https://squareup.com/appointments/book/89lmsk6jh008w1/LPJGJT0WFHK20/start"
								target="_blank"
								className="mr-4 hover:underline md:mr-6"
							>
								Booking
							</Link>
						</li>
						<li>
							<Link href="/gallery" className="mr-4 hover:underline md:mr-6 ">
								Gallery
							</Link>
						</li>
						<li>
							<Link href="/news" className="mr-4 hover:underline md:mr-6">
								News
							</Link>
						</li>
						<li>
							<Link href="/waiver" className="mr-4 hover:underline md:mr-6">
								Waivers
							</Link>
						</li>
						<li>
							<Link href="/faq" className="mr-4 hover:underline md:mr-6">
								FAQs
							</Link>
						</li>
						<li>
							<Link href="/contact" className="mr-4 hover:underline md:mr-6">
								Contact
							</Link>
						</li>
					</ul>
				</nav>

				<div className="-mb-5 sm:-mb-10">
					<div className="mx-auto flex max-w-7xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
						<div className="">© 2023 Giggles Play | All Rights Reserved</div>
						<div className="mt-6 flex flex-row justify-center md:mt-0">
							{socialMedia.map((social, index) => (
								<Link key={social.id} href={social.link} target={"_blank"}>
									<Image
										src={social.icon}
										alt={social.id}
										height={21}
										width={21}
										className={`h-[21px] w-[21px] cursor-pointer object-contain hover:scale-105 ${
											index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
										}`}
									/>
								</Link>
							))}
						</div>
						<div className="">
							<Link className="hover:underline" href="/privacy">
								Privacy Policy
							</Link>
							<span> | </span>
							<Link className="hover:underline" href="/tos">
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
