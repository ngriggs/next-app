"use client";
import React, { Component, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
	Bars3Icon,
	BookmarkSquareIcon,
	CursorArrowRaysIcon,
	ShieldCheckIcon,
	Squares2X2Icon,
	XMarkIcon,
	CalendarDaysIcon,
	QuestionMarkCircleIcon,
	CheckBadgeIcon,
	NewspaperIcon,
	ShoppingCartIcon,
	ChevronDownIcon,
	PlusIcon,
} from "@heroicons/react/24/outline";
import Headroom from "react-headroom";
import Link from "next/dist/client/link";

const navigation = [
	{ name: "Articles", href: "/articles", current: false },
	{ name: "Team", href: "#", current: false },
	{ name: "Projects", href: "#", current: false },
	{ name: "Calendar", href: "#", current: false },
	{ name: "Gallery", href: "/gallery", current: false },
];
const visit = [
	{
		name: "admission",
		description:
			"Book an upcoming party or check availability on your event date",
		href: "/booking",
		icon: CalendarDaysIcon,
	},
	{
		name: "hours",
		description: "Send us any feedback or inquiries",
		href: "/contact",
		icon: CursorArrowRaysIcon,
	},
	{
		name: "waiver",
		description: "Sign a waiver for your children in advance",
		href: "/waiver",
		icon: ShieldCheckIcon,
	},
	{
		name: "gallery",
		description: "Learn more about the team.",
		href: "/about",
		icon: Squares2X2Icon,
	},
];
const party = [
	{
		name: "package",
		description:
			"Get all of your questions answered in our forums or contact support.",
		href: "/newsletter",
		icon: NewspaperIcon,
	},
	{
		name: "book",
		description:
			"Learn how to maximize our platform to get the most out of it.",
		href: "/guides",
		icon: BookmarkSquareIcon,
	},
];
const read = [
	{
		name: "blog",
		description:
			"Book an upcoming party or check availability on your event date",
		href: "/booking",
		icon: CalendarDaysIcon,
	},
	{
		name: "shop (affiliate links)",
		description: "Send us any feedback or inquiries",
		href: "/contact",
		icon: CursorArrowRaysIcon,
	},
];

