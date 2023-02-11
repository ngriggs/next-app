import Link from "next/link";
import { getAllArticles } from "@/lib/getAllArticles";
import PostCard from "./postCard";

interface Article {
	id: string;
	slug: string;
	title: string;
	content: {
		value: string;
	};
	_createdAt: string;
	images: {
		url: string;
	};
	author: string;
}

interface Props {
	article: Article;
}

export function Post({ article }: Props) {
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
				content=""
				created={created}
				author={author}
				image={splash_image}
			/>
		</Link>
	);
}

const HomePage = async () => {
	const postCollection = await getAllArticles();

	return (
		<div className="container mx-auto">
			<div className="container mx-auto px-4">
				<div className="md:w-5/6 md:mx-auto md:max-w-2xl">
					<h1 className="text-black text-3xl text-center font-bold sm:text-4xl">
						Blog
					</h1>
					<p className="text-center text-lg mt-2">
						Stay up to date with the latest fun and inspiration at Giggles Play
						- read our blog!
					</p>
				</div>
			</div>
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{postCollection.allArticles?.map((edge: Article) => {
					return (
						<div
							key={edge.id}
							className="my-4 min-h-[30vh] rounded-xl p-3 hover:scale-105 duration-300"
						>
							<Post article={edge} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HomePage;
