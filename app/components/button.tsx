"use client";
import React from "react";

interface ButtonProps {
	label: string;
	bgColor: string;
	hoverColor: string;
	styles: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
	label,
	bgColor,
	hoverColor,
	styles,
	onClick,
}) => {
	return (
		<button
			onClick={() => (onClick ? onClick() : null)}
			className={`bg-${bgColor} hover:scale-105 hover:bg-${hoverColor} text-white font-bold py-2 px-4 rounded-3xl border border-transparent ${styles}`}
		>
			{label}
		</button>
	);
};

export default Button;
