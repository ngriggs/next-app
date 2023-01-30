"use client";
import React, { useState, useEffect } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";

function Carousel() {
	const [index, setIndex] = useState(0);
	const images = [
		{
			id: 1,
			url: "/giggles-render.jpg",
			title: "Beyond childcare & preschool",
			description: "A place to learn, connect, create, share & grow",
		},
		{
			id: 2,
			url: "/giggles-render2.png",
			title: "The new lifestyle for families",
			description: "A unique place where family and work-life can thrive",
		},
		{
			id: 3,
			url: "https://mdbootstrap.com/img/Photos/Slides/img%20(125).jpg",
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
		<div className="relative max-w-7xl mx-auto sm:h-[40rem] h-80">
			<div className="carousel relative w-full h-full">
				{images.map(({ url, title, description }, i) => (
					<div
						key={i}
						className={`carousel__slide absolute top-0 left-0 w-full h-full transition-all duration-300 ease-out ${
							i === index ? "opacity-100" : "opacity-0"
						}`}
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
			<div className="carousel__indicator absolute bottom-0 space-x-4 w-full flex justify-center p-2">
				{images.map((_, i) => (
					<button
						key={i}
						className={`text-lg leading-none rounded-full p-[7px] transition-all duration-300 ease-out bg-none ${
							i === index
								? "outline outline-white outline-3"
								: "opacity-100 bg-white"
						}`}
						onClick={() => setIndex(i)}
					></button>
				))}
			</div>
			<div>
				<div className="carousel__nav absolute top-1/2 align-middle left-0 w-full flex justify-between px-1">
					<button
						onClick={prevSlide}
						className="text-lg leading-none rounded-full p-1 transition-all duration-300 ease-out "
					>
						<ChevronLeftIcon className="fill-white opacity-50 hover:opacity-100 h-7 w-7" />
					</button>
					<button
						onClick={nextSlide}
						className="leading-none rounded-full p-1 transition-all duration-300 ease-out"
					>
						<ChevronRightIcon className="fill-white opacity-50 hover:opacity-100 h-7 w-7" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Carousel;
