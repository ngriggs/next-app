import React from "react";
import { getAllArticles } from "@/lib/getAllArticles";
import Post from "../components/post";

export default async function ArticleList() {
	const postCollection = await getAllArticles();

	return (
		<div className="min-h-[75vh] p-4">
			<h1 className="text-center font-summerVibesSolid text-3xl font-normal">
				insights
			</h1>
			<div className="my-8" />
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{postCollection.allArticles?.map((edge: any) => {
					return (
						<div
							key={edge.id}
							className="my-4 rounded-xl p-3 duration-300 hover:scale-105"
						>
							<Post article={edge} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
