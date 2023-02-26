"use client";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import Link from "next/link";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

interface Solution {
	name: string;
	description: string;
	href: string;
	target: string;
	icon: any;
}
function classNames(classes: string, extra: string) {
	return [classes, extra].filter(Boolean).join(" ");
}
export default function popoverMenu({
	solutions,
	title,
	active,
}: {
	solutions: Solution[];
	title: string;
	active: boolean;
}) {
	return (
		<>
			<Popover className="relative">
				{({ open }) => (
					<>
						<Popover.Button
							className={classNames(
								open || active
									? "font-black text-[#232323] underline"
									: "text-[#232323]",
								"group inline-flex items-center rounded-md bg-white text-base font-semibold hover:text-black hover:underline"
							)}
						>
							<span>{title}</span>
							{open ? (
								<ChevronUpIcon
									className={classNames(
										open ? "text-[#232323]" : "stroke-2 text-black",
										"ml-3 mt-[3px] h-4 w-4 group-hover:text-black"
									)}
									aria-hidden="true"
								/>
							) : (
								<ChevronDownIcon
									className={classNames(
										open ? "text-[#232323]" : "stroke-2  text-[#232323]",
										"ml-3 mt-[3px] h-4 w-4 group-hover:text-black"
									)}
									aria-hidden="true"
								/>
							)}
						</Popover.Button>

						<Transition
							as={Fragment}
							enter="transition duration-100 ease-out"
							enterFrom="transform scale-95 opacity-0"
							enterTo="transform scale-100 opacity-100"
							leave="transition duration-75 ease-out"
							leaveFrom="transform scale-100 opacity-100"
							leaveTo="transform scale-95 opacity-0"
						>
							<Popover.Panel className="absolute mt-3 w-screen max-w-sm">
								{({ close }) => (
									<button
										className="text-left"
										onClick={async () => {
											await close();
										}}
									>
										<div className="overflow-hidden rounded-lg shadow-lg">
											<div className="relative grid gap-2 bg-white px-5 py-4 sm:gap-4 sm:p-6">
												{solutions.map((item) => (
													<Link
														key={item.name}
														href={item.href}
														target={item.target}
														className="-m-3 flex items-start rounded-lg p-3"
													>
														<div className="ml-0">
															<p className="text-base font-semibold text-gray-500 hover:text-black">
																{item.name}
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
		</>
	);
}

function IconOne() {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="48" height="48" rx="8" fill="#FFEDD5" />
			<path
				d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
				stroke="#FB923C"
				strokeWidth="2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
				stroke="#FDBA74"
				strokeWidth="2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
				stroke="#FDBA74"
				strokeWidth="2"
			/>
		</svg>
	);
}

function IconTwo() {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="48" height="48" rx="8" fill="#FFEDD5" />
			<path
				d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
				stroke="#FB923C"
				strokeWidth="2"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
				stroke="#FDBA74"
				strokeWidth="2"
			/>
		</svg>
	);
}

function IconThree() {
	return (
		<svg
			width="48"
			height="48"
			viewBox="0 0 48 48"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="48" height="48" rx="8" fill="#FFEDD5" />
			<rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
			<rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
			<rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
			<rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
			<rect x="29" y="16" width="2" height="20" fill="#FB923C" />
			<rect x="33" y="12" width="2" height="24" fill="#FB923C" />
		</svg>
	);
}
