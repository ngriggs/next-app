import { Suspense } from "react";
import Loading from "../loading";

interface Image {
	id: string;
	caption: string;
	media_url: string;
	timestamp: string;
	media_type: string;
	permalink: string;
}

interface ResponseData {
	data: Image[];
}

async function getImages(): Promise<ResponseData> {
	const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
	const data = await fetch(url);
	if (!data.ok) {
		throw new Error("Failed to fetch data");
	}
	return data.json();
}

export default async function Gallery2() {
	const data = await getImages();

	return (
		<Suspense fallback={<Loading />}>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mt-10 px-6 gap-5 sm:gap-4 mx-auto mb-5">
				{data.data.map((image: Image) => (
					<div key={image.id} className="pb-1">
						<a href={image.permalink} target="_blank">
							<img
								className="object-cover aspect-square hover:scale-105 rounded-lg"
								src={image.media_url}
								alt={image.caption}
							/>
						</a>
						{/* <h2 className="text-slate-600 mt-1 text-sm font-semibold">
							{image.caption}
						</h2> */}
					</div>
				))}
			</div>
		</Suspense>
	);
}
