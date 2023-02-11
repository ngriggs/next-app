import React from "react";
import { getAllArticles } from "@/lib/getAllArticles";
import Post from "../components/post";

export default async function ArticleList() {
	const postCollection = await getAllArticles();

	return (
		<div className="bg-gray-200 p-4 ">
			<h1 className="text-3xl font-bold text-center">Newsletter</h1>
			<div className="my-8" />
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{postCollection.allArticles?.map((edge: any) => {
					return (
						<div
							key={edge.id}
							className="my-4 rounded-xl p-3 hover:scale-105 duration-300 "
						>
							<Post article={edge} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
