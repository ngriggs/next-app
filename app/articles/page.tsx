import Link from "next/link";
import { Suspense } from "react";
import BlogCard from "../components/blogCard";
import dynamic from "next/dynamic";

async function getArticles() {
	const res = await (
		await fetch(`${process.env.PB_LOCALHOST}api/collections/articles/records`)
	).json();
	return res?.items as any[];
}

export default async function ArticlePage() {
	const articlesData = await getArticles();
	const articles = await Promise.all(articlesData);
	return (
		<div className="bg-gray-200 p-4 ">
			<h1 className="text-3xl font-bold text-center">Newsletter</h1>
			<div className="my-8" />
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{articles?.map((article) => {
					return (
						<div
							key={article.id}
							className="my-4 rounded-xl p-3 hover:scale-105 duration-300 "
						>
							<Article article={article} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export function Article({ article }: any) {
	const { id, title, content, created, splash_image } = article || {};

	return (
		<Link href={`/articles/${id}`}>
			<BlogCard
				id={id}
				title={title}
				content={content}
				created={created}
				image={`${process.env.PB_LOCALHOST}api/files/articles/${id}/${splash_image}`}
			/>
		</Link>
	);
}
