import Link from "next/link";
import { getAllArticles } from "@/lib/getAllArticles";
import PostCard from "./postCard";
import Button from "./button";

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
		<div className="mx-auto py-16 lg:py-20">
			<div className="container mx-auto px-4 ">
				<div className="md:w-5/6 md:mx-auto md:max-w-2xl">
					<h1 className="text-[#232323] text-3xl text-center font-summerVibesSolid font-normal sm:text-4xl">
						insights
					</h1>
					<p className="text-center text-lg mt-2">
						Stay up to date with the latest fun and inspiration at Giggles Play
						- read our blog!
					</p>
				</div>
			</div>
			<div className="flex place-content-center my-8">
				<Link href="/news" target={"_top"}>
					<Button
						label="learn more"
						bgColor=""
						hoverColor=""
						styles="items-center font-normal"
					/>
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
