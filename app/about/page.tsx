"use client";
import React, { useState } from "react";

const Accordion: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="flex flex-col my-8 justify-center">
			<button
				className={`${
					isOpen ? "text-gray-900" : "text-gray-600"
				} font-medium p-2 border border-gray-400 rounded-lg focus:outline-none focus:shadow-outline`}
				onClick={() => setIsOpen(!isOpen)}
			>
				Accordion Title
			</button>

			{isOpen && (
				<div className="relative bg-white border border-gray-400 rounded-lg shadow-lg mt-1">
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
