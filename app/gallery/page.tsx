import { Suspense } from "react";
import Loading from "../loading";
import InstagramCard from "../components/instagramCard";

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

export default async function Gallery2({ ...props }) {
  const data = await getImages();

  return (
    <Suspense fallback={<Loading />}>
      <div className="px-4 py-20">
        <div className="my-auto py-2">
          <p className="py-2 uppercase text-giggles-yellow">instagram</p>
          <h2 className="py-2 font-summerVibesSolid text-4xl font-normal sm:text-6xl">
            giggles on the gram
          </h2>
          <p className="py-2 text-gray-600 sm:text-xl">
            Check out our latest Instagram posts! Share your moments at Giggles
            with #gigglesplay or tag @giggles.play for a chance to be seen here!
          </p>
        </div>

        <div className="mx-auto mt-10 mb-5 grid max-w-7xl grid-cols-1 gap-5 px-6 sm:gap-4 md:grid-cols-2 xl:grid-cols-4 ">
          {data?.data.slice(0, props.slice).map((image: Image, index) => (
            <InstagramCard
              key={image.id}
              id={index}
              username={image.id}
              profileImageUrl={image.media_url}
              postImageUrl={image.permalink}
              caption={image.caption}
            />
          ))}
        </div>
      </div>
    </Suspense>
  );
}
