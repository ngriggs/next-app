import React from "react";

type Props = {
	id: string;
	title: string;
	content: string;
	created: string;
	image: string;
};

const BlogCard: React.FC<Props> = ({ id, title, content, created, image }) => {
	const date = new Date(created);
	return (
		<article className="overflow-hidden max-h-96 rounded-lg shadow transition hover:shadow-lg">
			<img alt={title} src={image} className="h-56 w-full object-cover" />
			<div className="bg-white p-4 sm:p-6">
				<time dateTime={created} className="block text-xs text-gray-500">
					{date.toDateString()}
				</time>
				<h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
				<p className="mt-2 text-sm leading-relaxed text-ellipsis text-gray-500 line-clamp-3">
					{content}
				</p>
			</div>
		</article>
	);
};

export default BlogCard;
