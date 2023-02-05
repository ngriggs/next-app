import Carousel from "./components/carousel";
import HeroPage from "./components/hero";
import Gallery2 from "./gallery/page";
import Link from "next/link";
import Footer from "./components/footer2";

interface Article {
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
export default async function HomePage() {
	const postCollection = await getAllArticles();

	return (
		<div className="max-w-7xl mx-auto">
			<Carousel />
			<div className="my-8" />
			<HeroPage />
			<div className="my-8" />

			<ul>
				{postCollection.allArticles?.map((edge: Article) =>
					edge ? (
						<li key={edge.id}>
							<Link href={`/posts/${edge.slug}`}>{edge.title}</Link>
						</li>
					) : null
				)}
			</ul>
			<div className="my-8" />
			<Footer />

			<div className="my-8" />
			{/* @ts-expect-error Server Component */}
			<Gallery2 />
		</div>
	);
}
