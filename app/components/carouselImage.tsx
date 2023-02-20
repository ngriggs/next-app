import React, { FC } from "react";
import Image from "next/image";

interface CarouselImageProps {
	url: string;
	i: number;
	index: number;
}

const CarouselImage: FC<CarouselImageProps> = ({ url, i, index }) => {
	return (
		<Image
			priority={true}
			alt="Carousel image"
			onError={() => window.location.reload()}
			placeholder={"blur"}
			blurDataURL={url}
			src={url}
			width={4000}
			height={4000}
			className={`carousel__slide absolute  transition-all duration-300 ease-out w-[100%] h-[100%]
                ${i === index ? "opacity-100" : "opacity-0"}
                `}
		/>
	);
};

export default CarouselImage;
