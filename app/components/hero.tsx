import React from "react";
import SignUpModal from "./signupModal";

const HeroPage: React.FC = () => {
	return (
		<div className="bg-cover bg-center h-1/2">
			<div className="flex flex-col items-center justify-center h-full text-black p-10">
				<p className="text-xl mt-4 font-extrabold">
					Bring joy and imagination to your child's playtime
				</p>
				<SignUpModal />
			</div>
		</div>
	);
};

export default HeroPage;
