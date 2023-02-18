import React, { FC } from "react";
import Image from "next/image";

interface CarouselImageProps {
	url: string;
	i: number;
	index: number;
}

const CarouselImage: FC<CarouselImageProps> = ({ url, i, index }) => {
	return (
		<div className="">
			<Image
				priority={true}
				alt="Carousel image"
				onError={() => window.location.reload()}
				placeholder={"blur"}
				blurDataURL={url}
				src={url}
				width={1280}
				height={400}
				className={`carousel__slide absolute object-center transition-all duration-300 ease-out 
                ${i === index ? "opacity-100" : "opacity-0"}
                `}
			/>
		</div>
	);
};

export default CarouselImage;
