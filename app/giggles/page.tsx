"use client";
import Image from "next/image";
import { Icons } from "@/app/components/icons";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";

export default function Giggles() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [newsletterSignup, setNewsletterSignup] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Submit form data to server
		console.log("Full Name:", fullName);
		console.log("Email:", email);
		console.log("message:", message);
		console.log("newsletterSignup", newsletterSignup);
	};

	return (
		<div className="flex flex-col items-center justify-center px-4 pb-4">
			<Image
				src="gigglesAboutImg.svg"
				alt="giggles about image"
				width={1000}
				height={1000}
				className="top-[-16px] w-full rounded-b-lg"
			/>
			<div className="mx-auto my-8 px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
				<div className="grid gap-x-36 gap-y-4 lg:grid-cols-2">
					<div className="place-items-center">
						<>
							<Image
								// src="https://cdn.discordapp.com/attachments/739252351793234040/1074161499125338172/sun.png"
								src="aboutGiggles.svg"
								className="mx-auto max-w-[300px] rounded-full object-scale-down sm:max-w-[400px]"
								alt="giggles play logo"
								width={1000}
								height={1000}
							/>
						</>
					</div>
					<div className="flex flex-col justify-center">
						<div className="mb-6 max-w-xl self-center">
							<h1 className="mb-2 text-center font-summerVibesSolid text-4xl font-normal tracking-tight sm:text-5xl sm:leading-none">
								our <span className="text-giggles-yellow">mission</span>
							</h1>
							<p className=" max-w-sm text-center text-base font-medium sm:text-lg">
								At Giggles Play, we believe that play and learning go
								hand-in-hand. Our mission is to provide a welcoming and
								nurturing environment where families can form meaningful
								connections through play.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mx-auto px-4 py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
				<div className="grid gap-x-36 gap-y-4 lg:grid-cols-2">
					<div className="order-last mb-6 max-w-xl self-center lg:-order-1">
						<h1 className="mb-2 text-center font-summerVibesSolid text-4xl font-normal sm:text-5xl sm:leading-none">
							our <span className="text-giggles-blue">space</span>
						</h1>
						<p className=" max-w-sm text-center text-base font-medium sm:text-lg">
							We offer a clean and inviting facility with thoughtfully designed
							play areas, activities, and classes that foster independence,
							creativity, and confidence in children.
						</p>
					</div>
					<div className="flex flex-row">
						<Image
							// src="https://cdn.discordapp.com/attachments/739252351793234040/1074157667251138620/loft-website.png"
							src="ourPlayfulSpace.svg"
							className="mx-auto max-w-[300px] rounded-full sm:max-w-[420px]"
							alt="natural pod playloft"
							width={1000}
							height={1000}
						/>
					</div>
				</div>
			</div>
			<div className="mx-auto px-4 py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
				<div className="grid gap-x-36 gap-y-4 lg:grid-cols-2">
					<div className="place-items-center">
						<Image
							// src="https://cdn.discordapp.com/attachments/739252351793234040/1074161499125338172/sun.png"
							src="buildingRelationships.svg"
							className="mx-auto max-w-[300px] rounded-full object-scale-down sm:max-w-[400px]"
							alt="giggles play logo"
							width={1000}
							height={1000}
						/>
					</div>
					<div className="flex flex-col justify-center">
						<div className="mb-6 max-w-xl self-center">
							<h1 className="mb-2 text-center font-summerVibesSolid text-4xl font-normal tracking-tight sm:text-5xl sm:leading-none">
								our <span className="text-giggles-green">vision</span>
							</h1>
							<p className=" mx-auto max-w-sm text-center text-base font-medium sm:text-lg">
								Our vision is to be a hub where families can build authentic
								relationships and create lifelong memories. Join us in our
								mission and let&apos;s play and learn together!
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-4 w-full ">
				<div className="relative flex w-full flex-col p-4 ">
					<div className="mx-auto h-1/2 max-w-lg lg:ml-10">
						<h2 className="mb-2 text-center font-summerVibesSolid text-3xl font-normal">
							lets get in touch
						</h2>
						<p className="mb-4 text-center">
							Looking to get in touch with us? We&apos;d love to hear from you!
							Here are a few ways to reach out:
						</p>
						<div className="flex">
							<Icons.mapPin className="mx-4 my-auto h-[24px] w-[24px] flex-none" />{" "}
							<p className="mb-4">
								<Link
									className="no-underline hover:underline"
									href="https://www.google.com/maps/place/328+Green+Bay+Rd,+Highwood,+IL+60040/@42.2028132,-87.8108253,17z/data=!4m6!3m5!1s0x880fc1cc2a1fa805:0x1e906b9d8036e4b7!8m2!3d42.2028132!4d-87.8108253!16s%2Fg%2F11bw40qd9r"
								>
									328 Green Bay Road, Highwood, IL
								</Link>{" "}
							</p>
						</div>
						<div className="flex">
							<Icons.email className="mx-4 my-auto h-[24px] w-[24px] flex-none fill-black" />
							<p className="mb-4">info@gigglesplay.com</p>
						</div>
					</div>
					<div className="h-1/2 ">
						{/* Embed Google map */}
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.543972530705!2d-87.81301398426875!3d42.20281715300928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc1cc2a1fa805%3A0x1e906b9d8036e4b7!2s328%20Green%20Bay%20Rd%2C%20Highwood%2C%20IL%2060040!5e0!3m2!1sen!2sus!4v1674282554891!5m2!1sen!2sus"
							title="map"
							width="100%"
							height="450"
							className="rounded-lg"
							loading="lazy"
						/>
					</div>
					<div className="relative mx-auto mt-4 mb-10 w-[100%] sm:flex sm:w-[40%] sm:flex-col md:mt-0 lg:absolute lg:top-9 lg:right-9">
						<form
							onSubmit={handleSubmit}
							className="rounded-lg bg-white p-10 shadow-xl "
						>
							<h2 className="mb-2 font-summerVibesSolid text-3xl font-normal">
								contact us
							</h2>
							<p></p>
							{/* Full Name */}
							<label htmlFor="fullName" className="mb-2 block font-bold">
								full name
							</label>
							<input
								type="text"
								id="fullName"
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
								className="mb-5 w-full rounded-md border border-gray-400 p-2"
							/>

							{/* Email */}
							<label htmlFor="email" className="mb-2 block font-bold">
								email
							</label>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mb-5 w-full rounded-md border border-gray-400 p-2"
								required
							/>

							{/* Signature */}
							<label htmlFor="signature" className="mb-2 block font-bold">
								message
							</label>
							<Textarea
								id="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="mb-5 h-[8rem] w-full border border-gray-400 p-2"
								placeholder="Type your message here."
								required
							/>

							{/* Submit Button */}
							<div className="flex justify-center">
								{" "}
								<Button type="submit" className="min-w-[6rem]">
									Send
								</Button>
							</div>
							<div className="mt-4 flex space-x-2">
								<Checkbox
									id="newsletterSignup"
									checked={newsletterSignup}
									onCheckedChange={(_) => {
										setNewsletterSignup(!newsletterSignup);
									}}
									value={newsletterSignup.toString()}
								/>
								<div className="grid gap-1.5 leading-none">
									<label
										htmlFor="terms1"
										className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
									>
										Sign up for our newsletter
									</label>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
