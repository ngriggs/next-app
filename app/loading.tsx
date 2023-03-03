"use client";
import { Progress } from "@/app/components/ui/progress";
import { useState, useEffect } from "react";

export default function Loading() {
	const [progress, setProgress] = useState(13);
	useEffect(() => {
		const timer = setTimeout(() => setProgress(100), 50);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="flex h-screen w-full flex-col items-center justify-center">
			<Progress value={progress} className="mx-auto w-[60%]" />
			{/* <svg
				version="1.1"
				id="L2"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 100 100"
				fill="black"
			>
				<circle
					fill="none"
					stroke="#fff"
					stroke-width="4"
					stroke-miterlimit="10"
					cx="50"
					cy="50"
					r="48"
				/>
				<line
					fill="none"
					stroke-linecap="round"
					stroke="#fff"
					stroke-width="4"
					stroke-miterlimit="10"
					x1="50"
					y1="50"
					x2="85"
					y2="50.5"
				>
					<animateTransform
						attributeName="transform"
						dur="2s"
						type="rotate"
						from="0 50 50"
						to="360 50 50"
						repeatCount="indefinite"
					/>
				</line>
				<line
					fill="none"
					stroke-linecap="round"
					stroke="#fff"
					stroke-width="4"
					stroke-miterlimit="10"
					x1="50"
					y1="50"
					x2="49.5"
					y2="74"
				>
					<animateTransform
						attributeName="transform"
						dur="15s"
						type="rotate"
						from="0 50 50"
						to="360 50 50"
						repeatCount="indefinite"
					/>
				</line>
			</svg> */}
		</div>
	);
}
