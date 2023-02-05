import BlogCard from "../components/blogCard";
import Link from "next/link";

interface Article2 {
	id: string;
	title: string;
	_status: string;
	content: {
		blocks: any[];
		links: any[];
		value: string;
	};
	slug: string;
	_createdAt: string;
}
interface PostProps {
	article: Article2;
}

const getAllPosts = async () => {
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
export default async function BlogPage() {
	const postCollection = await getAllPosts();
	return (
		<div className="bg-gray-200 p-4 ">
			<h1 className="text-3xl font-bold text-center">Newsletter</h1>
			<div className="my-8" />
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{postCollection.allArticles && postCollection.allArticles.length
					? postCollection.allArticles.map((edge: Article2) =>
							edge ? (
								<div key={edge.id}>
									{/* <Post article={edge} /> */}
									<Link href={`/posts/${edge.slug}`}>{edge.title}</Link>
								</div>
							) : null
					  )
					: null}
			</div>
		</div>
	);
}

export function Post({ article }: PostProps) {
	const { slug, id, title, content, _createdAt } = article || {};
	return (
		<Link href={`/posts/${slug}`}>
			<BlogCard
				id={id}
				title={title}
				content={content.value}
				created={_createdAt}
				image={""}
			/>
		</Link>
	);
}
