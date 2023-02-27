"use client";
import React from "react";
import ContactForm from "../components/contactForm";

import {
	DevicePhoneMobileIcon,
	MapPinIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Pricing from "../components/pricing";

const ContactUs = () => {
	return (
		<div className="flex flex-col pt-2">
			<section className="grid grid-cols-12 gap-4">
				<div className="col-start-1 col-end-7 grid content-center text-center">
					<h2 className="justify-self-center text-2xl ">
						Have you got a question for us?
					</h2>
					<p className="justify-self-center text-base ">
						Questions or special inquiries? Fill out a form and we'll be in
						touch as soon as possible
					</p>
				</div>
				<div className="col-start-7 col-end-13">
					<ContactForm />
				</div>
				<div className="col-span-12"></div>
			</section>
			<section className="mt-8">
				<Pricing />
			</section>
			<div className="my-8" />
			<section>
				<div className="relative mx-auto w-full max-w-7xl bg-[#FAF5F1] py-10 px-4">
					<div className="mx-auto max-w-5xl">
						{/* :DOTS BACKGROUND */}
						<div>
							{/* ::Dots 1 */}
							<span className="absolute top-0 left-0 hidden opacity-5 md:block">
								<svg
									width={260}
									height={600}
									fill="none"
									viewBox="0 0 250 600"
									aria-hidden="true"
								>
									<pattern
										id="pattern-rectangles"
										x={0}
										y={0}
										width={30}
										height={30}
										patternUnits="userSpaceOnUse"
										patternContentUnits="userSpaceOnUse"
									>
										<circle
											cx={10}
											cy={10}
											r={5}
											className=""
											fill="currentColor"
										/>
									</pattern>
									<rect
										width={260}
										height={600}
										fill="url(#pattern-rectangles)"
									/>
								</svg>
							</span>
							{/* ::Dots 2 */}
							<span className="absolute bottom-0 right-0 opacity-5">
								<svg
									width={300}
									height={300}
									fill="none"
									viewBox="0 0 300 300"
									aria-hidden="true"
								>
									<pattern
										id="pattern-circles"
										x="0"
										y="0"
										width="30"
										height="30"
										patternUnits="userSpaceOnUse"
										patternContentUnits="userSpaceOnUse"
									>
										<circle
											id="pattern-circle"
											cx="10"
											cy="10"
											r="5"
											className="fill-current "
										/>
									</pattern>
									<rect
										id="rect"
										x="0"
										y="0"
										width="100%"
										height="100%"
										fill="url(#pattern-circles)"
									/>
								</svg>
							</span>
						</div>

						{/* :MAIN CONTAINER */}
						<div className="relative space-y-5">
							{/* ::Title */}
							<h2 className="text-center text-5xl font-light">Contact Us</h2>

							{/* ::Some Text */}
							<p className="mx-auto max-w-3xl py-5 text-center text-base ">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>

							{/* ::Infos Container */}
							<div className="flex flex-row items-center justify-between text-base">
								{/* :::Address */}
								<div className="m-2.5 inline-flex flex-1 items-center">
									<MapPinIcon className="mr-2 h-6 w-6" />
									<p className=" font-semibold">
										328 Green Bay Road,
										<br /> Highwood, IL 60040
									</p>
								</div>
								{/* :::Phone */}
								<div className="m-2.5 inline-flex flex-1 items-center">
									<DevicePhoneMobileIcon className="mr-2 h-6 w-6 " />
									<a href="tel:555-555-5555" className="font-semibold">
										555-555-5555
									</a>
								</div>
								{/* :::Address */}
								<div className="m-2.5 inline-flex flex-1 items-center">
									<EnvelopeIcon className="mr-2 h-6 w-6 " />
									<a
										href="mailto:info@gigglesplay.com"
										className="font-semibold"
									>
										info@gigglesplay.com
									</a>
								</div>
							</div>
						</div>

						{/* :MAP CONTAINER */}
						<div className="relative mt-16 rounded border-2 border-gray-200">
							{/* Embed Google map */}
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.543972530705!2d-87.81301398426875!3d42.20281715300928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc1cc2a1fa805%3A0x1e906b9d8036e4b7!2s328%20Green%20Bay%20Rd%2C%20Highwood%2C%20IL%2060040!5e0!3m2!1sen!2sus!4v1674282554891!5m2!1sen!2sus"
								title="map"
								width="100%"
								height="450"
								className=""
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</section>
			<div className="my-8" />
		</div>
	);
};

export default ContactUs;
