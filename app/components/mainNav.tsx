import * as React from "react";
import Link from "next/link";

import { Icons } from "@/app/components/icons";
import { Button } from "@/app/components/ui/button";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { MainNavProps } from "../types/nav";
import Image from "next/image";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/app/components/ui/accordion";
import { socialMedia } from "../config/site";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/app/components/ui/hoverCard";

export function MainNav({ items }: MainNavProps) {
	return (
		<div className="flex gap-6 md:gap-0 h-[80px] fixed w-screen left-[calc(-50vw_+_50%)] top-0 z-50 bg-white font-bold">
			<div className="flex flex-1 max-w-7xl mx-auto px-1 sm:px-0">
				<div className="sm:flex sm:flex-1 my-auto">
					<Link href="/" className="">
						<Image
							width={400}
							height={200}
							alt="logo"
							className="-ml-[80px] md:-ml-0 lg:-ml-20 h-11 hover:scale-105"
							src="/giggles_horizontal_logo.svg"
							priority={true}
						/>
					</Link>
				</div>

				{items?.length ? (
					<nav className="hidden space-x-8 md:flex md:flex-1 my-auto justify-center ">
						{items?.map((item, index) => (
							<HoverCard key={index} openDelay={300} closeDelay={300}>
								<HoverCardTrigger className="flex flex-row group cursor-pointer">
									{item.title}
									<Icons.chevronDown
										className="relative ml-2 h-5 w-5 stroke-1 my-auto transition duration-200 group-data-[state=open]:rotate-180"
										aria-hidden="true"
									/>
								</HoverCardTrigger>

								<HoverCardContent
									side="bottom"
									align="start"
									alignOffset={-20}
									className="shrink"
								>
									{item.subheadings?.map((sub) => (
										<Link
											key={sub.name}
											href={sub.href}
											target={sub.target}
											className="-m-3 flex items-start rounded-lg p-3"
										>
											<ul className="ml-0">
												<li className="text-base font-semibold text-gray-500 hover:text-black">
													{sub.name}
												</li>
											</ul>
										</Link>
									))}
								</HoverCardContent>
							</HoverCard>
						))}
					</nav>
				) : null}
				<div className="hidden md:flex md:flex-1 justify-end my-auto pr-7">
					<Link href="/contact" target="_top">
						<Button className="rounded-full">Get in touch</Button>
					</Link>
				</div>
			</div>
			<Popover modal>
				<PopoverTrigger className="md:hidden group px-2">
					<Icons.menu className="mr-2 h-6 w-6 group-data-[state=open]:hidden group-data-[state=open]:transform" />
					<Icons.close className="hidden mr-2 h-6 w-6 group-data-[state=open]:flex group-data-[state=open]:transform" />
				</PopoverTrigger>
				<PopoverContent className="-mt-1 rounded-none border-none h-screen overflow-scroll">
					<Accordion
						type="single"
						collapsible
						className="w-screen pr-10 text-2xl"
					>
						{items?.map((item, index) => (
							<AccordionItem
								value={item.title}
								key={item.title}
								className="my-4"
							>
								<AccordionTrigger>{item.title}</AccordionTrigger>
								<AccordionContent>
									{item.subheadings?.map((sub) => (
										<Link
											key={sub.name}
											href={sub.href}
											target={sub.target}
											className="-m-3 flex items-start rounded-lg p-3 pl-8 my-2 text-lg"
										>
											{sub.name}
										</Link>
									))}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
					<div className="flex justify-center my-auto py-7">
						<Button className="rounded-full">Get in touch</Button>
					</div>
					<div className="flex flex-1 justify-center h-[20vh] mb-[120px] pb-20 items-end">
						{socialMedia.map((social, index) => (
							<Link key={social.id} href={social.link} target={"_blank"}>
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
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
}
