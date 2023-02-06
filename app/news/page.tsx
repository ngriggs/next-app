import ArticlePage from "../articles/page";

export default async function Loading() {
	const articlePage = await ArticlePage();
	return <div>{articlePage}</div>;
}
