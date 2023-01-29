async function getArticle(articleId: string) {
	const res = await fetch(
		`http://127.0.0.1:8090/api/collections/articles/records/${articleId}`
	);
	const data = await res.json();
	return data;
}

export default async function ArticlePage({ params }: any) {
	const article = await getArticle(params.id);

	return (
		<div>
			<h1>articles/{article.id}</h1>
			<div>
				<h2>{article.title}</h2>
				<h5>{article.content}</h5>
				<p>{article.created}</p>
			</div>
		</div>
	);
}
