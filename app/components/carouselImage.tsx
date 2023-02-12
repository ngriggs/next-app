import React, { FC } from "react";
import Image from "next/image";

interface CarouselImageProps {
	url: string;
	i: number;
	index: number;
}

const CarouselImage: FC<CarouselImageProps> = ({ url, i, index }) => {
	return (
		<div className="w-full h-full">
			<Image
				priority={true}
				alt="Carousel image"
				onError={() => window.location.reload()}
				placeholder={"blur"}
				blurDataURL={url}
				src={url}
				width={1000}
				height={1000}
				className={`carousel__slide absolute top-0 left-0 w-full h-full transition-all duration-300 ease-out 
                ${i === index ? "opacity-100" : "opacity-0"}
                `}
			/>
		</div>
	);
};

export default CarouselImage;
