"use client";
import { Progress } from "@/app/components/ui/progress";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
	const [progress, setProgress] = useState(13);

	useEffect(() => {
		const timer = setTimeout(() => setProgress(100), 50);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="flex h-screen w-full flex-col items-center justify-center">
			<Progress value={progress} className="mx-auto w-[60%]" />
			{/* <CircularProgress size={160} /> */}
		</div>
	);
}
