"use client";
import React, { useState } from "react";

const WaiverForm = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [signature, setSignature] = useState("");

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		// Submit form data to server
		console.log("Full Name:", fullName);
		console.log("Email:", email);
		console.log("Signature:", signature);
	};

	return (
		<form onSubmit={handleSubmit} className="bg-white p-10 rounded">
			<h1 className="text-2xl font-bold mb-5">Sign Waiver</h1>

			{/* Full Name */}
			<label htmlFor="fullName" className="block font-bold mb-2">
				Full Name
			</label>
			<input
				type="text"
				id="fullName"
				value={fullName}
				onChange={(e) => setFullName(e.target.value)}
				className="border p-2 w-full mb-5"
			/>

			{/* Email */}
			<label htmlFor="email" className="block font-bold mb-2">
				Email
			</label>
			<input
				type="email"
				id="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="border p-2 w-full mb-5"
			/>

			{/* Signature */}
			<label htmlFor="signature" className="block font-bold mb-2">
				Signature
			</label>
			<textarea
				id="signature"
				value={signature}
				onChange={(e) => setSignature(e.target.value)}
				className="border p-2 w-full mb-5"
			/>

			{/* Submit Button */}
			<button
				type="submit"
				className="bg-indigo-500 text-white py-2 px-4 rounded"
			>
				Submit
			</button>
		</form>
	);
};

export default WaiverForm;
