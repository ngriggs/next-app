import React from "react";
import {
	DevicePhoneMobileIcon,
	MapPinIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Pricing from "../components/pricing";

const ContactUs = () => {
	return (
		<div>
			<section>
				<Pricing />
			</section>
			<div className="my-8" />
			<section>
				<div className="relative mx-auto py-10 px-4 w-full max-w-7xl bg-gray-50">
					<div className="mx-auto max-w-5xl">
						{/* :DOTS BACKGROUND */}
						<div>
							{/* ::Dots 1 */}
							<span className="absolute top-0 left-0 hidden md:block opacity-10">
								<svg
									width={250}
									height={600}
									fill="none"
									viewBox="0 0 250 600"
									aria-hidden="true"
								>
									<pattern
										id="pattern-rectangles"
										x={0}
										y={0}
										width={40}
										height={40}
										patternUnits="userSpaceOnUse"
									>
										<rect
											x={0}
											y={0}
											width={10}
											height={10}
											className="text-green-500"
											fill="currentColor"
										/>
									</pattern>
									<rect
										width={250}
										height={600}
										fill="url(#pattern-rectangles)"
									/>
								</svg>
							</span>
							{/* ::Dots 2 */}
							<span className="absolute bottom-0 right-0 opacity-20">
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
											className="fill-current text-green-500"
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
							<h2 className="text-center text-5xl text-green-500 font-light">
								Contact Us
							</h2>

							{/* ::Some Text */}
							<p className="mx-auto py-5 max-w-3xl text-center text-base text-gray-600">
								Atque sint nemo vero sequi veniam, numquam fugiat aperiam
								doloremque, itaque officia exercitationem! Excepturi deleniti
								accusantium minus quibusdam dolores doloremque natus fugit!
							</p>

							{/* ::Infos Container */}
							<div className="flex flex-wrap justify-between items-center text-base">
								{/* :::Address */}
								<div className="m-2.5 inline-flex items-center">
									<MapPinIcon className="mr-2 w-6 h-6 text-green-500" />
									<p className="text-gray-600 font-semibold">
										328 Green Bay Road, Highwood, IL 60040
									</p>
								</div>
								{/* :::Phone */}
								<div className="m-2.5 inline-flex items-center">
									<DevicePhoneMobileIcon className="mr-2 w-6 h-6 text-green-500" />
									<p className="text-gray-600 font-semibold">357-233-9644</p>
								</div>
								{/* :::Address */}
								<div className="m-2.5 inline-flex items-center">
									<EnvelopeIcon className="mr-2 w-6 h-6 text-green-500" />
									<p className="text-gray-600 font-semibold">
										my-email@fancymail.com
									</p>
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
