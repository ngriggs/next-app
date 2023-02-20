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
		<article className="h-104 rounded-lg shadow transition hover:shadow-lg">
			<img alt={title} src={image} className="h-56 w-full object-cover" />
			<div className="bg-white p-4 sm:p-6 h-52 overflow-y-hidden">
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
