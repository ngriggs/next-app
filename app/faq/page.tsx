"use client";
import React, { useState } from "react";

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

const FAQ = () => {
	const questions: QuestionProps[] = [
		{
			question: "What is your refund policy?",
			answer: "We have a 30-day refund policy for all of our products.",
		},
		{
			question: "Do you offer warranties on your products?",
			answer: "Yes, we offer a 1-year warranty on all of our products.",
		},
		{
			question: "How long does shipping take?",
			answer: "Shipping typically takes 3-5 business days.",
		},
	];

	return (
		<div className="p-10">
			<h1 className="mb-5 text-2xl font-bold">Frequently Asked Questions</h1>
			{questions.map((question, index) => (
				<Question
					key={index}
					question={question.question}
					answer={question.answer}
				/>
			))}
		</div>
	);
};

export default FAQ;
