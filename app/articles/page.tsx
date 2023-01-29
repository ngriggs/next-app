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
		<div>
			<h1>Notes</h1>
			<div>{articles.length}</div>
			<div>
				{articles?.map((article) => {
					return <Article key={article.id} article={article} />;
				})}
			</div>
		</div>
	);
}

function Article({ article }: any) {
	const { id, title, content, created } = article || {};

	return (
		<Link href={`/articles/${id}`}>
			<div>
				<h2>{title}</h2>
				<h5>{content}</h5>
				<p>{created}</p>
			</div>
		</Link>
	);
}
