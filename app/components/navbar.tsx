"use client";
import React, { Fragment } from "react";
import { Popover, Transition, Disclosure } from "@headlessui/react";
// @ts-ignore
import { usePathname } from "next/navigation";
import {
	Bars3Icon,
	CursorArrowRaysIcon,
	ShieldCheckIcon,
	Squares2X2Icon,
	XMarkIcon,
	CalendarDaysIcon,
	ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/dist/client/link";
import PopoverMenu from "./popoverMenu";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
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
const shop = [
	{
		name: "cart",
		description:
			"Book an upcoming party or check availability on your event date",
		href: "/shop/cart",
		target: "_top",
		icon: CalendarDaysIcon,
	},
	{
		name: "checkout",
		description: "Sign a waiver for your children in advance",
		href: "/shop/checkout",
		target: "_top",
		icon: ShieldCheckIcon,
	},
];

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

function Navbar() {
	const pathname = usePathname();
	const match = (pathname: any, items: any[]) => {
		for (const item of items) {
			if (pathname === item.href) {
				return true;
			}
		}
		return false;
	};
	const activeAbout = match(pathname, about);
	const activePlay = match(pathname, play);
	const activeParties = match(pathname, parties);
	const activeShop = match(pathname, shop);

	return (
		<Popover
			as="nav"
			className="fixed left-[calc(-50vw_+_50%)] top-0 z-50 h-[80px] w-screen bg-white"
		>
			<div className="mx-auto max-w-7xl px-1 sm:px-0 ">
				<div className="flex items-center justify-between px-0 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<nav>
							<Link
								href="/"
								className="flex items-center justify-center hover:scale-105"
							>
								<Image
									width={300}
									height={300}
									onError={() => window.location.reload()}
									alt="logo"
									className="-ml-14 h-20 max-w-[60%] object-center"
									src="/giggles_horizontal_logo.svg"
									priority={true}
								/>
							</Link>
						</nav>
					</div>
					<div className="z-50 -my-2 -mr-2 md:hidden">
						<Popover.Button className="mr-5 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset">
							<span className="sr-only">Open menu</span>
							<Bars3Icon
								className="h-6 w-6 ui-open:hidden  ui-open:transform"
								aria-hidden="true"
							/>
							<XMarkIcon
								className="hidden h-6 w-6 ui-open:flex ui-open:transform"
								aria-hidden="true"
							/>
						</Popover.Button>
						<Popover.Overlay className="fixed inset-0  opacity-30" />
					</div>

					<Popover.Group as="nav" className="hidden space-x-8 md:flex ">
						<PopoverMenu solutions={about} title="about" active={activeAbout} />
						<PopoverMenu solutions={play} title="play" active={activePlay} />
						<PopoverMenu
							solutions={parties}
							title="parties"
							active={activeParties}
						/>
						<PopoverMenu solutions={shop} title="shop" active={activeShop} />
					</Popover.Group>
					<div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
						<Link
							href="https://giggles-play.square.site/"
							target={"_blank"}
							className="whitespace-nowrapborder ml-8 mr-4 inline-flex items-center justify-center border-transparent  px-4 py-2 text-base"
						>
							<Button>Book Now</Button>
						</Link>
					</div>
				</div>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-in-out duration-300 transform"
				enterFrom="-translate-x-full"
				enterTo="translate-x-0"
				leave="transition ease-in-out duration-300 transform"
				leaveFrom="translate-x-0"
				leaveTo="-translate-x-full"
			>
				<Popover.Panel
					focus
					className="fixed top-[80px] bottom-0 z-50 w-screen transform gap-x-0 transition md:hidden"
				>
					{({ close }) => (
						<div className="top-0 left-0 bottom-0 h-screen overflow-y-auto bg-white px-[1.5rem]">
							{/* <button
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
								</button> */}
							<div className="flex w-full flex-col space-y-[1.5rem] py-[1.5rem]">
								<Disclosure as="div" className="">
									{({ open }) => (
										<>
											<Disclosure.Button className="flex w-full justify-between py-2">
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
											<Disclosure.Button className="flex w-full justify-between py-2">
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
											<Disclosure.Button className="flex w-full justify-between py-2">
												<span className="text-base font-semibold">parties</span>
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
									<Link href="/shop" className="flex items-start py-2">
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
										className="whitespace-nowrapborder ml-8 mr-4 inline-flex items-center justify-center border-transparent  px-4 py-2 text-base"
									>
										<Button>Book Now</Button>
									</Link>
								</button>
								<button
									className="flex flex-row items-center"
									onClick={async () => {
										close();
									}}
								>
									{socialMedia.map((social, index) => (
										<Link key={social.id} href={social.link} target={"_blank"}>
											<Image
												src={social.icon}
												alt={social.id}
												height={21}
												width={21}
												className={`h-[34px] w-[34px] cursor-pointer object-contain hover:scale-105 ${
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

export default Navbar;
