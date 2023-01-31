"use client";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import Link from "next/link";

interface Solution {
	name: string;
	description: string;
	href: string;
	icon: any;
}

function classNames(classes: string, extra: string) {
	return [classes, extra].filter(Boolean).join(" ");
}

export default function popoverMenu({
	solutions,
	title,
	articles,
}: {
	solutions: Solution[];
	title: string;
	articles: any[];
}) {
	return (
		<>
			<div className="relative">
				<Popover className="relative">
					{({ open }) => (
						<>
							<Popover.Button
								className={classNames(
									open ? "text-gray-900" : "text-gray-500",
									"group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 hover:scale-105"
								)}
							>
								<span>{title}</span>
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
								<Popover.Panel className="absolute left-0 mt-3 w-screen max-w-sm transform -translate-x-20">
									{({ close }) => (
										<button
											className="text-left"
											onClick={async () => {
												await close();
											}}
										>
											<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
												<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
													{solutions.map((item) => (
														<Link
															key={item.name}
															href={item.href}
															className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
														>
															<div className="ml-0">
																<p className="text-base font-medium text-gray-900">
																	{item.name}
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
															<li>
																{articles?.map((article) => {
																	return (
																		<li>
																			<Link
																				className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-200"
																				href={`/articles/${article.id}`}
																			>
																				{article.title}
																			</Link>
																		</li>
																	);
																})}
															</li>
														</ul>
													</div>
													<div className="mt-5 text-sm">
														<Link
															href="/articles"
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
			</div>
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
