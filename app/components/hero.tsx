import React from "react";
import NewsLetterSignUpForm from "./subscribeForm";

const HeroPage: React.FC = () => {
	return (
		<div
			className="bg-cover bg-center h-screen"
			style={{ backgroundImage: "url('/giggles_moodboard_1.svg')" }}
		>
			<div className="flex flex-col items-center justify-top h-full text-black p-10">
				<p className="text-xl mt-4 font-summerVibesLight">
					Bring joy and imagination to your child's playtime
				</p>
				<NewsLetterSignUpForm />
			</div>
		</div>
	);
};

export default HeroPage;
