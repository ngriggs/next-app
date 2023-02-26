import Image from "next/image";

type Props = {
	id: string;
	title: string;
	content: string;
	created: string;
	image: string;
	author: string;
};

const BlogCard: React.FC<Props> = ({
	author,
	title,
	content,
	created,
	image,
}) => {
	const date = new Date(created);
	return (
		<article className="max-h-96 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
			<Image
				alt={title}
				src={image}
				width={1000}
				height={1000}
				className="h-56 w-full object-cover"
			/>
			<div className="bg-white p-4 sm:p-6">
				<time dateTime={created} className="block text-xs text-gray-500">
					{date.toDateString()}
				</time>
				<h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
				<p className="mt-2 text-ellipsis text-sm leading-relaxed text-gray-500 line-clamp-3">
					{content}
				</p>
			</div>
		</article>
	);
};

export default BlogCard;
