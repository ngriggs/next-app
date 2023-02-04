"use client";
import React, { useRef } from "react";
import Button from "./button";

const NewsLetterSignUpForm: React.FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const subscribeUser = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// this is where your mailchimp request is made

		const res = await fetch("/api/subscribeUser", {
			body: JSON.stringify({
				email: inputRef.current?.value || "",
			}),

			headers: {
				"Content-Type": "application/json",
			},

			method: "POST",
		});
	};

	return (
		<form onSubmit={subscribeUser} className="flex flex-col space-y-3">
			<label htmlFor="email-input" className="form__label">
				Sign up to our newsletter
			</label>

			<input
				type="email"
				className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
				id="exampleInput125"
				ref={inputRef}
				placeholder="Email address"
			/>
			<Button label="subscribe" />
		</form>
	);
};

export default NewsLetterSignUpForm;
