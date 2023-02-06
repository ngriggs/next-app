import React from "react";
import { render } from "datocms-structured-text-to-html-string";

type Props = {
	id: string;
	title: string;
	content: any;
	created: string;
	image: string;
	author: string;
};

const PostCard: React.FC<Props> = ({
	author,
	title,
	content,
	created,
	image,
}) => {
	const date = new Date(created);
	return (
		<article className="overflow-hidden max-h-96 rounded-lg shadow transition hover:shadow-lg">
			<img alt={title} src={image} className="h-56 w-full object-cover" />
			<div className="bg-white p-4 sm:p-6">
				<time dateTime={created} className="block text-xs text-gray-500">
					{date.toDateString()}
				</time>
				<h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>

				<article className="prose lg:prose-xl">
					<div
						dangerouslySetInnerHTML={{
							__html: render(content) || "",
						}}
					/>
				</article>
			</div>
		</article>
	);
};

export default PostCard;
