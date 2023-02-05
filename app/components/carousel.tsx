"use client";
import React, { useState, useEffect } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";

function Carousel() {
	const [index, setIndex] = useState(0);

	const images = [
		{
			id: 1,
			url: "giggles_moodboard_1.svg",
			title: "Education re-invented",
			description:
				"Teaching kids how to think for themselves and solve meaningful problems",
		},
		{
			id: 2,
			url: "card_2.svg",
			title: "Education re-invented",
			description:
				"Teaching kids how to think for themselves and solve meaningful problems",
		},
	];

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIndex((index + 1) % images.length);
		}, 6000);
		return () => clearInterval(intervalId);
	}, [index, images]);

	const nextSlide = () => {
		if (index === images.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	};

	const prevSlide = () => {
		if (index === 0) {
			setIndex(images.length - 1);
		} else {
			setIndex(index - 1);
		}
	};

	return (
		<div className="relative rounded-b-lg max-w-7xl mx-auto sm:h-[40rem] h-80 overflow-hidden flex flex-wrap">
			<div className="carousel relative w-full h-full">
				{images.map(({ url, title, description }, i) => (
					<div
						key={i}
						className={`carousel__slide absolute top-0 left-0 w-full h-full transition-all duration-300 ease-out 
						${i === index ? "opacity-100" : "opacity-0"}
						`}
						style={{
							backgroundImage: `url("${url}")`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						{/* <div className="carousel__text relative top-3/4 flex justify-center items-center transition-all duration-300 ease-out">
							<div className="relative mx-auto invisible sm:visible rounded-md text-center text-white px-6 py-1 bg-black bg-opacity-50 inline-block">
								<h5 className="carousel__title text-xl">{title}</h5>
								<p className="carousel__description">{description}</p>
							</div>
						</div> */}
					</div>
				))}
			</div>
			<div className="carousel__indicator absolute z-30 bottom-0 space-x-4 w-full flex justify-center p-2 mb-1">
				{images.map((_, i) => (
					<button
						key={i}
						onClick={() => setIndex(i)}
						className={`rounded-full p-[7px] transition-all duration-300 ease-out bg-none ${
							i === index ? "ring ring-white" : "opacity-100 bg-white"
						}`}
					></button>
				))}
			</div>
			<div>
				<div className="carousel__nav absolute align-middle z-20 left-0 top-0 w-full h-full flex justify-between px-1">
					<button
						onClick={prevSlide}
						className="text-lg leading-none rounded-full p-1 transition-all duration-300 ease-out w-10!important"
					>
						<ChevronLeftIcon className="fill-white opacity-75 hover:opacity-100 h-7 w-16" />
					</button>
					<button
						onClick={nextSlide}
						className="leading-none rounded-full p-1 transition-all duration-300 ease-out"
					>
						<ChevronRightIcon className="fill-white opacity-75 hover:opacity-100 h-7 w-16" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Carousel;
