import React from "react";

const HeroPage: React.FC = () => {
	return (
		<div
			className="bg-cover bg-center h-screen"
			style={{ backgroundImage: "url('/backsplash.png')" }}
		>
			<div className="flex flex-col items-center justify-center h-full text-white p-10">
				<h1 className="text-6xl font-bold">
					Minimalistic and Beautiful Montessori-style Indoor Play
				</h1>
				<p className="text-xl mt-4">
					Bring joy and imagination to your child's playtime
				</p>
				<button className="bg-white px-10 py-3 mt-10 text-gray-800 font-bold rounded-lg hover:bg-gray-100">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default HeroPage;
