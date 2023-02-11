import { getAllArticles } from "../posts/page";
import Link from "next/link";
import Image from "next/image";

async function Blog3() {
	const container = await getAllArticles();
	const articles = container.allArticles;

	return (
		<div className="">
			<div className="container mx-auto px-4">
				<div className="md:w-5/6 md:mx-auto md:max-w-2xl">
					<h1 className="text-black text-3xl text-center font-bold sm:text-4xl">
						Blog
					</h1>
					<p className="text-center text-lg mt-2">
						Stay up to date with the latest fun and inspiration at Giggles Play
						- read our blog!
					</p>
				</div>
			</div>
			<div className="grid grid-cols-1 gap-3 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:max-w-7xl xl:mx-auto">
				{articles.map((article: any) => (
					<div>
						<div className="relative">
							<Image
								src={article.images.url}
								alt={article.title}
								width={300}
								height={300}
								className="w-full rounded-lg h-[500px] bg-gray-100 pt-5 xl:object-top xl:object-contain"
							/>
							<div className="absolute right-3 left-3 bottom-3">
								<span className="bg-primary-500 text-white tracking-wide text-sm uppercase px-2 py-1 rounded-md">
									Trending
								</span>
								<div className="left-3 bottom-3 right-3 bg-white p-4 mt-3 rounded-lg ">
									<div className="flex justify-between">
										<Image
											src={article.authorimage.url}
											alt={article.author}
											width={300}
											height={300}
											className="w-10 h-10 rounded-full mr-3"
										/>
										<p className="uppercase text-sm">{article.author}</p>
										<time
											dateTime={article._createdAt}
											className="block text-xs text-gray-500"
										>
											{new Date(article._createdAt).toDateString()}
										</time>
									</div>
									<h1 className="text-xl font-semibold text-black mb-4 mt-2 2xl:text-2xl min-h-[100px]">
										{article.title}
									</h1>
									<Link
										href={`/posts/${article.slug}`}
										className="flex items-center gap-x-1.5"
									>
										Read more
										<span>
											<div className="p-2">
												<svg
													stroke="currentColor"
													fill="currentColor"
													stroke-width="0"
													viewBox="0 0 256 512"
													height="1em"
													width="1em"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
												</svg>
											</div>
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
export default Blog3;
