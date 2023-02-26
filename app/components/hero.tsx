import React from "react";
import SignUpModal from "./signupModal";

const HeroPage: React.FC = () => {
	return (
		<div className="h-1/2 bg-cover bg-center text-center">
			<div className="flex h-full flex-col items-center justify-center p-4 py-20 text-[#232323]">
				<p className="mt-4 text-xl font-extrabold">
					Bring joy and imagination to your child&apos;s playtime
				</p>
				<SignUpModal />
			</div>
		</div>
	);
};

export default HeroPage;
