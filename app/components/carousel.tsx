"use client";
import React, { useState, useEffect, TouchEvent } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import CarouselImage from "./carouselImage";
import { AspectRatio } from "./ui/aspectRatio";

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
		>
			<AspectRatio ratio={3 / 2}>
				{images.map(({ url, description }, i) => (
					<CarouselImage
						key={i}
						url={url}
						i={i}
						index={index}
						alt={description}
					/>
				))}
			</AspectRatio>
			<div className="absolute bottom-0 z-30 mb-1 flex w-full justify-center space-x-4 p-2">
				{images.map((_, i) => (
					<button
						key={i}
						onClick={() => setIndex(i)}
						className={`rounded-full bg-none p-[7px] transition-all duration-300 ease-out ${
							i === index ? "ring ring-white" : "bg-white opacity-100"
						}`}
					></button>
				))}
			</div>

			{/* A tagline and a description of the space */}

			{/* <div className="absolute left-0 top-10 z-30 m-4 my-auto w-1/2 bg-giggles-navy/40 p-4">
				<h2 className="text-3xl font-extrabold text-white">
					Growing Little Minds, One Giggle at a Time: Giggles Play
				</h2>
				<p className="p-2 text-lg text-white">
					Giggles Play is a Reggio Emilia-inspired indoor playground for
					children under 7. Our space encourages exploration, creativity, and
					imagination through play. We offer classes, workshops, and birthday
					parties to support every child&apos;s growth and development.
				</p>
			</div> */}

			<div>
				<div className="absolute left-0 top-0 z-20 flex h-full w-full justify-between px-1 align-middle">
					<button
						onClick={prevSlide}
						className="rounded-full p-1 text-lg leading-none transition-all duration-300 ease-out"
					>
						<ChevronLeftIcon className="h-10 w-16 fill-white opacity-75 hover:opacity-100" />
					</button>
					<button
						onClick={nextSlide}
						className="rounded-full p-1 leading-none transition-all duration-300 ease-out"
					>
						<ChevronRightIcon className="h-10 w-16 fill-white opacity-75 hover:opacity-100" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Carousel;
