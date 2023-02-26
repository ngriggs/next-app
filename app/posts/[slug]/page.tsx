import { render } from "datocms-structured-text-to-html-string";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata({ params }: any) {
	const article = await getArticle(params?.slug);
	return { title: article.allArticles[0].title };
}

const getArticle = async (slug: String) => {
	try {
		const headers = {
			"content-type": "application/json",
			Authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`,
		};
		const requestBody = {
			query: `
			query MyQuery($slug: String!) {
				allArticles(filter: {slug: {eq: $slug}}) {
				  id
				  title
				  _status
				  content {
					value
				  }
				  slug
				  _createdAt
				  author
				  images {
					url
				  }
				}
			  }
			`,
			variables: { slug },
		};
		const options = {
			method: "POST",
			headers,
			body: JSON.stringify(requestBody),
		};
		const response = await (
			await fetch(`${process.env.DATOCMS_API_URL}`, options)
		).json();
		console.log(slug);
		console.log("RESPONSE FROM FETCH REQUEST", response?.data);
		return await response.data;
	} catch (err) {
		console.log("ERROR DURING FETCH REQUEST", err);
	}
};

export default async function ArticlePage({ params }: any) {
	const article = await getArticle(params?.slug);
	if (article.allArticles.length === 0) {
		return <div>Loading...</div>;
	} else {
		const date = new Date(article.allArticles[0]._createdAt);

		return (
			<div className="px-6 pt-6 pb-12">
				<article className="prose prose-stone mx-auto lg:prose-lg prose-headings:font-black prose-p:font-medium prose-img:rounded-xl">
					<div className="text-center text-4xl">
						{article.allArticles[0].title}
					</div>
					<div>{article.allArticles[0].author}</div>
					<Image
						alt={article.allArticles[0].title}
						src={article.allArticles[0].images.url}
						width={1000}
						height={1000}
					></Image>
					<div>{date.toDateString()}</div>
					<div
						dangerouslySetInnerHTML={{
							__html: render(article.allArticles[0].content) || "",
						}}
					/>
				</article>
			</div>
		);
	}
}
