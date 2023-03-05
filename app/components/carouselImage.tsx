"use client";
import { FC, useState } from "react";
import Image from "next/image";

interface CarouselImageProps {
	url: string;
	i: number;
	index: number;
	alt: string;
}

const retry = (url: string) => {
	return url;
};

const CarouselImage: FC<CarouselImageProps> = ({ url, i, alt, index }) => {
	const [imageLoader, setImageLoader] = useState(url);
	return (
		<Image
			priority={true}
			alt={alt}
			placeholder={"blur"}
			onError={() => setImageLoader(url)}
			blurDataURL={url}
			src={imageLoader}
			width={1500}
			height={1000}
			className={`absolute h-[100%] w-[100%] transition-all duration-300 ease-out lg:top-[calc(calc(100vw_/_3_*_2_-_100vw_/_3_*_2_/_2_-_250px)_*_-1)] 2xl:top-[calc(calc(100vw_/_3_*_2_-_100vw_/_3_*_2_/_2_-_350px)_*_-1)]
                ${i === index ? "opacity-100" : "opacity-0"}
                `}
		/>
	);
};

export default CarouselImage;
