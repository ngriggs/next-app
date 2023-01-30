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
	return await data.json();
}

export default async function Gallery2() {
	const data = await getImages();
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-5xl mt-10 px-6 gap-5 sm:gap-4 mx-auto mb-5">
			{data.data.map((image: Image) => (
				<div key={image.id} className="pb-1">
					<img
						className="object-cover aspect-square"
						src={image.media_url}
						alt={image.caption}
					/>
					<h2 className="text-slate-600 mt-1 text-sm font-semibold">
						{image.caption}
					</h2>
				</div>
			))}
		</div>
	);
}
