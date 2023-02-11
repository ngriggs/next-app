import Link from "next/link";
import PostCard from "./postCard";

export default function Post({ article }: any) {
	const slug = article.slug;
	const title = article.title;
	const content = article.content.value;
	const created = article._createdAt;
	const splash_image = article.images.url;
	const author = article.author;

	return (
		<Link href={`/posts/${slug}`}>
			<PostCard
				id={slug}
				title={title}
				content={content}
				created={created}
				author={author}
				image={splash_image}
			/>
		</Link>
	);
}
