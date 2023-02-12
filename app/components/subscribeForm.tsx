"use client";
import React, { useRef } from "react";

interface ChildProps {
	onClick: () => void;
}

const NewsLetterSignUpForm: React.FC<ChildProps> = ({ onClick }) => {
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

		onClick();
	};

	return (
		<form onSubmit={subscribeUser} className="flex flex-col space-y-3">
			<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
			<div className="flex flex-row">
				<div className="absolute pl-4 pt-3">
					<svg
						aria-hidden="true"
						className="w-5 h-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 135.35 83.12"
						fill="#f7ae47"
					>
						<path d="M131.59,83.12H3.77c-1.56,0-2.95-.96-3.51-2.41-.56-1.45-.17-3.1,.98-4.15L47.09,35c1.33-1.21,3.33-1.31,4.77-.23l15.81,11.73,15.81-11.73c1.44-1.07,3.44-.97,4.77,.23l45.85,41.56c1.15,1.05,1.55,2.69,.99,4.15-.56,1.45-1.96,2.41-3.51,2.41Zm-118.06-7.53H121.82l-36.33-32.92-15.57,11.55c-1.33,.99-3.16,.99-4.49,0l-15.57-11.55L13.53,75.58Z" />
						<path d="M3.77,83.12c-.52,0-1.04-.11-1.53-.32C.88,82.19,0,80.84,0,79.35V3.77C0,2.34,.8,1.04,2.07,.4,3.34-.24,4.87-.11,6.01,.74L51.87,34.77c.91,.67,1.46,1.71,1.52,2.84,.06,1.13-.4,2.22-1.23,2.98L6.3,82.14c-.71,.64-1.61,.98-2.53,.98ZM7.53,11.25v59.6L43.69,38.08,7.53,11.25Z" />
						<path d="M131.59,83.12c-.92,0-1.82-.34-2.53-.98l-45.85-41.56c-.84-.76-1.29-1.85-1.23-2.98,.06-1.13,.61-2.17,1.52-2.84L129.34,.74c1.14-.85,2.67-.98,3.94-.34,1.27,.64,2.07,1.94,2.07,3.36V79.35c0,1.49-.88,2.84-2.24,3.44-.49,.22-1.01,.32-1.53,.32Zm-39.93-45.03l36.16,32.77V11.25l-36.16,26.83Z" />
						<path d="M67.68,54.96c-.79,0-1.58-.25-2.24-.74L1.52,6.79C.22,5.82-.32,4.13,.19,2.58,.7,1.04,2.14,0,3.77,0h127.82c1.62,0,3.07,1.04,3.58,2.58,.51,1.54-.03,3.24-1.33,4.21l-63.91,47.42c-.67,.49-1.46,.74-2.24,.74ZM15.16,7.53l52.51,38.97L120.19,7.53H15.16Z" />
					</svg>
				</div>

				<input
					type="email"
					name="email"
					id="email"
					className="bg-white border border-[#fadfb4] focus:border-[#f7ae47] text-[#232323] placeholder:text-[#232323] text-sm rounded-l-3xl block w-full p-2.5 pl-10  focus:outline-none"
					placeholder="email"
					ref={inputRef}
					required
				/>
				<button className="bg-[#f7ae47] border-[#f7ae47] border py-2 px-4 rounded-r-3xl text-white">
					→
				</button>
			</div>
		</form>
	);
};

export default NewsLetterSignUpForm;
