import Link from "next/link";

async function getArticles() {
	const res = await fetch(
		"http://127.0.0.1:8090/api/collections/articles/records"
	);

	const data = await res.json();
	return data?.items as any[];
}

export default async function ArticlePage({ params }: any) {
	const articles = await getArticles();
	return (
		<div className="bg-gray-200 p-4 ">
			<h1 className="text-3xl font-bold">Notes</h1>
			<div className="text-2xl font-bold">{articles.length}</div>
			<div className="flex flex-col -mx-4 ">
				{articles?.map((article) => {
					return <Article key={article.id} article={article} />;
				})}
			</div>
		</div>
	);
}

export function Article({ article }: any) {
	const { id, title, content, created } = article || {};

	return (
		<Link href={`/articles/${id}`} className="hover:bg-white">
			<div className="w-1/3 px-4 my-4 text-center">
				<h2 className="text-lg font-bold">{title}</h2>
				<h5 className="text-sm text-gray-600">{content}</h5>
				<p className="text-xs text-gray-600">{created}</p>
			</div>
		</Link>
	);
}
