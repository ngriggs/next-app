"use client";
import React, { useState } from "react";

const Accordion: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="my-8 flex flex-col justify-center">
			<button
				className={`${
					isOpen ? "text-gray-900" : "text-gray-600"
				} rounded-lg border border-gray-400 p-2 font-medium focus:outline-none`}
				onClick={() => setIsOpen(!isOpen)}
			>
				Accordion Title
			</button>

			{isOpen && (
				<div className="relative mt-1 rounded-lg border border-gray-400 bg-white shadow-lg">
					<div className="p-4">
						<p className="text-gray-700">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Accordion;
