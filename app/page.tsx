import Button from "./components/button";
import Carousel from "./components/carousel";
import HeroPage from "./components/hero";
import Gallery2 from "./gallery/page";
import { datocms } from "../lib/datocms";
import Link from "next/link";

// const getUserDetailByFetchAPICall = async () => {
// 	try {
// 	  const headers = {
// 		'content-type': 'application/json',
// 		'Authorization': `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`
// 	  };
// 	  const requestBody = {
// 		query: `
// 		query getAllArticles {
// 			allArticles {
// 				id
// 				title
// 				_status
// 				content {
// 					blocks
// 					links
// 					value
// 				}
// 				slug
// 				_createdAt
// 			}
// 			_allArticlesMeta {
// 				count
// 			}
// 		}
// 	`
// 	  };
// 	  const options = {
// 		method: 'GET',
// 		headers,
// 		body: JSON.stringify(requestBody)
// 	  };
// 	  const response = await (await fetch(`${process.env.DATOCMS_API_URL}`, options)).json();
// 	  console.log('RESPONSE FROM FETCH REQUEST', response?.data);
// 	  setUserDetails(response?.data?.nextUser ?? {});
// 	}
// 	catch (err) {
// 	  console.log('ERROR DURING FETCH REQUEST', err);
// 	}
// 	finally {
// 	  setIsLoading(false);
// 	}
//   };

export default async function HomePage() {
	const GetAllPostsQuery = `
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
	`;

	// const { postCollection } = await datocms.request(GetAllPostsQuery, {
	// 	first: 10,
	// });
	return (
		<div className="max-w-7xl mx-auto">
			<Carousel />
			<div className="my-8" />
			<HeroPage />
			<div className="my-8" />

			{/* <ul>
				{postCollection?.edges?.map((edge) =>
					edge?.node ? (
						<li key={edge.node.id}>
							<Link href={`/posts/${edge.node.slug}`}>{edge.node.title}</Link>
						</li>
					) : null
				)}
			</ul> */}

			<div className="flex justify-center">
				<a
					href="https://squareup.com/appointments/book/89lmsk6jh008w1/LPJGJT0WFHK20/start"
					target="_blank"
				>
					<Button
						bgColor="[#ec6a52]"
						hoverColor=""
						label="Book Now"
						styles="m-4 font-normal"
					/>
				</a>
			</div>

			<div className="my-8" />
			{/* @ts-expect-error Server Component */}
			<Gallery2 />
		</div>
	);
}
