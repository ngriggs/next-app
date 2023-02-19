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
		<footer className="p-4 bg-[#FAF5F1] md:p-8 lg:p-10 pt-8 clip5 sm:clip4">
			<div className="mx-auto text-center">
				<nav>
					<Link href="/" className="flex justify-center items-center max-h-20">
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

				<div className="-mb-5 bg-[#FAF5F1]">
					<div className="mx-auto flex max-w-7xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
						<div className="">© 2023 Giggles Play | All Rights Reserved</div>
						<div className="flex flex-row justify-center md:mt-0 mt-6">
							{socialMedia.map((social, index) => (
								<Link key={social.id} href={social.link} target={"_blank"}>
									<Image
										src={social.icon}
										alt={social.id}
										height={21}
										width={21}
										className={`w-[21px] h-[21px] object-contain cursor-pointer hover:scale-105 ${
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