function classNames(classes: string, extra: string) {
	return [classes, extra].filter(Boolean).join(" ");
}
class Navbar3 extends Component {
	render() {
		return (
			<Headroom style={{ zIndex: 20 }} className="font-poppins">
				<Popover className="relative bg-white">
					<div className="mx-auto px-1 sm:px-6">
						<div className="flex items-center justify-between border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10 px-3">
							<div className="flex justify-start lg:w-0 lg:flex-1">
								<nav>
									<Link
										href="/"
										className="flex justify-center items-center hover:scale-105"
									>
										<img className="object-scale-down w-36" src="giggles.svg" />
									</Link>
								</nav>
							</div>
							<div className="-my-2 -mr-2 md:hidden">
								<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Open menu</span>
									<Bars3Icon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>
							<Popover.Group as="nav" className="hidden space-x-10 md:flex">
								<Link
									href="/"
									className="text-base font-medium text-gray-500 hover:text-gray-900 hover:scale-105"
								>
									home
								</Link>
								{/* visit */}
								<Popover className="relative">
									{({ open }) => (
										<>
											<Popover.Button
												className={classNames(
													open ? "text-gray-900" : "text-gray-500",
													"group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 font-poppins hover:scale-105"
												)}
											>
												<span>visit</span>
												<ChevronDownIcon
													className={classNames(
														open ? "text-gray-600" : "text-gray-500 stroke-2",
														"ml-[1px] mt-[3px] h-4 w-4 group-hover:text-gray-700"
													)}
													aria-hidden="true"
												/>
											</Popover.Button>

											<Transition
												as={Fragment}
												enter="transition ease-out duration-200"
												enterFrom="opacity-0 translate-y-1"
												enterTo="opacity-100 translate-y-0"
												leave="transition ease-in duration-150"
												leaveFrom="opacity-100 translate-y-0"
												leaveTo="opacity-0 translate-y-1"
											>
												<Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
													{({ close }) => (
														<button
															className="text-left"
															onClick={async () => {
																await close();
															}}
														>
															<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
																<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
																	{visit.map((item) => (
																		<Link
																			key={item.name}
																			href={item.href}
																			className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
																		>
																			<item.icon
																				className="h-6 w-6 flex-shrink-0 text-lime-600"
																				aria-hidden="true"
																			/>
																			<div className="ml-4">
																				<p className="text-base font-medium text-gray-900">
																					{item.name}
																				</p>
																				<p className="mt-1 text-sm text-gray-500">
																					{item.description}
																				</p>
																			</div>
																		</Link>
																	))}
																</div>
															</div>
														</button>
													)}
												</Popover.Panel>
											</Transition>
										</>
									)}
								</Popover>
								{/* party */}
								<Popover className="relative">
									{({ open }) => (
										<>
											<Popover.Button
												className={classNames(
													open ? "text-gray-900" : "text-gray-500",
													"group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 font-poppins hover:scale-105"
												)}
											>
												<span>party</span>
												<ChevronDownIcon
													className={classNames(
														open ? "text-gray-600" : "text-gray-500 stroke-2",
														"ml-[1px] mt-[3px] h-4 w-4 group-hover:text-gray-700"
													)}
													aria-hidden="true"
												/>
											</Popover.Button>

											<Transition
												as={Fragment}
												enter="transition ease-out duration-200"
												enterFrom="opacity-0 translate-y-1"
												enterTo="opacity-100 translate-y-0"
												leave="transition ease-in duration-150"
												leaveFrom="opacity-100 translate-y-0"
												leaveTo="opacity-0 translate-y-1"
											>
												<Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
													{({ close }) => (
														<button
															className="text-left"
															onClick={async () => {
																await close();
															}}
														>
															<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
																<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
																	{party.map((item) => (
																		<Link
																			key={item.name}
																			href={item.href}
																			className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
																		>
																			<item.icon
																				className="h-6 w-6 flex-shrink-0 text-lime-600"
																				aria-hidden="true"
																			/>
																			<div className="ml-4">
																				<p className="text-base font-medium text-gray-900">
																					{item.name}
																				</p>
																				<p className="mt-1 text-sm text-gray-500">
																					{item.description}
																				</p>
																			</div>
																		</Link>
																	))}
																</div>
															</div>
														</button>
													)}
												</Popover.Panel>
											</Transition>
										</>
									)}
								</Popover>

								<Link
									href="/gallery"
									className="text-base font-medium text-gray-500 hover:text-gray-900 hover:scale-105"
								>
									learn
								</Link>
								{/* read */}
								<Popover className="relative">
									{({ open }) => (
										<>
											<Popover.Button
												className={classNames(
													open ? "text-gray-900" : "text-gray-500",
													"group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 hover:scale-105"
												)}
											>
												<span>read</span>
												<ChevronDownIcon
													className={classNames(
														open ? "text-gray-600" : "text-gray-500 stroke-2",
														"ml-[1px] mt-[3px] h-4 w-4 group-hover:text-gray-700"
													)}
													aria-hidden="true"
												/>
											</Popover.Button>

											<Transition
												as={Fragment}
												enter="transition ease-out duration-200"
												enterFrom="opacity-0 translate-y-1"
												enterTo="opacity-100 translate-y-0"
												leave="transition ease-in duration-150"
												leaveFrom="opacity-100 translate-y-0"
												leaveTo="opacity-0 translate-y-1"
											>
												<Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
													{({ close }) => (
														<button
															className="text-left"
															onClick={async () => {
																await close();
															}}
														>
															<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
																<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
																	{read.map((item) => (
																		<Link
																			key={item.name}
																			href={item.href}
																			className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
																		>
																			<item.icon
																				className="h-6 w-6 flex-shrink-0 text-lime-600"
																				aria-hidden="true"
																			/>
																			<div className="ml-4">
																				<p className="text-base font-medium text-gray-900">
																					{item.name}
																				</p>
																				<p className="mt-1 text-sm text-gray-500">
																					{item.description}
																				</p>
																			</div>
																		</Link>
																	))}
																</div>
																<div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
																	<div>
																		<h3 className="text-base font-medium text-gray-500">
																			Recent Posts
																		</h3>
																		<ul role="list" className="mt-4 space-y-4">
																			{/* {recentPosts.map((post) => (
																				<li
																					key={post.id}
																					className="truncate text-base"
																				>
																					<Link
																						href={post.to}
																						className="font-medium text-gray-900 hover:text-gray-700"
																					>
																						{post.title}
																					</Link>
																				</li>
																			))} */}
																		</ul>
																	</div>
																	<div className="mt-5 text-sm">
																		<Link
																			href="/newsletter"
																			className="font-medium text-lime-600 hover:text-lime-500"
																		>
																			View all posts
																			<span aria-hidden="true"> &rarr;</span>
																		</Link>
																	</div>
																</div>
															</div>
														</button>
													)}
												</Popover.Panel>
											</Transition>
										</>
									)}
								</Popover>
							</Popover.Group>
							<div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
								<Link
									href="/signup"
									className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-3xl border border-transparent hover:bg-[#f7ae47] px-4 py-2 text-base font-medium text-white shadow-sm bg-[#ec6a52] hover:scale-105"
								>
									get in touch
								</Link>
							</div>
						</div>
					</div>

					<Transition
						as={Fragment}
						enter="duration-200 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							focus
							className="absolute inset-x-0 top-0 right-0 transform transition md:hidden"
						>
							{({ close }) => (
								<button
									className="absolute text-left p-2"
									onClick={async () => {
										await close();
									}}
								>
									<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
										<div className="px-5 pt-2 pb-6">
											<div className="flex items-center justify-between">
												<div>
													<Link href="/">
														<img
															className="w-auto h-12"
															src="giggles-header-2.png"
														/>
													</Link>
												</div>
												<div className="-mr-2">
													<div className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500">
														<span className="sr-only">Close menu</span>
														<XMarkIcon className="h-6 w-6" aria-hidden="true" />
													</div>
												</div>
											</div>
											<div className="mt-6">
												<nav className="grid gap-y-8">
													{visit.map((item) => (
														<Link
															key={item.name}
															href={item.href}
															className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
														>
															<item.icon
																className="h-6 w-6 flex-shrink-0 text-lime-600"
																aria-hidden="true"
															/>
															<span className="ml-3 text-base font-medium text-gray-900">
																{item.name}
															</span>
														</Link>
													))}
												</nav>
											</div>
										</div>
										<div className="space-y-6 py-6 px-5">
											<div className="grid grid-cols-2 gap-y-4 gap-x-8">
												<Link
													href="/gallery"
													className="text-base font-medium text-gray-900 hover:text-gray-700"
												>
													Gallery
												</Link>

												<Link
													href="/policies"
													className="text-base font-medium text-gray-900 hover:text-gray-700"
												>
													Policies
												</Link>
												{party.map((item) => (
													<Link
														key={item.name}
														href={item.href}
														className="text-base font-medium text-gray-900 hover:text-gray-700"
													>
														{item.name}
													</Link>
												))}
											</div>
											<div>
												<Link
													href="/signup"
													className="flex w-full items-center justify-center rounded-md border border-transparent bg-lime-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-lime-700"
												>
													get in touch
												</Link>
											</div>
										</div>
									</div>
								</button>
							)}
						</Popover.Panel>
					</Transition>
				</Popover>
			</Headroom>
		);
	}
}

export default Navbar3;
