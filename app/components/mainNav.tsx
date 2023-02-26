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
		<div className="fixed left-[calc(-50vw_+_50%)] top-0 z-50 flex h-[80px] w-screen gap-6 bg-white font-bold md:gap-0">
			<div className="mx-auto flex max-w-7xl flex-1 px-1 sm:px-0">
				<div className="my-auto sm:flex sm:flex-1">
					<Link href="/" className="hover:cursor-pointer">
						<Image
							width={400}
							height={200}
							alt="logo"
							className="ml-[-80px] h-11 hover:translate-y-[-1px] md:ml-0 lg:ml-[-80px]"
							src="/giggles_horizontal_logo.svg"
							priority={true}
						/>
					</Link>
				</div>

				{items?.length ? (
					<nav className="my-auto hidden justify-center space-x-8 md:flex md:flex-1 ">
						{items?.map((item, index) => (
							<Popover key={index}>
								<PopoverTrigger className="group flex cursor-pointer flex-row text-[#232323] hover:underline hover:underline-offset-[8px]">
									{item.title}
									<Icons.chevronDown
										className="relative my-auto ml-2 h-5 w-5 stroke-1 transition duration-200 group-data-[state=open]:rotate-180"
										aria-hidden="true"
									/>
								</PopoverTrigger>

								<PopoverContent
									side="bottom"
									align="start"
									alignOffset={-20}
									className="shrink text-[#232323]"
								>
									{item.subheadings?.map((sub) => (
										<Link
											key={sub.name}
											href={sub.href}
											target={sub.target}
											className="-m-3 flex items-start rounded-lg p-3"
										>
											<ul className="ml-0">
												<li className="text-base font-medium hover:underline hover:underline-offset-2">
													{sub.name}
												</li>
											</ul>
										</Link>
									))}
								</PopoverContent>
							</Popover>
						))}
					</nav>
				) : null}
				<div className="my-auto hidden justify-end pr-7 md:flex md:flex-1">
					<Link href="/contact" target="_top">
						<Button variant={"giggles"} className="rounded-full bg-giggles-red">
							Get in touch
						</Button>
					</Link>
				</div>
			</div>
			<Popover modal>
				<PopoverTrigger className="group px-2 md:hidden">
					<Icons.menu className="mr-2 h-6 w-6 group-data-[state=open]:hidden group-data-[state=open]:transform" />
					<Icons.close className="mr-2 hidden h-6 w-6 group-data-[state=open]:flex group-data-[state=open]:transform" />
				</PopoverTrigger>
				<PopoverContent className="-mt-1 h-screen overflow-scroll rounded-none border-none">
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
											className="-m-3 my-2 flex items-start rounded-lg p-3 pl-8 text-lg"
										>
											{sub.name}
										</Link>
									))}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
					<div className="my-auto flex justify-center py-7">
						<Button className="rounded-full">Get in touch</Button>
					</div>
					<div className="mb-[120px] flex h-[20vh] flex-1 items-end justify-center pb-20">
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
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
}
