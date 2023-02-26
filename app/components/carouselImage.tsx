import React, { FC } from "react";
import Image from "next/image";

interface CarouselImageProps {
	url: string;
	i: number;
	index: number;
	alt: string;
}

const CarouselImage: FC<CarouselImageProps> = ({ url, i, alt, index }) => {
	return (
		<Image
			priority={true}
			alt={alt}
			onError={() => window.location.reload()}
			placeholder={"blur"}
			blurDataURL={url}
			src={url}
			width={3000}
			height={2000}
			className={`absolute h-[100%] w-[100%] transition-all duration-300 ease-out lg:top-[calc(calc(100vw_/_3_*_2_-_100vw_/_3_*_2_/_2_-_250px)_*_-1)] 2xl:top-[calc(calc(100vw_/_3_*_2_-_100vw_/_3_*_2_/_2_-_450px)_*_-1)]
                ${i === index ? "opacity-100" : "opacity-0"}
                `}
		/>
	);
};

export default CarouselImage;
