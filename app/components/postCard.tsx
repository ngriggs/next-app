import Image from "next/image";
import React from "react";

type Props = {
	id: string;
	title: string;
	content: any;
	created: string;
	image: string;
	author: string;
	description: string;
};

const PostCard: React.FC<Props> = ({ title, created, image, description }) => {
	const date = new Date(created);
	return (
		<article className="rounded-lg shadow transition hover:shadow-lg">
			<Image
				alt={title}
				src={image}
				width={1000}
				height={1000}
				className="h-56 w-full object-cover"
			/>
			<div className="h-52 overflow-y-hidden bg-white p-4 sm:p-6">
				<time dateTime={created} className="block text-xs text-gray-500">
					{date.toDateString()}
				</time>
				<h3 className="mt-0.5 text-lg text-[#232323]">{title}</h3>
				<div className="mt-2 max-h-[150px] text-sm font-normal line-clamp-5">
					<p>{description}</p>
				</div>
			</div>
		</article>
	);
};

export default PostCard;
