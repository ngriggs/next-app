import Link from "next/link";
import BlogCard from "../components/blogCard";

async function getArticles() {
	const res = await fetch(
		`${process.env.PB_LOCALHOST}api/collections/articles/records`
	);

	const data = await res.json();
	return data?.items as any[];
}

export default async function ArticlePage({ params }: any) {
	const articles = await getArticles();
	return (
		<div className="bg-gray-200 p-4 ">
			<h1 className="text-3xl font-bold text-center">Newsletter</h1>
			<div className="my-8" />
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{articles?.map((article) => {
					return (
						<div className="my-4 rounded-xl p-3 hover:transform hover:scale-105 duration-300 ">
							<Article key={article.id} article={article} />
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
		<div>
			<Link href={`/articles/${id}`} className="">
				<BlogCard
					id={id}
					title={title}
					content={content}
					created={created}
					image={`${process.env.PB_LOCALHOST}api/files/articles/${id}/${splash_image}`}
				/>
			</Link>
		</div>
	);
}
