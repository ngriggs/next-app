import React from "react";

interface ButtonProps {
	label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
	return (
		<button className="bg-[#ec6a52] hover:scale-105 hover:bg-[#f7ae47] text-white font-bold py-2 px-4 rounded-3xl border border-transparent">
			{label}
		</button>
	);
};

export default Button;
