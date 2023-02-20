"use client";
import React, { useState, useEffect, TouchEvent } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import CarouselImage from "./carouselImage";

interface Image {
	id: number;
	url: string;
	title: string;
	description: string;
}

function Carousel({ images }: { images: Image[] }) {
	const [index, setIndex] = useState(0);
	const [touchPosition, setTouchPosition] = useState(0);

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
	const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
		const touchDown = e.touches[0].clientX;
		setTouchPosition(touchDown);
	};
	const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
		const touchDown = touchPosition;

		if (touchDown === 0) {
			return;
		}

		const currentTouch = e.touches[0].clientX;
		const diff = touchDown - currentTouch;

		if (diff > 5) {
			nextSlide();
		}

		if (diff < -5) {
			prevSlide();
		}

		setTouchPosition(0);
	};

	return (
		<div
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			className="relative grid w-screen overflow-hidden"
			// className={`relative mx-auto h-[calc(100vw_*_2_/_3)] xl:max-h-[40rem] xl:max-w-[calc(640px_*_3_/_2)] 2xl:max-h-[853.333px] 2xl:max-w-7xl overflow-auto touch-pan-x flex flex-wrap`}
		>
			<div className="">
				{images.map(({ url }, i) => (
					<CarouselImage key={i} url={url} i={i} index={index} />
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
						className="text-lg leading-none rounded-full p-1 transition-all duration-300 ease-out"
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
