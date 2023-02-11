"use client";
import React, { Component, Fragment } from "react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
import {
	Bars3Icon,
	BookmarkSquareIcon,
	CursorArrowRaysIcon,
	ShieldCheckIcon,
	Squares2X2Icon,
	XMarkIcon,
	CalendarDaysIcon,
	NewspaperIcon,
	ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/dist/client/link";
import PopoverMenu from "./popoverMenu";
import Image from "next/image";
import Button from "./button";
const about = [
	{
		name: "giggles",
		description:
			"Book an upcoming party or check availability on your event date",
		href: "/giggles",
		target: "_top",
		icon: CalendarDaysIcon,
	},
	{
		name: "team",
		description:
			"Book an upcoming party or check availability on your event date",
		href: "/team",
		target: "_top",
		icon: CalendarDaysIcon,
	},
	{
		name: "news",
		description: "Send us any feedback or inquiries",
		href: "/news",
		target: "_top",
		icon: CursorArrowRaysIcon,
	},
	{
		name: "contact us",
		description: "Sign a waiver for your children in advance",
		href: "/contact",
		target: "_top",
		icon: ShieldCheckIcon,
	},
	{
		name: "FAQs",
		description: "Learn more about the team.",
		href: "/faq",
		target: "_top",
		icon: Squares2X2Icon,
	},
];
const play = [
	{
		name: "visit",
		description:
			"Book an upcoming party or check availability on your event date",
		href: "/visit",
		target: "_top",
		icon: CalendarDaysIcon,
	},
	{
		name: "membership",
		description: "Send us any feedback or inquiries",
		href: "/membership",
		target: "_top",
		icon: CursorArrowRaysIcon,
	},
	{
		name: "waiver",
		description: "Sign a waiver for your children in advance",
		href: "/waiver",
		target: "_top",
		icon: ShieldCheckIcon,
	},
];
const parties = [
	{
		name: "themes",
		description:
			"Book an upcoming party or check availability on your event date",
		href: "/parties",
		target: "_top",
		icon: CalendarDaysIcon,
	},

	{
		name: "gallery",
		description: "Sign a waiver for your children in advance",
		href: "/gallery",
		target: "_top",
		icon: ShieldCheckIcon,
	},
];

const socialMedia = [
	{
		id: "social-media-1",
		icon: "instagram.svg",
		link: "https://www.instagram.com/giggles.play/?fbclid=IwAR0-NhgItCvF9QTFJVUSnTPRaCS12Bv5HfOzghQa2SemmTWXGQpM_EwuGls",
	},
	{
		id: "social-media-2",
		icon: "facebook.svg",
		link: "https://www.facebook.com/profile.php?id=100089486487628",
	},
];

interface Props {}

interface State {
	articles: any[];
}

class Navbar extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { articles: [] };
	}

	render() {
		return (
			<Popover as="nav" className="sticky w-full h-[80px] top-0 z-50 bg-white">
				<div className="mx-auto px-1 sm:px-0 ">
					<div className="flex items-center justify-between md:justify-start md:space-x-10 px-0">
						<div className="flex justify-start lg:w-0 lg:flex-1">
							<nav>
								<Link
									href="/"
									className="flex justify-center items-center hover:scale-105"
								>
									<Image
										width={300}
										height={300}
										alt="logo"
										className="-ml-14 object-center max-w-[60%] h-20"
										src="giggles_horizontal_logo.svg"
										priority={true}
									/>
								</Link>
							</nav>
						</div>
						<div className="-my-2 -mr-2 z-50 md:hidden">
							<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 mr-5 text-gray-400 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset">
								<span className="sr-only">Open menu</span>
								<Bars3Icon
									className="h-6 w-6 ui-open:hidden  ui-open:transform"
									aria-hidden="true"
								/>
								<XMarkIcon
									className="h-6 w-6 hidden ui-open:flex ui-open:transform"
									aria-hidden="true"
								/>
							</Popover.Button>
							<Popover.Overlay className="fixed z-40  bg-black opacity-30" />
						</div>

						<Popover.Group as="nav" className="hidden space-x-8 md:flex ">
							<PopoverMenu solutions={about} title="about" />
							<PopoverMenu solutions={play} title="play" />
							<PopoverMenu solutions={parties} title="parties" />
							<Link
								href="/shop"
								className="text-base font-semibold text-gray-500 hover:text-black hover:underline"
							>
								shop
							</Link>
						</Popover.Group>
						<div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
							<Link
								href="https://giggles-play.square.site/"
								target={"_blank"}
								className="ml-8 mr-4 inline-flex items-center justify-center whitespace-nowrapborder border-transparent  px-4 py-2 text-base"
							>
								<Button
									label="Book Now"
									bgColor="[#ec6a52]"
									hoverColor=""
									styles="shadow-sm font-medium"
								/>
							</Link>
						</div>
					</div>
				</div>

				<Transition
					as={Fragment}
					enter="duration-100 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-100 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Popover.Panel
						focus
						className="fixed h-screen top-0 left-0 bottom-0 z-50  transform transition md:hidden"
					>
						{({ close }) => (
							<div className="top-0 h-screen overflow-y-auto left-0 bottom-0 px-[1.5rem] bg-white">
								<button
									onClick={async () => {
										close();
									}}
								>
									<Link href="/" className="">
										<Image
											width={200}
											height={200}
											alt="logo"
											className="p-[1.5rem]"
											src="giggles_horizontal_logo.svg"
											priority={true}
										/>
									</Link>
								</button>
								<div className="py-[1.5rem] space-y-[1.5rem] w-full flex flex-col">
									<Disclosure as="div" className="">
										{({ open }) => (
											<>
												<Disclosure.Button className="py-2 flex w-full justify-between">
													<span className="text-base font-semibold">about</span>
													<ChevronDownIcon
														className={`${
															open ? "rotate-180 transform" : ""
														} h-5 w-5 text-[#ec6a52]`}
													/>
												</Disclosure.Button>
												{about.map((item) => (
													<Disclosure.Panel
														key={item.name}
														className="mt-[1.5rem]"
													>
														<Link
															href={item.href}
															target={item.target}
															className="-m-3 flex items-start rounded-lg p-3"
														>
															<div className="ml-5">
																<p className="text-base font-medium text-black hover:text-black">
																	{item.name}
																</p>
															</div>
														</Link>
													</Disclosure.Panel>
												))}
											</>
										)}
									</Disclosure>
									<Disclosure as="div" className="">
										{({ open }) => (
											<>
												<Disclosure.Button className="py-2 flex w-full justify-between">
													<span className="text-base font-semibold">play</span>
													<ChevronDownIcon
														className={`${
															open ? "rotate-180 transform" : ""
														} h-5 w-5 text-[#ec6a52]`}
													/>
												</Disclosure.Button>
												{play.map((item) => (
													<Disclosure.Panel
														key={item.name}
														className="mt-[1.5rem]"
													>
														<Link
															href={item.href}
															target={item.target}
															className="-m-3 flex items-start rounded-lg p-3"
														>
															<div className="ml-5">
																<p className="text-base font-medium text-black hover:text-black">
																	{item.name}
																</p>
															</div>
														</Link>
													</Disclosure.Panel>
												))}
											</>
										)}
									</Disclosure>
									<Disclosure as="div" className="">
										{({ open }) => (
											<>
												<Disclosure.Button className="py-2 flex w-full justify-between">
													<span className="text-base font-semibold">
														parties
													</span>
													<ChevronDownIcon
														className={`${
															open ? "rotate-180 transform" : ""
														} h-5 w-5 text-[#ec6a52]`}
													/>
												</Disclosure.Button>
												{parties.map((item) => (
													<Disclosure.Panel
														key={item.name}
														className="mt-[1.5rem]"
													>
														<Link
															href={item.href}
															target={item.target}
															className="-m-3 flex items-start rounded-lg p-3"
														>
															<div className="ml-5">
																<p className="text-base font-medium text-black hover:text-black">
																	{item.name}
																</p>
															</div>
														</Link>
													</Disclosure.Panel>
												))}
											</>
										)}
									</Disclosure>
									<button
										onClick={async () => {
											close();
										}}
									>
										<Link href="/shop" className="py-2 flex items-start">
											<span className="text-base font-semibold">shop</span>
										</Link>
									</button>
									<button
										onClick={async () => {
											close();
										}}
									>
										<Link
											href="https://giggles-play.square.site/"
											target={"_blank"}
											className="ml-8 mr-4 inline-flex items-center justify-center whitespace-nowrapborder border-transparent  px-4 py-2 text-base"
										>
											<Button
												label="Book Now"
												bgColor="[#ec6a52]"
												hoverColor=""
												styles="shadow-sm font-medium"
											/>
										</Link>
									</button>
									<button
										className="flex flex-row items-center"
										onClick={async () => {
											close();
										}}
									>
										{socialMedia.map((social, index) => (
											<Link
												key={social.id}
												href={social.link}
												target={"_blank"}
											>
												<Image
													src={social.icon}
													alt={social.id}
													height={21}
													width={21}
													className={`w-[34px] h-[34px] object-contain cursor-pointer hover:scale-105 ${
														index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
													}`}
												/>
											</Link>
										))}
									</button>
								</div>
							</div>
						)}
					</Popover.Panel>
				</Transition>
			</Popover>
		);
	}
}

export default Navbar;
