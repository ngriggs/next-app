import React from "react";
import Link from "next/link";
import { StructuredText } from "react-datocms";

interface Article {
	id: string;
	title: string;
	_status: string;
	content: any;
	slug: string;
	_createdAt: string;
}

const getAllArticles = async () => {
	try {
		const headers = {
			"content-type": "application/json",
			Authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`,
		};
		const requestBody = {
			query: `
			query getAllArticles {
				allArticles {
				  id
				  title
				  _status
				  content {
					blocks
					links
					value
				  }
				  slug
				  _createdAt
				  author
				}
				_allArticlesMeta {
				  count
				}
			  }
			`,
		};
		const options = {
			method: "POST",
			headers,
			body: JSON.stringify(requestBody),
		};
		const response = await (
			await fetch(`${process.env.DATOCMS_API_URL}`, options)
		).json();
		console.log("RESPONSE FROM FETCH REQUEST", response?.data);
		return response.data;
	} catch (err) {
		console.log("ERROR DURING FETCH REQUEST", err);
	}
};

export default async function ArticleList() {
	const postCollection = await getAllArticles();

	return (
		<ul>
			{postCollection.allArticles?.map((edge: Article) =>
				edge ? (
					<li key={edge.id}>
						<Link href={`/posts/${edge.slug}`}>
							<div>{edge.title}</div>
							<div>{new Date(edge._createdAt).toDateString()}</div>
							<div>{JSON.stringify(edge.content.value)}</div>
							{/* <StructuredText data={edge.content.value} /> */}
						</Link>
					</li>
				) : null
			)}
		</ul>
	);
}
