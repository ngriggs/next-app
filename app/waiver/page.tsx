"use client";
import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";

const WaiverForm = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [signature, setSignature] = useState("");

	const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
		event?.preventDefault();

		// Submit form data to server
		console.log("Full Name:", fullName);
		console.log("Email:", email);
		console.log("Signature:", signature);
	};

	return (
		<form onSubmit={handleSubmit} className="rounded-lg bg-white p-10">
			<h1 className="mb-5 text-2xl font-bold">Sign Waiver</h1>

			{/* Full Name */}
			<label htmlFor="fullName" className="mb-2 block font-bold">
				Full Name
			</label>
			<input
				type="text"
				id="fullName"
				value={fullName}
				onChange={(e) => setFullName(e.target.value)}
				className="mb-5 w-full border border-gray-400 p-2"
			/>

			{/* Email */}
			<label htmlFor="email" className="mb-2 block font-bold">
				Email
			</label>
			<input
				type="email"
				id="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="mb-5 w-full border border-gray-400 p-2"
			/>

			{/* Signature */}
			<label htmlFor="signature" className="mb-2 block font-bold">
				Signature
			</label>
			<textarea
				id="signature"
				value={signature}
				onChange={(e) => setSignature(e.target.value)}
				className="mb-5 w-full border border-gray-400 p-2"
			/>

			{/* Submit Button */}
			<Button type="submit">Submit</Button>
		</form>
	);
};

export default WaiverForm;
