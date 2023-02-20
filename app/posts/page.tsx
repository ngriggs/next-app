import React from "react";
import { getAllArticles } from "@/lib/getAllArticles";
import Post from "../components/post";

export default async function ArticleList() {
	const postCollection = await getAllArticles();

	return (
		<div className="p-4 min-h-[75vh]">
			<h1 className="text-3xl font-summerVibesSolid font-normal text-center">
				insights
			</h1>
			<div className="my-8" />
			<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{postCollection.allArticles?.map((edge: any) => {
					return (
						<div
							key={edge.id}
							className="my-4 rounded-xl p-3 hover:scale-105 duration-300"
						>
							<Post article={edge} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
