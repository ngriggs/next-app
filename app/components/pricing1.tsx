import React from "react";
import { Button } from "./ui/button";

const CheckIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="mr-2 h-5 w-5 flex-shrink-0 self-center text-sky-600"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path
			fillRule="evenodd"
			d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
			clipRule="evenodd"
		/>
	</svg>
);
const XIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="mr-2 h-5 w-5 flex-shrink-0 self-center text-gray-500"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path
			fillRule="evenodd"
			d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
			clipRule="evenodd"
		/>
	</svg>
);

const cards = [
	{
		price: "Price 0",
		contents: [
			{
				check: <CheckIcon />,
				description: "Donec at tristique.",
			},
			{
				check: <CheckIcon />,
				description: "Nullam sed aliquam eros, ac.",
			},
			{
				check: <CheckIcon />,
				description: "Maecenas dignissim convallis sem vel.",
			},
			{
				check: <XIcon />,
				description: "In rhoncus.",
				lineThrough: "line-through",
			},
			{
				check: <XIcon />,
				description: "Etiam vulputate eleifend.",
				lineThrough: "line-through",
			},
			{
				check: <XIcon />,
				description: "Lorem ipsum dolor.",
				lineThrough: "line-through",
			},
		],
	},
	{
		price: "Price 1",
		contents: [
			{
				check: <CheckIcon />,
				description: "Donec at tristique.",
			},
			{
				check: <CheckIcon />,
				description: "Nullam sed aliquam eros, ac.",
			},
			{
				check: <CheckIcon />,
				description: "Maecenas dignissim convallis sem vel.",
			},
			{
				check: <XIcon />,
				description: "In rhoncus.",
				lineThrough: "line-through",
			},
			{
				check: <XIcon />,
				description: "Etiam vulputate eleifend.",
				lineThrough: "line-through",
			},
			{
				check: <XIcon />,
				description: "Lorem ipsum dolor.",
				lineThrough: "line-through",
			},
		],
	},
	{
		price: "Price 2",
		contents: [
			{
				check: <CheckIcon />,
				description: "Donec at tristique.",
			},
			{
				check: <CheckIcon />,
				description: "Nullam sed aliquam eros, ac.",
			},
			{
				check: <CheckIcon />,
				description: "Maecenas dignissim convallis sem vel.",
			},
			{
				check: <XIcon />,
				description: "In rhoncus.",
				lineThrough: "line-through",
			},
			{
				check: <XIcon />,
				description: "Etiam vulputate eleifend.",
				lineThrough: "line-through",
			},
			{
				check: <XIcon />,
				description: "Lorem ipsum dolor.",
				lineThrough: "line-through",
			},
		],
	},
	{
		price: "Price 3",
		contents: [
			{
				check: <CheckIcon />,
				description: "Donec at tristique.",
			},
			{
				check: <CheckIcon />,
				description: "Nullam sed aliquam eros, ac.",
			},
			{
				check: <CheckIcon />,
				description: "Maecenas dignissim convallis sem vel.",
			},
			{
				check: <XIcon />,
				description: "In rhoncus.",
				lineThrough: "line-through",
			},
			{
				check: <XIcon />,
				description: "Etiam vulputate eleifend.",
				lineThrough: "line-through",
			},
			{
				check: <XIcon />,
				description: "Lorem ipsum dolor.",
				lineThrough: "line-through",
			},
		],
	},
	{
		price: "Price 4",
		contents: [
			{
				check: <CheckIcon />,
				description: "Maecenas dignissim convallis sem vel.",
			},
			{
				check: <CheckIcon />,
				description: "Donec at tristique.",
			},
		],
	},
];

const PricingCard = ({ ...props }) => {
	return (
		<>
			<div className="col-span-3 my-4 flex flex-col items-center rounded-2xl bg-gray-100 py-9 px-12 text-gray-600 shadow-xl md:col-span-1 ">
				{/* Offer name */}
				<h2 className="font-title mb-1 text-xl font-semibold uppercase tracking-wider">
					Basic
				</h2>
				{/* Price */}
				<div className="flex items-baseline p-4">
					<h3 className="font-title text-5xl font-bold ">{props.price}</h3>
					<span className="ml-2">/ month</span>
				</div>
				{/* Divide line */}
				<span className="h-1.5 w-28 rounded-3xl bg-sky-600" />
				{/* Features */}
				<ul className="my-12 flex flex-col">
					{props.contents.map((feature: any) => (
						<li className={`mb-4 inline-flex ${feature.lineThrough}`}>
							{feature.check}
							{feature.description}
						</li>
					))}
				</ul>
				{/* Subscribe */}
				<Button
					variant={"giggles"}
					size={"lg"}
					className="rounded-3xl bg-giggles-blue-light text-[#232323]"
				>
					Subscribe
				</Button>
			</div>
		</>
	);
};

const Pricing1 = () => {
	return (
		<div className="relative left-[calc(-50vw_+_50%)] flex w-screen flex-col items-center rounded-lg bg-gradient-to-tr from-giggles-blue to-giggles-red-light py-10 px-5">
			{" "}
			{/* Container */}
			{/* :TITLE */}
			<div className="mb-16 text-center text-white">
				<h1 className="font-title py-2 text-5xl font-black tracking-wider antialiased">
					Fancy Table 1
				</h1>
				<p className="text-lg">
					A beautiful and classy pricing table made with Tailwind CSS and love !{" "}
					<br />
					by Fancy Tailwind.
				</p>
			</div>
			{/* :PRICING TABLES */}
			<div className="grid max-w-7xl grid-cols-3 gap-6">
				{cards.map((card, idx) => (
					<PricingCard key={idx} price={card.price} contents={card.contents} />
				))}
			</div>
		</div>
	);
};

export default Pricing1;
