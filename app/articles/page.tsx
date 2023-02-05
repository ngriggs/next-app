import Link from "next/link";
import BlogCard from "../components/blogCard";

async function getArticles() {
	const res = await (
		await fetch(`https://gigglesplay.fly.dev/api/collections/articles/records`)
	).json();
	return res?.items as any[];
}

export default async function ArticlePage() {
	const articlesData = await getArticles();
	const articles = await Promise.all(articlesData);
	const sortedArticles = articles.sort(
		(a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
	);

	return (
		<div className="bg-gray-200 p-4 ">
			<h1 className="text-3xl font-bold text-center">Newsletter</h1>
			<div className="my-8" />
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{sortedArticles?.map((article) => {
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

function Article({ article }: any) {
	const { id, title, content, created, splash_image } = article || {};

	return (
		<Link href={`/articles/${id}`}>
			<BlogCard
				id={id}
				title={title}
				content={content}
				created={created}
				image={`https://gigglesplay.fly.dev/api/files/articles/${id}/${splash_image}`}
			/>
		</Link>
	);
}
