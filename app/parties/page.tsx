"use client";
import React, { useState } from "react";

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

	const questions: QuestionProps[] = [
		{
			question: "Can I bring my own decorations?",
			answer: "Yes, you are welcome to bring your own decorations.",
		},
		{
			question: "Is there a limit on the number of guests I can invite?",
			answer: "There is a maximum capacity of 50 guests for our party events.",
		},
		{
			question: "Do you provide catering services?",
			answer:
				"Yes, we provide catering services as part of our premium package or as a separate option.",
		},
	];

	return (
		<div className="p-10">
			<h1 className="mb-5 text-2xl font-bold">Party Events</h1>
			<h2 className="mt-10 mb-5 text-lg font-bold">Party FAQ</h2>
			{questions.map((question) => (
				<Question
					key={question.question}
					question={question.question}
					answer={question.answer}
				/>
			))}

			<div className="mt-10 text-center">
				<button className="rounded-lg bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">
					Book a Party
				</button>
			</div>
		</div>
	);
};

export default PartyEvents;
