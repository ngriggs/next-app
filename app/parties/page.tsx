"use client";
import Link from "next/link";
import React, { useState } from "react";
import Pricing1 from "../components/pricing1";
import { Button } from "../components/ui/button";

interface PackageProps {
	name: string;
	description: string;
	price: string;
}

const Package = ({ name, description, price }: PackageProps) => (
	<div className="mb-6">
		<h3 className="text-lg font-bold">{name}</h3>
		<p className="text-gray-700">{description}</p>
		<p className="text-gray-700">Price: {price}</p>
	</div>
);

interface QuestionProps {
	question: string;
	answer: string;
}

const Question = ({ question, answer }: QuestionProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="mb-10">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full border-b-2 border-indigo-600 bg-white py-3 px-4 text-left font-bold text-indigo-600"
			>
				{question}
				<span className="float-right">
					{isOpen ? <i className=""></i> : <i className=""></i>}
				</span>
			</button>
			{isOpen && (
				<div className="bg-gray-200 p-5">
					<p className="text-gray-700">{answer}</p>
				</div>
			)}
		</div>
	);
};

const PartyEvents = () => {
	const packages: PackageProps[] = [
		{
			name: "Basic Package",
			description: "Includes basic party decorations and refreshments.",
			price: "$200",
		},
		{
			name: "Deluxe Package",
			description:
				"Includes premium party decorations, refreshments, and entertainment.",
			price: "$400",
		},
		{
			name: "Premium Package",
			description:
				"Includes all-inclusive party decorations, refreshments, entertainment, and catering.",
			price: "$600",
		},
	];

	return (
		<div className="p-10">
			<Pricing1 />

			<h1 className="mb-5 text-2xl font-bold">Party Events</h1>
			<h2 className="mt-10 mb-5 text-lg font-bold">Party FAQ</h2>
			{packages.map((pkg) => (
				<Package
					key={pkg.description}
					name={pkg.name}
					description={pkg.description}
					price={pkg.price}
				/>
			))}

			<div className="mt-10 text-center">
				<Link href="/contact" target={"_top"}>
					<Button variant={"giggles"}>Book a Party</Button>
				</Link>
			</div>
		</div>
	);
};

export default PartyEvents;
