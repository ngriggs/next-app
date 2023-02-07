"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SwipeableImage: React.FC = () => {
	const [index, setIndex] = useState(0);
	const [width, setWidth] = useState(0);
	const carousel = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (carousel.current) {
			setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
		}
	}, []);

	const images = ["moodboard.svg", "card2.svg", "card3.svg", "card4.svg"];

	return (
		<div className="relative h-screen w-full overflow-hidden">
			<motion.div
				ref={carousel}
				className="carousel cursor-grab overflow-hidden"
				whileTap={{ cursor: "grabbing" }}
			>
				<motion.div
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
					className="inner-carousel flex flex-row "
				>
					{images.map((image) => {
						return (
							<motion.div
								key={image}
								className="min-h-[40rem] min-w-[60rem] p-[40px] snap-x snap-mandatory"
							>
								<img
									className="w-[100%] h-[100%] rounded-lg pointer-events-none snap-center"
									src={image}
									alt=""
								/>
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default SwipeableImage;
