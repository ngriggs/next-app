import React from "react";
import Link from "next/link";
import Image from "next/image";

const socialMedia = [
	{
		id: "social-media-1",
		icon: "instagram.svg",
		link: "https://www.instagram.com/",
	},
	{
		id: "social-media-2",
		icon: "facebook.svg",
		link: "https://www.facebook.com/",
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
		<footer className="p-4 bg-gray-50 md:p-8 lg:p-10">
			<div className="mx-auto max-w-screen-xl text-center">
				<nav>
					<Link
						href="/"
						className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-blue-600"
					>
						<Image
							width={144}
							height={144}
							alt="logo"
							src="/giggles-header-2.png"
						/>
					</Link>
				</nav>

				<p className="my-6 text-gray-500">
					An indoor playspace and event venue where your{" "}
					<span className="text-[#ec6a52] font-bold">giggles</span> are
					guaranteed.
				</p>
				<nav>
					<ul className="flex flex-wrap justify-center items-center mb-6 text-gray-500">
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
							<Link href="/articles" className="mr-4 hover:underline md:mr-6">
								Blog
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

				<div className="bg-gray-100">
					<div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
						<div className="">© 2023 Giggles Play | All Rights Reserved</div>
						<div className="flex flex-row justify-center md:mt-0 mt-6">
							{socialMedia.map((social, index) => (
								<Image
									key={social.id}
									src={social.icon}
									alt={social.id}
									height={21}
									width={21}
									className={`w-[21px] h-[21px] object-contain cursor-pointer ${
										index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
									}`}
								/>
							))}
						</div>
						<div className="">
							<a className="" href="#">
								Privacy Policy
							</a>
							<span> | </span>
							<a className="" href="#">
								Terms of Service
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
